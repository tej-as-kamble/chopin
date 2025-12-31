import "./TermsCheckbox.css";

const TermsCheckbox = () => {
  return (
    <label className="terms-checkbox">
      <input type="checkbox" />
      <span>
        I confirm that all details provided are correct and I accept the terms
      </span>
    </label>
  );
};

export default TermsCheckbox;
