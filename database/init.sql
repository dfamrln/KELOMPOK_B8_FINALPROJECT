-- TODO: Tulis query SQL kalian di sini (CREATE TABLE & INSERT) untuk inisialisasi database otomatis

-- =========================
-- TABEL USERS
-- =========================
CREATE TABLE IF NOT EXISTS Users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT NOT NULL UNIQUE,
    email TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL,
    created_at DATETIME DEFAULT (datetime('now','localtime'))
);

-- Contoh data awal
INSERT INTO Users (username, email, password) VALUES
('putri', 'putri@example.com', 'password123'),
('arif', 'arif@example.com', 'password123');

-- =========================
-- TABEL CATEGORIES
-- =========================
CREATE TABLE IF NOT EXISTS Categories (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    category_name TEXT NOT NULL UNIQUE
);

-- Contoh data awal
INSERT INTO Categories (category_name) VALUES
('Kuliah'),
('Kerja'),
('Pribadi');

-- =========================
-- TABEL TASKS
-- =========================
CREATE TABLE IF NOT EXISTS Tasks (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    description TEXT,
    status TEXT DEFAULT 'Belum Selesai',
    created_at DATETIME DEFAULT (datetime('now','localtime')),
    user_id INTEGER NOT NULL,
    category_id INTEGER,
    FOREIGN KEY(user_id) REFERENCES Users(id),
    FOREIGN KEY(category_id) REFERENCES Categories(id)
);

-- Contoh data awal
INSERT INTO Tasks (title, description, status, user_id, category_id) VALUES
('Mengerjakan Tugas DAA', 'Buat laporan tugas DAA minggu ini', 'Belum Selesai', 1, 1),
('Submit Laporan Magang', 'Kirim laporan magang ke supervisor', 'Belum Selesai', 2, 2),
('Belajar Bahasa Jepang', 'Review materi N5', 'Belum Selesai', 1, 3);
