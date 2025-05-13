import * as express from 'express';
const app = express();

app.post('/create-account', (req, res) => {
    const { username } = req.body;
    
    // Weak random token generation
    const token = Math.random().toString(36).substring(2);
    
    // Store token in database (omitted)
    res.json({ success: true, token });
});
