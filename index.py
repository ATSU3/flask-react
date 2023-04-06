import json
from flask import Flask, render_template

args = dict()
try:
    with open("args.json") as f:
        args = json.load(f)
except FileNotFoundError:
    pass

app = Flask(__name__, **args)


@app.route("/", defaults={"path": ""})
@app.route("/<path:path>")
def index(path):
    return render_template("index.html")


@app.route("/increment/<int:count>")
def increment(count):
    return f"{count + 1}"