import flask
from flask import Flask, request, redirect, flash, render_template, jsonify
import json
import os
import tourist_ml
from datetime import datetime



UPLOAD_FOLDER = os.path.join('static', 'uploadimage')

app = Flask(__name__)

app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER





@app.route('/')
def login():
    return render_template("index.html")

@app.route('/scam')
def scam():
    return render_template("scam.html")

@app.route('/Login_Sign_up')
def Login_Sign_up():
    return render_template("Login_Sign_up.html")

@app.route('/social')
def social():
    return render_template("social.html")

@app.route('/Overcharge')
def Overcharge():
    return render_template("Overcharge.html", lablename="", filename3="image/test.jpg")


@app.route('/UploadIMG', methods=['POST', 'GET'])
def image():
    global pred_label
    uploaded_img = request.files['uploadImage']
    print(uploaded_img)
    if uploaded_img.filename == "":
        return render_template("Overcharge.html", lablename="", filename3="image/test.jpg")
    else:
        uploaded_img.save(os.path.join(
            app.config['UPLOAD_FOLDER'], uploaded_img.filename))
        imagepath = os.path.join(
            app.config['UPLOAD_FOLDER'], uploaded_img.filename)
        pred_label, pred_prob = tourist_ml.main(imagepath)
        pricedic = {'Avacado 1KG':"Rs 100-200/=",'Bamboo beer cup':"Rs 200-300/=",'Coconut spoon':"Rs 400-500/=",'Handcraft Hat':"Rs 600-700/=",'King Coconut':"Rs 800-900/=",'Pomegranets 1':"Rs 1000-1100/=",'Pottery Cup':"Rs 1200-1300/=",'cocnut shell cup':"Rs 1400-1500/="}
        return render_template("Overcharge.html", lablename=f'{pred_label} {pricedic[pred_label]}', filename2=f"uploadimage/{uploaded_img.filename}")












if __name__ == "__main__":
    app.run()
