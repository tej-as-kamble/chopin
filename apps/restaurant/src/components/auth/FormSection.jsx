import "./FormSection.css";

const FormSection = ({ title, children }) => {
  return (
    <div className="form-section">
      <h4>{title}</h4>
      <div className="form-section-content">
        {children}
      </div>
    </div>
  );
};

export default FormSection;
