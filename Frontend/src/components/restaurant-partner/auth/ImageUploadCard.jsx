import "./ImageUploadCard.css";

const ImageUploadCard = () => {
  return (
    <div className="image-upload-card">
      <div className="image-placeholder">
        <span>Upload Cover Image</span>
      </div>
      <input type="file" hidden />
    </div>
  );
};

export default ImageUploadCard;
