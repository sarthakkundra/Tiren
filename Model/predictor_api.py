from keras.models import load_model
import pickle
import cv2
import numpy

from keras import backend as K

def make_prediction(photoFile):
    K.clear_session()
    width = 64
    height = 64
    
    filestr = photoFile.read()
    npimg = numpy.fromstring(filestr, numpy.uint8) 
    image = cv2.imdecode(npimg, cv2.IMREAD_UNCHANGED) 

    image = cv2.resize(image, (width, height))

    image = image.astype("float") / 255.0

    image = image.reshape((1, image.shape[0], image.shape[1], image.shape[2]))

    model = load_model('vgg_CNN_adam_early128_model.h5')
    lb = pickle.loads(open("label_bin_adam__early128.env", "rb").read())

    preds = model.predict(image)

    i = preds.argmax(axis=1)[0]
    label = lb.classes_[i]

    text = "{}: {:.2f}%".format(label, preds[0][i] * 100)

    return label, float(preds[0][i] * 100)




