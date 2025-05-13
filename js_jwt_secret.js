const jwt = require('jsonwebtoken');
const express = require('express');
const app = express();

// Hardcoded secret in source code
const JWT_SECRET = "hardcoded_very_secret_key_12345";

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    // Authentication logic omitted
    const token = jwt.sign({ username }, JWT_SECRET);
    res.json({ token });
});
