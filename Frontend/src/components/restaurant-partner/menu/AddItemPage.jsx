import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AddItemPage.css";

const categories = [
  { name: "Main Course", slug: "main-course" },
  { name: "Breads", slug: "breads" },
  { name: "Rice", slug: "rice" },
  { name: "Starters", slug: "starters" },
  { name: "Desserts", slug: "desserts" },
  { name: "Beverages", slug: "beverages" },
];

const AddItemPage = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    price: "",
    category: "",
    description: "",
    isVeg: true,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("NEW ITEM:", form);

    navigate(`/partner/restaurant/menu/${form.category}`);
  };

  return (
    <div className="rm-add-item">
      <h2>Add New Item</h2>

      <form onSubmit={handleSubmit}>
        <label>
          Item Name
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Price (₹)
          <input
            name="price"
            type="number"
            value={form.price}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Category
          <select
            name="category"
            value={form.category}
            onChange={handleChange}
            required
          >
            <option value="">Select category</option>
            {categories.map((c) => (
              <option key={c.slug} value={c.slug}>
                {c.name}
              </option>
            ))}
          </select>
        </label>

        <label>
          Description
          <textarea
            name="description"
            rows="3"
            value={form.description}
            onChange={handleChange}
          />
        </label>

        <label className="rm-veg-toggle">
          <input
            type="checkbox"
            name="isVeg"
            checked={form.isVeg}
            onChange={handleChange}
          />
          Veg Item
        </label>

        <div className="rm-form-actions">
          <button type="button" onClick={() => navigate(-1)}>
            Cancel
          </button>
          <button type="submit">Add Item</button>
        </div>
      </form>
    </div>
  );
};

export default AddItemPage;
