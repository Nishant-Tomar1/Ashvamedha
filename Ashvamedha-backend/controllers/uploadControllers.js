const cloudinary = require("../cloudinary/cloudinary");
const photo = require("../models/photo");
const { success, error } = require("../utils/responseWrapper");

const uploadImage = async (req, res) => {
  try {
    const { image, folderName, name } = req.body;

    const cloudImg = await cloudinary.uploader.upload(image, {
      folder: folderName,
    });
    console.log(cloudImg);
    
    const imgToUpload = await photo.create({
      folderName,
      image: {
        publicId: cloudImg.public_id,
        url: cloudImg.secure_url,
      },
      name,
    });
    return res.json(success(201, { imgToUpload }));
  } catch (e) {
    console.log("this error is from uploading post side ", e);
    return res.send(error(500, e));
  }
};

const getPhotos = async (req, res) => {
  try {
    const { folderName } = req.body;
    const photos = await photo.find({ folderName: { $eq: folderName } });
    res.send(success(200, photos));
  } catch (e) {
    console.log("this error is from get photos side ", e);
  }
};

const getPhotosByName = async (req, res) => {
  try {
    const { folderName, name } = req.body;
    const photos = await photo.find({ folderName, name });
    res.send(success(200, photos));
  } catch (e) {
    console.log("this error is from get photos side ", e);
  }
};

module.exports = { uploadImage, getPhotos, getPhotosByName };
