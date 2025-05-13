import pickle
from flask import Flask, request

app = Flask(__name__)

@app.route('/load_data', methods=['POST'])
def load_data():
    # Vulnerable to pickle deserialization attacks
    data = pickle.loads(request.data)
    return f"Loaded data: {data}"
