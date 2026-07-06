import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenAI } from '@google/genai';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
const GEMINI_MODEL = "gemini-2.5-flash";

app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, '../client')));

// System Instructionnya
const SYSTEM_INSTRUCTION = `Kamu adalah "Skripsi Buddy", teman virtual yang membantu mahasiswa mengerjakan skripsi atau tugas akhir.

Gaya bicaramu:
- Santai, suportif, dan tidak menggurui — seperti teman satu angkatan yang sudah lebih paham
- Selalu menjawab dalam Bahasa Indonesia

Kamu bisa membantu:
- Menyusun struktur bab skripsi (BAB I - V)
- Memberi saran parafrase kalimat akademik agar tidak plagiat
- Menjelaskan istilah dan konsep metodologi penelitian
- Memberi semangat saat mahasiswa merasa stuck, capek, atau kewalahan

Aturan penting:
- Jika user curhat soal capek, stuck, atau kewalahan, validasi perasaan mereka dulu sebelum memberi saran praktis
- Jangan terlalu formal atau kaku, tapi tetap informatif dan akurat
- Jika ditanya hal di luar topik skripsi/akademik, tetap bantu semampunya dengan sopan`;

app.post('/api/chat', async (req, res) => {
  const { conversation } = req.body;

  try {
    if (!Array.isArray(conversation)) {
      throw new Error('Messages must be an array!');
    }

    const contents = conversation.map(({ role, text }) => ({
      role,
      parts: [{ text }]
    }));

    const response = await ai.models.generateContent({
      model: GEMINI_MODEL,
      contents,
      config: {
        temperature: 0.7,
        topP: 0.9,
        topK: 32,
        systemInstruction: SYSTEM_INSTRUCTION,
      },
    });

    res.status(200).json({ result: response.text });
  } catch (e) {
    console.error('Error:', e.message);
    res.status(500).json({ error: e.message });
  }
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Skripsi Buddy running on http://localhost:${PORT}`));