from flask import Flask, render_template, jsonify

app = Flask(__name__)


@app.route('/')
def hello_world():
    greeting = "Hello from Flask!"
    return render_template('index.html', greeting=greeting)


if __name__ == '__main__':
    app.run(debug=True)
