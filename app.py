from flask import Flask, render_template, request
from predictor_api import make_prediction

app = Flask(__name__)

@app.route('/') 
def render_static():
    return "Hello World"

@app.route('/predict', methods=['POST'])
def predict():
    photoFile = request.files['file']
    result, result_val = make_prediction(photoFile)
    return {
        "result": result,
        "result_val": result_val
    }

if __name__ == '__main__':
    app.run(port=5000, debug=False)
