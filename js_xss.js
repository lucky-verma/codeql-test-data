const express = require('express');
const app = express();

app.get('/search', (req, res) => {
    const query = req.query.q || '';
    // Vulnerable to XSS
    res.send(`
        <h1>Search Results</h1>
        <div>You searched for: ${query}</div>
        <script>
            document.getElementById('results').innerHTML = '${query}';
        </script>
    `);
});
