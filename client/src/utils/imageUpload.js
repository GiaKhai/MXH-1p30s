export const checkImage = (file) => {
  let err = "";
  if (!file) return (err = "File không hợp lệ.");

  if (file.size > 1024 * 1024)
    // 1mb
    err = "Hình ảnh quá lớn";

  if (file.type !== "image/jpeg" && file.type !== "image/png")
    err = "Định dạng nhìn ảnh không chính xác.";

  return err;
};

export const imageUpload = async (images) => {
  let imgArr = [];
  for (const item of images) {
    const formData = new FormData();

    if (item.camera) {
      formData.append("file", item.camera);
    } else {
      formData.append("file", item);
    }
    const API_URL = "http://localhost:3000";

    const res = await fetch(API_URL + "/api/cloudinary-upload", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    imgArr.push({ public_id: data.public_id, url: data.secure_url });
  }
  return imgArr;
};
