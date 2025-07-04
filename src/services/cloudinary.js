export const uploadToCloudinary = async (file) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", "image-bimal-hospital"); // Replace with your preset
  formData.append("cloud_name", "dgnjnndpu");        // Replace with your cloud name

  const res = await fetch("https://api.cloudinary.com/v1_1/dgnjnndpu/image/upload", {
    method: "POST",
    body: formData,
  });

  const data = await res.json();
  return data.secure_url; // This is the image URL
};
