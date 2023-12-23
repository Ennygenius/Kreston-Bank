import { v2 as cloudinary } from "cloudinary";

import { CloudinaryStorage, Options } from "multer-storage-cloudinary";

// cloudinary.config({
//   cloud_name: process.env.CLOUD_NAME,
//   api_key: process.env.API_KEY,
//   api_secret: process.env.API_SECRET,
// });

cloudinary.config({
  cloud_name: "dxjqmfcfn",
  api_key: "116332428563717",
  api_secret: "TcZJYCJj_U_1EtrS_DyqoZthoY0",
});

const storage = new CloudinaryStorage({
  cloudinary,
  allowedFormats: ["jpg", "jpeg", "png"],
  params: {
    folder: "images/krestioBank",
  },
} as Options);

export default storage;
