# 🚀 Aplikasi Manajemen Data Pengguna

Aplikasi web sederhana untuk mengelola data pengguna menggunakan Vue.js di frontend dan Node.js (Express) dengan MongoDB di sisi backend.

## 🧩 Fitur Utama

- Tambah pengguna
- Lihat daftar pengguna
- Edit informasi pengguna
- Hapus pengguna

## 🛠️ Teknologi yang Digunakan

### Frontend

- [Vue.js](https://vuejs.org/)
- Axios (untuk HTTP request)

### Backend

- Node.js
- Express.js
- MongoDB (via Mongoose)

## 📦 Instalasi dan Menjalankan Proyek

### 1. Clone Repository

```bash
git clone https://github.com/username/user-management-app.git
cd user-management-app
cd backend
npm install
npm start
```

```bash
cd frontend
npm install
npm run serve
```

```sql
user-management-app/
├── backend/
│   ├── models/User.js
│   ├── routes/users.js
│   └── server.js
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   └── views/
│   └── App.vue
└── README.md

```

## 📘 Dokumentasi API

````json
Semua endpoint tersedia di `http://localhost:3000/api/users`

| Metode | Endpoint         | Deskripsi               | Body (JSON)         |
|--------|------------------|-------------------------|---------------------|
| GET    | /api/users       | Ambil semua pengguna    | -                   |
| POST   | /api/users       | Tambah pengguna baru    | { "name": "", ... } |
| GET    | /api/users/:id   | Ambil pengguna spesifik | -                   |
| PUT    | /api/users/:id   | Update data pengguna    | { "name": "", ... } |
| DELETE | /api/users/:id   | Hapus pengguna          | -                   |

Contoh request untuk menambah pengguna:

```json
POST /api/users
{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "role": "admin"
}
````

## 💡 Catatan

Aplikasi ini cocok untuk pembelajaran fullstack dasar.
Kamu bisa mengembangkan fitur seperti login, autentikasi JWT, dan pagination.

## 🧑‍💻 Kontribusi

Pull request sangat diterima! Silakan fork repo ini dan buat perubahan.
