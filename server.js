const express = require('express');
const app = express();

// Set port untuk server
const PORT = process.env.PORT || 3001;

// Middleware untuk parsing form data
app.use(express.urlencoded({ extended: true }));

// Route untuk halaman utama (index)
app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Home Page</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    background-color: #f5f5dc;
                    text-align: center;
                    padding: 50px;
                }
                button {
                    padding: 10px 20px;
                    background-color: #a0522d;
                    color: white;
                    border: none;
                    cursor: pointer;
                }
                button:hover {
                    background-color: #8b4513;
                }
            </style>
        </head>
        <body>
            <h1>Hello, World!</h1>
            <p>Selamat datang di halaman utama.</p>
            <a href="/form"><button>Isi Form</button></a>
        </body>
        </html>
    `);
});

// Route untuk halaman form
app.get('/form', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Form Page</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    background-color: #f5f5dc;
                    text-align: center;
                    padding: 50px;
                }
                form {
                    display: inline-block;
                    text-align: left;
                    background-color: #fff;
                    padding: 20px;
                    border-radius: 8px;
                    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
                }
                input {
                    margin: 10px 0;
                    padding: 10px;
                    width: 100%;
                    box-sizing: border-box;
                }
                button {
                    padding: 10px 20px;
                    background-color: #a0522d;
                    color: white;
                    border: none;
                    cursor: pointer;
                }
                button:hover {
                    background-color: #8b4513;
                }
            </style>
        </head>
        <body>
            <h1>Form Input Data</h1>
            <form action="/submit-form" method="POST">
                <label for="name">Nama:</label><br>
                <input type="text" id="name" name="name" required><br>
                <label for="email">Email:</label><br>
                <input type="email" id="email" name="email" required><br>
                <button type="submit">Submit</button>
            </form>
        </body>
        </html>
    `);
});

// Route untuk menangani form submit
app.post('/submit-form', (req, res) => {
    const { name, email } = req.body;
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Form Submitted</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    background-color: #f5f5dc;
                    text-align: center;
                    padding: 50px;
                }
                button {
                    padding: 10px 20px;
                    background-color: #a0522d;
                    color: white;
                    border: none;
                    cursor: pointer;
                }
                button:hover {
                    background-color: #8b4513;
                }
            </style>
        </head>
        <body>
            <h1>Form Submitted</h1>
            <p>Nama: ${name}</p>
            <p>Email: ${email}</p>
            <a href="/"><button>Kembali ke Beranda</button></a>
        </body>
        </html>
    `);
});

// Menjalankan server
app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});
