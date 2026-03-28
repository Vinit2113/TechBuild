import './sidebar.css';

const Sidebar = ({ isOpen, closeSidebar }) => {
  return (
    <>
      <div className={`slider ${isOpen ? "activ" : ""}`}>
        <div className="title-cross-container">
          <h2>Components</h2>
          <button className="cross" onClick={closeSidebar}>
            <i className="ri-close-large-fill"></i>
          </button>
        </div>

        <ul>
          <li><a href="#">CPU</a></li>
          <li><a href="#">GPU</a></li>
          <li><a href="#">Motherboard</a></li>
          <li><a href="#">RAM</a></li>
          <li><a href="#">SSD</a></li>
        </ul>
      </div>

      {/* floating cross btn */}
      {isOpen && (
        <div id="floatingCross" className="floating-cross" onClick={closeSidebar}>
          <i className="ri-close-line"></i>
        </div>
      )}
    </>
  );
};

export default Sidebar;