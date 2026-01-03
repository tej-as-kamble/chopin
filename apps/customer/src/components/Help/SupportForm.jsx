const SupportForm = ({ category }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Support request submitted");
  };

  return (
    <div className="support-form">
      <h2>{category}</h2>

      <form onSubmit={handleSubmit}>
        <select required>
          <option value="">Select Order</option>
          <option>Order #1234</option>
          <option>Order #5678</option>
        </select>

        <select required>
          <option value="">Select Issue</option>
          <option>Order delayed</option>
          <option>Incorrect item</option>
          <option>Payment issue</option>
        </select>

        <textarea
          rows="4"
          placeholder="Describe your issue (optional)"
        />

        <button type="submit">Submit Request</button>
      </form>
    </div>
  );
};

export default SupportForm;
