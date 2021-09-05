
from flask import Flask, render_template, render_template_string, request

app = Flask(__name__)

@app.route('/')
def index():
  return render_template("index.html")

@app.route('/login')
def login():
  return render_template("login.html")

@app.route('/login', methods=['POST'])
def login_attempt():
  username = request.form['username']
  password = request.form['pass']
  if(username == "theadminaccount" and password == "sfN7?v,2T3ZVSk+2RX~"):
    return render_template("flag.html")
  return render_template("login.html", error="Incorrect username or password!")

if __name__ == '__main__':
  app.run('0.0.0.0', port=8080)