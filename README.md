# Travalie

Travalie is a Flask-based travel assistance web application that helps tourists identify common tourist items from images and estimate their price range. The project combines a simple front-end experience with a TensorFlow/Keras image classification model to provide a practical tool for spotting overcharging situations and learning about travel-related scams.

## Features

- Tourist-friendly landing page with travel information and destination highlights
- Scam awareness section for common travel-related frauds
- Image upload interface for classifying tourist items
- AI-powered prediction of the item and associated price category
- Trained CNN model included for quick use
- Training notebook included for model development and experimentation

## Project Overview

The application uses:

- Flask for the web backend
- TensorFlow and Keras for image classification
- NumPy for preprocessing and prediction handling
- HTML/CSS/JavaScript templates for the user interface

The main workflow is:

1. A user uploads an image through the web app
2. The uploaded image is processed by the trained model
3. The app predicts the item category and displays a related price label

## Repository Structure

- app.py – Flask application entry point and routes
- tourist_ml.py – Loads the trained model and performs predictions
- tourist_iteam.h5 – Pretrained TensorFlow model
- Tourists_cnn_classification.ipynb – Notebook used for model training and experimentation
- templates/ – HTML templates for the web pages
- static/ – CSS, JavaScript, and uploaded image assets
- appsetting.json – Configuration file included in the repository

## Requirements

Make sure you have Python installed. The app is designed to work with Python 3.9+.

Install the required packages:

```bash
pip install flask tensorflow numpy pillow
```

## Getting Started

1. Clone the repository:

```bash
git clone <your-repository-url>
cd travel
```

2. Create and activate a virtual environment (optional but recommended):

```bash
python -m venv venv
venv\Scripts\activate
```

3. Install the dependencies:

```bash
pip install flask tensorflow numpy pillow
```

4. Run the application:

```bash
python app.py
```

5. Open your browser and visit:

```text
http://127.0.0.1:5000/
```

## Usage

- Open the home page to explore travel content
- Visit the scam information page to learn about common tourist scams
- Use the overcharge page to upload an image and get an AI prediction

## Model Notes

The model file tourist_iteam.h5 is used by the Flask app for inference. If you want to retrain or modify the classifier, use the notebook Tourists_cnn_classification.ipynb as a starting point.

## Notes

- The notebook was originally created for a Google Colab-style workflow, so some paths may need to be adjusted if used outside that environment.
- The current project is a prototype and can be improved with better model accuracy, expanded item classes, and more robust deployment settings.

## Future Improvements

- Add a database for saved predictions
- Improve accuracy with a larger labeled dataset
- Add user authentication and history tracking
- Deploy the app to a cloud platform such as Render, Heroku, or Azure
