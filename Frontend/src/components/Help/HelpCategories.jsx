const categories = [
  "Orders & Delivery",
  "Payments & Refunds",
  "Account & Login",
  "Restaurants & Food",
  "Offers & Pricing",
  "Safety & Support",
];

const HelpCategories = ({ onSelect }) => {
  return (
    <div className="help-categories">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onSelect(cat)}
          className="category-card"
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default HelpCategories;
