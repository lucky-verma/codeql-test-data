from flask import Flask, request
import sqlite3

app = Flask(__name__)

@app.route('/users')
def search_users():
    query = request.args.get('name', '')
    conn = sqlite3.connect('users.db')
    cursor = conn.cursor()
    # Vulnerable to SQL injection
    sql = f"SELECT * FROM users WHERE name LIKE '%{query}%'"
    cursor.execute(sql)
    return str(cursor.fetchall())
