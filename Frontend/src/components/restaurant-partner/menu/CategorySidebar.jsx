import { NavLink } from "react-router-dom";
import "./CategorySidebar.css";

const categories = [
  { name: "Main Course", slug: "main-course" },
  { name: "Breads", slug: "breads" },
  { name: "Rice", slug: "rice" },
  { name: "Starters", slug: "starters" },
  { name: "Desserts", slug: "desserts" },
  { name: "Beverages", slug: "beverages" },
];


const CategorySidebar = () => {
  return (
    <aside className="rm-category-sidebar">
      <h3>Categories</h3>
      {categories.map((cat) => (
        <NavLink
          key={cat.slug}
          to={`/partner/restaurant/menu/${cat.slug}`}
          className={({ isActive }) =>
            isActive ? "rm-cat active" : "rm-cat"
          }
        >
          {cat.name}
        </NavLink>
      ))}
    </aside>
  );
};

export default CategorySidebar;
