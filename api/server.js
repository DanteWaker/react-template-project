import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import fs from 'fs/promises'
import cors from 'cors';

const app = express()
const port = 3000

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const jsonFilePath = path.join(__dirname, './data/data.json')

app.use(cors())

app.get('/api/data', async (req, res) => {
  try {
    const data = await fs.readFile(jsonFilePath, 'utf-8')
    res.json(JSON.parse(data))
  } catch (err) {
    res.status(500).json({ error: 'Error reading JSON file' })
  }
})

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
})
