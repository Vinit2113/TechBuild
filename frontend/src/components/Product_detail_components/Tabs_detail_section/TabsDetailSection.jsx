import { useState } from 'react';
import './TabsDetail.css';

const TabsDetailSection = () => {
  const [active, setActive] = useState("specs");

  return (
    <div className="tabs">
      <span
        className={active === "specs" ? "active" : ""}
        onClick={() => setActive("specs")}
      >
        Detailed Specifications
      </span>
      <span
        className={active === "reviews" ? "active" : ""}
        onClick={() => setActive("reviews")}
      >
        Customer Reviews
      </span>
      <span
        className={active === "support" ? "active" : ""}
        onClick={() => setActive("support")}
      >
        Compatibility & Support
      </span>
    </div>
  );
};

export default TabsDetailSection;