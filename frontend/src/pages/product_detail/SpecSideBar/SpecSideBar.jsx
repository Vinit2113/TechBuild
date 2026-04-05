import './specsidebar.css';

const SpecSidebar = ({ isOpen, onClose, product }) => {
  console.log("Sidebar Sec: ", product);

  if (!product) return null;

  const specs = product?.specifications || [];

  // Optional grouping (fallback to "General")
  const groupedSpecs = specs.reduce((acc, spec) => {
    const group = spec.spec_group || "General";
    if (!acc[group]) acc[group] = [];
    acc[group].push(spec);
    return acc;
  }, {});

  return (
    <>
      <div id="specSidebar" className={`spec-sidebar ${isOpen ? 'active' : ''}`}>

        <div className="sidebar-header">
          <h2>Specifications</h2>
          <button className="close-spec" onClick={onClose}>
            <i className="ri-close-line btn-i"></i>
          </button>
        </div>

        <div className="sidebar-specs-list">

          {/* 🔥 Loop through groups */}
          {Object.keys(groupedSpecs).map((groupName, index) => (
            <div key={index}>

              <h3>{groupName}</h3>

              <ul>
                {groupedSpecs[groupName].map((spec) => (
                  <li key={spec.spec_id}>
                    <span>{spec.spec_name}</span>
                    <span>{spec.spec_value}</span>
                  </li>
                ))}
              </ul>

            </div>
          ))}

          {/* 🔥 Attributes Section */}
          {product?.attributes?.length > 0 && (
            <>
              <h3>Attributes</h3>
              <ul>
                {product.attributes.map((attr) => (
                  <li key={attr.attribute_id}>
                    <span>{attr.attribute_name}</span>
                    <span>{attr.attribute_value}</span>
                  </li>
                ))}
              </ul>
            </>
          )}

        </div>
      </div>
    </>
  );
};

export default SpecSidebar;