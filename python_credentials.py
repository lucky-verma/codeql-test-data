import mysql.connector

def connect_to_database():
    # Hardcoded credentials in source code
    connection = mysql.connector.connect(
        host="database.example.com",
        user="admin",
        password="SuperSecretP@ssword123!",
        database="customer_data"
    )
    return connection
