# 🎓 Skripsi Buddy

Chatbot AI yang membantu mahasiswa mengerjakan skripsi atau tugas akhir — mulai dari menyusun rumusan masalah, memberi saran parafrase, menjelaskan metodologi penelitian, hingga menjadi teman curhat saat merasa stuck atau kewalahan.

Dibuat sebagai final project untuk program **AI Productivity and AI API Integration for Developers** oleh Hacktiv8.

---

## ✨ Fitur

- 💬 Chat real-time dengan Gemini AI (bukan chatbot statis/hardcoded)
- 📚 Bantu menyusun struktur bab skripsi (BAB I - V)
- ✍️ Saran parafrase kalimat akademik
- 🧠 Penjelasan istilah dan konsep metodologi penelitian
- 🤗 Respons suportif saat mahasiswa curhat capek atau stuck
- 🎨 Tampilan bertema notebook 

---

## 🛠️ Tech Stack

**Backend:**
- Node.js + Express
- Google Gemini AI (`@google/genai`) — model `gemini-2.5-flash`
- dotenv, cors

**Frontend:**
- HTML, CSS, Vanilla JavaScript (tanpa framework)

---

## 📁 Struktur Folder

```
chatbot/
├── server/
│   ├── index.js          # Backend Express + endpoint /api/chat
│   ├── .env               # Gemini API key 
│   └── package.json
└── client/
    ├── index.html          # Tampilan utama chatbot
    ├── script.js           # Logika fetch ke backend
    ├── style.css           # Styling 
    └── logo.png            # Logo Skripsi Buddy
```

---

## 🚀 Cara Menjalankan

1. Clone repository ini
   ```
   git clone https://github.com/meiditaa02/Hacktiv8-SkripsiBuddy-Meidita.git
   cd Hacktiv8-SkripsiBuddy-Meidita/server
   ```

2. Install dependencies
   ```
   npm install
   ```

3. Buat file `.env` di folder `server`, isi dengan API key Gemini kamu:
   ```
   GEMINI_API_KEY=your_api_key_here
   ```

4. Jalankan server
   ```
   node index.js
   ```

5. Buka browser ke `http://localhost:3000`

---

## 👩‍💻 Dibuat oleh

**Meidita** — Mahasiswa Sistem Informasi, Institut Bisnis dan Informatika Kesatuan (IBIK)
Program: AI Productivity and AI API Integration for Developers — Hacktiv8
