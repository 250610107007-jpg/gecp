import sqlite3
import os
import json

DATABASE = os.path.join(os.path.dirname(os.path.abspath(__file__)), "database.db")


def get_db():
    conn = sqlite3.connect(DATABASE)
    conn.row_factory = sqlite3.Row
    return conn


def init_db():
    conn = get_db()
    cursor = conn.cursor()

    # 1. Students table
    cursor.execute("""
        CREATE TABLE IF NOT EXISTS students (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            enrollment_no TEXT UNIQUE NOT NULL,
            name TEXT NOT NULL,
            email TEXT,
            department TEXT NOT NULL,
            semester INTEGER NOT NULL,
            batch TEXT NOT NULL,
            password TEXT NOT NULL,
            mobile TEXT
        )
    """)
    # Check student email column
    cursor.execute("PRAGMA table_info(students)")
    stud_cols = [col[1] for col in cursor.fetchall()]
    if "email" not in stud_cols:
        try:
            cursor.execute("ALTER TABLE students ADD COLUMN email TEXT")
        except Exception:
            pass
    # Populate existing rows with default email if empty
    try:
        cursor.execute("UPDATE students SET email = enrollment_no || '@student.gecp.ac.in' WHERE email IS NULL OR email = ''")
    except Exception:
        pass

    # 2. Faculty table
    cursor.execute("""
        CREATE TABLE IF NOT EXISTS faculty (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            email TEXT UNIQUE NOT NULL,
            faculty_code TEXT,
            department TEXT NOT NULL,
            password TEXT NOT NULL
        )
    """)
    # Check faculty columns
    cursor.execute("PRAGMA table_info(faculty)")
    fac_cols = [col[1] for col in cursor.fetchall()]
    if "faculty_code" not in fac_cols:
        try:
            cursor.execute("ALTER TABLE faculty ADD COLUMN faculty_code TEXT")
        except Exception:
            pass

    # 3. Timetable table
    cursor.execute("""
        CREATE TABLE IF NOT EXISTS timetable (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            department TEXT NOT NULL,
            semester INTEGER NOT NULL,
            batch TEXT NOT NULL,
            day TEXT NOT NULL,
            time TEXT NOT NULL,
            subject TEXT NOT NULL,
            room TEXT NOT NULL,
            faculty TEXT NOT NULL,
            note TEXT
        )
    """)

    # 4. Notes table
    cursor.execute("""
        CREATE TABLE IF NOT EXISTS notes (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            student_id TEXT,
            category TEXT,
            title TEXT NOT NULL,
            description TEXT,
            department TEXT,
            semester INTEGER,
            batch TEXT,
            faculty TEXT,
            file_data TEXT,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
    """)
    cursor.execute("PRAGMA table_info(notes)")
    note_cols = [col[1] for col in cursor.fetchall()]
    if "student_id" not in note_cols:
        try:
            cursor.execute("ALTER TABLE notes ADD COLUMN student_id TEXT")
        except Exception:
            pass
    if "category" not in note_cols:
        try:
            cursor.execute("ALTER TABLE notes ADD COLUMN category TEXT")
        except Exception:
            pass

    # 5. Submissions table
    cursor.execute("""
        CREATE TABLE IF NOT EXISTS submissions (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            student_id TEXT,
            category TEXT,
            title TEXT NOT NULL,
            description TEXT,
            due_date TEXT,
            submission_date TEXT,
            check_date TEXT,
            department TEXT,
            semester INTEGER,
            batch TEXT,
            faculty TEXT,
            file_data TEXT,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
    """)
    # 6. Password Resets (Email OTP verification)
    cursor.execute("""
        CREATE TABLE IF NOT EXISTS password_resets (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            email TEXT NOT NULL,
            otp TEXT NOT NULL,
            user_type TEXT NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            expires_at TIMESTAMP NOT NULL,
            used INTEGER DEFAULT 0
        )
    """)

    # 7. Exam Timetable (GTU End-Sem & Mid-Sem Exams)
    cursor.execute("""
        CREATE TABLE IF NOT EXISTS exam_timetable (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            department TEXT NOT NULL,
            semester INTEGER NOT NULL,
            exam_type TEXT NOT NULL,
            subject_code TEXT,
            subject_name TEXT NOT NULL,
            exam_date TEXT NOT NULL,
            exam_time TEXT NOT NULL,
            room TEXT NOT NULL,
            block TEXT,
            notes TEXT
        )
    """)

    conn.commit()

    # Seed timetable if empty or only minimal test entries
    seed_default_timetable(conn)

    # Seed default exam timetable if empty
    seed_default_exams(conn)

    conn.close()


def seed_default_timetable(conn):
    cursor = conn.cursor()
    cursor.execute("SELECT COUNT(*) FROM timetable")
    count = cursor.fetchone()[0]

    # Only seed if fewer than 10 rows exist (meaning only demo entries)
    if count < 10:
        json_path = os.path.join(os.path.dirname(os.path.abspath(__file__)), "default_timetable.json")
        if os.path.exists(json_path):
            try:
                with open(json_path, "r", encoding="utf-8") as f:
                    entries = json.load(f)

                sem_map = {"I": 1, "III": 3, "V": 5, "VII": 7, 1: 1, 3: 3, 5: 5, 7: 7}

                # Clear existing minimal test entries so we have a clean full schedule
                cursor.execute("DELETE FROM timetable")

                for e in entries:
                    raw_sem = e.get("sem") or e.get("semester") or "I"
                    sem_num = sem_map.get(str(raw_sem), 1)
                    cursor.execute("""
                        INSERT INTO timetable
                        (department, semester, batch, day, time, subject, room, faculty, note)
                        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
                    """, (
                        e.get("dept") or e.get("department", ""),
                        sem_num,
                        e.get("batch", "ALL"),
                        e.get("day", ""),
                        e.get("time", ""),
                        e.get("subject", ""),
                        e.get("room", ""),
                        e.get("faculty", ""),
                        e.get("note", "")
                    ))

                conn.commit()
                print(f"Successfully seeded {len(entries)} timetable entries into database.")
            except Exception as ex:
                print("Failed to seed timetable:", ex)


def seed_default_exams(conn):
    cursor = conn.cursor()
    cursor.execute("SELECT COUNT(*) FROM exam_timetable")
    count = cursor.fetchone()[0]

    if count == 0:
        default_exams = [
            ("Computer Engineering", 3, "GTU End-Sem Exam", "3130702", "Data Structures", "2026-10-15", "10:30 AM - 01:00 PM", "8104", "Block CP-A (Roll 01-30)", "Bring GTU Hall Ticket & College ID"),
            ("Computer Engineering", 3, "GTU End-Sem Exam", "3130703", "Database Management Systems", "2026-10-17", "10:30 AM - 01:00 PM", "8105", "Block CP-B (Roll 31-60)", "Non-programmable calculator allowed"),
            ("Computer Engineering", 3, "GTU End-Sem Exam", "3130704", "Digital Electronics", "2026-10-19", "10:30 AM - 01:00 PM", "8006", "Block CP-A", "Reporting time 10:00 AM"),
            ("Computer Engineering", 3, "GTU End-Sem Exam", "3130006", "Probability and Statistics", "2026-10-21", "10:30 AM - 01:00 PM", "8103", "Block CP-C", "Statistical tables will be provided"),
            ("Computer Engineering", 5, "GTU End-Sem Exam", "3150703", "Analysis and Design of Algorithms", "2026-10-16", "02:00 PM - 04:30 PM", "8101", "Block CP-1", "Mandatory ID Card required"),
            ("Computer Engineering", 5, "GTU End-Sem Exam", "3150710", "Computer Networks", "2026-10-18", "02:00 PM - 04:30 PM", "8102", "Block CP-2", "GTU Examination Rules apply"),
            ("Computer Engineering", 5, "GTU End-Sem Exam", "3150711", "Software Engineering", "2026-10-20", "02:00 PM - 04:30 PM", "8104", "Block CP-1", "No smartwatches allowed"),
            ("Computer Engineering", 5, "Mid-Sem Exam", "3150713", "Python Programming", "2026-10-22", "02:00 PM - 03:30 PM", "8008", "Block CP-Lab", "Internal practical test included"),
            ("Computer Engineering", 7, "GTU End-Sem Exam", "3170710", "Information and Network Security", "2026-10-15", "02:00 PM - 04:30 PM", "8103", "Block CP-A", "Final year GTU exam"),
            ("Computer Engineering", 7, "GTU End-Sem Exam", "3170701", "Compiler Design", "2026-10-17", "02:00 PM - 04:30 PM", "8104", "Block CP-B", "GTU Examination Rules apply"),
            ("Mechanical Engineering", 3, "GTU End-Sem Exam", "3131905", "Engineering Thermodynamics", "2026-10-15", "10:30 AM - 01:00 PM", "5104", "Block ME-A", "Steam tables and charts permitted"),
            ("Mechanical Engineering", 3, "GTU End-Sem Exam", "3131906", "Kinematics and Theory of Machines", "2026-10-17", "10:30 AM - 01:00 PM", "5105", "Block ME-B", "Drawing instruments required"),
            ("Mechanical Engineering", 5, "GTU End-Sem Exam", "3151910", "Manufacturing Technology", "2026-10-16", "02:00 PM - 04:30 PM", "5104", "Block ME-1", "Reporting time 01:30 PM"),
            ("Mechanical Engineering", 5, "GTU End-Sem Exam", "3151911", "Dynamics of Machinery", "2026-10-18", "02:00 PM - 04:30 PM", "5105", "Block ME-2", "Calculator permitted"),
            ("Electrical Engineering", 3, "GTU End-Sem Exam", "3130905", "Circuits and Networks", "2026-10-16", "10:30 AM - 01:00 PM", "4101", "Block EE-A", "Scientific calculator allowed"),
            ("Electrical Engineering", 3, "GTU End-Sem Exam", "3130906", "Electrical Machines - I", "2026-10-18", "10:30 AM - 01:00 PM", "4102", "Block EE-B", "Reporting time 10:00 AM"),
            ("Electrical Engineering", 5, "GTU End-Sem Exam", "3150910", "Power System - II", "2026-10-15", "02:00 PM - 04:30 PM", "4101", "Block EE-1", "GTU Hall Ticket mandatory"),
            ("Civil Engineering", 3, "GTU End-Sem Exam", "3130607", "Building Construction Technology", "2026-10-15", "10:30 AM - 01:00 PM", "7101", "Block CE-A", "Standard code books not permitted"),
            ("Civil Engineering", 3, "GTU End-Sem Exam", "3130608", "Mechanics of Solids", "2026-10-17", "10:30 AM - 01:00 PM", "7102", "Block CE-B", "Drawing kit and scientific calculator required"),
            ("Civil Engineering", 5, "GTU End-Sem Exam", "3150610", "Geotechnical Engineering", "2026-10-16", "02:00 PM - 04:30 PM", "7101", "Block CE-1", "Reporting time 01:30 PM")
        ]

        try:
            cursor.executemany("""
                INSERT INTO exam_timetable
                (department, semester, exam_type, subject_code, subject_name, exam_date, exam_time, room, block, notes)
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
            """, default_exams)
            conn.commit()
            print(f"Successfully seeded {len(default_exams)} default exam timetable entries.")
        except Exception as ex:
            print("Failed to seed exam timetable:", ex)