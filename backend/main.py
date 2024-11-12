from flask import Flask, request, jsonify
from flask_cors import CORS
import mysql.connector

db_config = {
    'user': 'your_username',
    'password': 'your_password',
    'host': 'localhost',
    'database': 'your_database'
}

app = Flask(__name__)
#CORS(app)

# Эндпоинт для получения данных
@app.route('/data', methods=['GET'])
def get_data():
    try:
        # Подключение к базе данных
        conn = mysql.connector.connect(**db_config)
        cursor = conn.cursor(dictionary=True)

        # Выполнение SQL-запроса
        cursor.execute("SELECT * FROM your_table")
        results = cursor.fetchall()

        # Закрытие соединения
        cursor.close()
        conn.close()

        return jsonify(results), 200
    except mysql.connector.Error as err:
        return jsonify({"error": str(err)}), 500

# Эндпоинт для добавления данных
@app.route('/data', methods=['POST'])
def add_data():
    data = request.json
    name = data.get('name')

    try:
        # Подключение к базе данных
        conn = mysql.connector.connect(**db_config)
        cursor = conn.cursor()

        # Выполнение SQL-запроса
        cursor.execute("INSERT INTO your_table (name) VALUES (%s)", (name,))
        conn.commit()

        # Закрытие соединения
        cursor.close()
        conn.close()

        return jsonify({"message": "Data added successfully!"}), 201
    except mysql.connector.Error as err:
        return jsonify({"error": str(err)}), 500

if __name__ == '__main__':
    app.run(debug=True)
