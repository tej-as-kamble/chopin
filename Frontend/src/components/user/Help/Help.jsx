import { useState } from "react";
import HelpSearch from "./HelpSearch";
import HelpCategories from "./HelpCategories";
import SupportForm from "./SupportForm";
import FAQAccordion from "./FAQAccordion";
import NeedMoreHelp from "./NeedMoreHelp";
import "./Help.css";

const Help = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <div className="help-page">
      <h1>How can we help you?</h1>
      <p className="help-subtitle">
        Find answers or raise a support request
      </p>

      <HelpSearch />

      <HelpCategories onSelect={setSelectedCategory} />

      {selectedCategory && (
        <SupportForm category={selectedCategory} />
      )}

      <FAQAccordion />

      <NeedMoreHelp />
    </div>
  );
};

export default Help;
