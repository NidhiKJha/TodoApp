import React, { ChangeEvent, useState } from "react";


const ImagePreview: React.FC = () => {
  const [image, setImage] = useState("");

  const onImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => setImage(reader.result as string);
    reader.onerror = error => console.log("Error: ", error);
  };

  return (
    <div>
      <input type="file" onChange={onImageUpload} name="img" accept="image/*" />
      <img src={image} alt="preview" />
    </div>
  );
};

export default ImagePreview;
