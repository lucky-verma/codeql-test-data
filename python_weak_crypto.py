import hashlib
from flask import Flask, request

app = Flask(__name__)

@app.route('/register', methods=['POST'])
def register():
    username = request.form.get('username')
    password = request.form.get('password')
    
    # Weak hashing algorithm (MD5)
    hashed_password = hashlib.md5(password.encode()).hexdigest()
    
    # Save to database (omitted)
    return f"User {username} registered successfully"
