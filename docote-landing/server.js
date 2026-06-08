import express from 'express';
import Database from 'better-sqlite3';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const db = new Database(path.join(__dirname, 'docote.db'));
const port = process.env.PORT || 8088;

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

db.exec(`
  CREATE TABLE IF NOT EXISTS early_access_requests (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
  )
`);

app.use(express.json());
app.use(express.static(__dirname));

app.post('/api/early-access', (req, res) => {
  const name = (req.body?.name || '').trim();
  const email = (req.body?.email || '').trim().toLowerCase();

  if (!name || name.length < 2) {
    return res.status(400).json({ ok: false, error: 'Please enter your name.' });
  }

  if (!emailRegex.test(email)) {
    return res.status(400).json({ ok: false, error: 'Please enter a valid email address.' });
  }

  const existing = db.prepare('SELECT id FROM early_access_requests WHERE email = ?').get(email);
  if (existing) {
    return res.json({ ok: true, duplicate: true, message: 'This email is already on the early access list.' });
  }

  db.prepare('INSERT INTO early_access_requests (name, email) VALUES (?, ?)').run(name, email);
  return res.json({ ok: true, duplicate: false, message: 'Thanks — your request has been received.' });
});

app.get('/api/health', (_req, res) => {
  res.json({ ok: true });
});

app.listen(port, '0.0.0.0', () => {
  console.log(`DoCoTe landing page running on http://0.0.0.0:${port}`);
});
