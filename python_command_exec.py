import subprocess
from flask import Flask, request

app = Flask(__name__)

@app.route('/ping')
def ping_host():
    host = request.args.get('host', 'localhost')
    # Vulnerable to command injection
    result = subprocess.getoutput(f"ping -c 1 {host}")
    return result
