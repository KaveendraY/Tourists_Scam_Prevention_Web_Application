import tensorflow as tf
import numpy as np

def prediction_probability_label(model, img_path, class_labels, is_rgb=True)->tuple:
  if is_rgb:
    img = tf.keras.utils.load_img(
                img_path, color_mode='rgb', target_size=[255, 255],
                interpolation='nearest'
            )
  else:
            img = tf.keras.utils.load_img(
                img_path, color_mode='grayscale', target_size=[255, 255],
                interpolation='nearest'
            )

  input_arr = tf.keras.preprocessing.image.img_to_array(img)
  input_arr = np.array([input_arr])  # Convert single image to a batch.
  input_arr = input_arr / 255
  pred_probs = model.predict(input_arr)[0]

  pred_class = np.argmax(pred_probs)
  pred_label = class_labels[pred_class]
  pred_prob = round(pred_probs[pred_class]*100, 2)

  return (pred_label, pred_prob)



def main(imagepath):
    newmodel = tf.keras.models.load_model("tourist_iteam.h5")
    class_labels = ['Avacado','Bamboo beer cup','Coconut spoon','Handcraft Hat','King Coconut','Pomegranets','Pottery Cup','cocnut shell cup']
    pred_label, pred_prob =prediction_probability_label(newmodel, imagepath, class_labels)
    print(pred_label,pred_prob)
    return  pred_label, pred_prob