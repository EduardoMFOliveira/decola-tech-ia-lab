from flask import Flask, render_template, request, jsonify
from dotenv import load_dotenv
import openai
import os

load_dotenv()
app = Flask(__name__)

openai.api_key = os.getenv("OPENAI_API_KEY")

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/generate', methods=['POST'])
def generate_text():
    data = request.json
    try:
        response = openai.chat.completions.create(
            model="gpt-3.5-turbo",
            messages=[{"role": "user", "content": data['prompt']}],
            temperature=0.7
        )
        return jsonify({
            "result": response.choices[0].message.content,
            "tokens": response.usage.total_tokens
        })
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route('/moderate', methods=['POST'])
def moderate_content():
    data = request.json
    try:
        response = openai.moderations.create(input=data['text'])
        return jsonify(response.results[0].category_scores)
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
