import './specsidebar.css';

const SpecSidebar = ({ isOpen, onClose }) => {
  return (
    <>
      <div id="specSidebar" className={`spec-sidebar ${isOpen ? 'active' : ''}`}>
        <div className="sidebar-header">
          <h2>Specifications</h2>
          <button className="close-spec" onClick={onClose}>
            <i className="ri-close-line btn-i" ></i>
          </button>
        </div>

        <div className="sidebar-specs-list">
          <h3>Key Specs</h3>
          <ul>
            <li>
              <span>Graphics Coprocessor</span>
              <span>NVIDIA GeForce GT 740</span>
            </li>
            <li>
              <span>Memory Size</span>
              <span>4 GB</span>
            </li>
            <li>
              <span>Memory Type</span>
              <span>GDDR3</span>
            </li>
            <li>
              <span>Memory Interface Bus</span>
              <span>128-bit</span>
            </li>
            <li>
              <span>Bus Standard</span>
              <span>PCI Express 3.0 x16</span>
            </li>
            <li>
              <span>Max Digital Resolution</span>
              <span>2560 x 1440 @ 60Hz</span>
            </li>
            <li>
              <span>Output Interface</span>
              <span>1x HDMI, 1x DVI, 1x VGA</span>
            </li>
          </ul>

          <h3>Performance & Technology</h3>
          <ul>
            <li>
              <span>GPU Architecture</span>
              <span>NVIDIA Kepler (GK107)</span>
            </li>
            <li>
              <span>CUDA Cores</span>
              <span>384</span>
            </li>
            <li>
              <span>Memory Clock Speed</span>
              <span>1333 MHz</span>
            </li>
            <li>
              <span>DirectX Support</span>
              <span>Version 12 (API 11_0)</span>
            </li>
            <li>
              <span>OpenGL Support</span>
              <span>Version 4.6</span>
            </li>
            <li>
              <span>Special Features</span>
              <span>NVIDIA PhysX, 3D Vision Ready, Adaptive VSync</span>
            </li>
          </ul>

          <h3>Physical & Power</h3>
          <ul>
            <li>
              <span>Cooling System</span>
              <span>Heatsink with Active Fan</span>
            </li>
            <li>
              <span>TDP (Power Draw)</span>
              <span>49 Watts</span>
            </li>
            <li>
              <span>Recommended PSU</span>
              <span>300 Watts</span>
            </li>
            <li>
              <span>Product Dimensions</span>
              <span>16.7 x 12.2 x 2.0 cm</span>
            </li>
            <li>
              <span>Net Weight</span>
              <span>340 grams</span>
            </li>
            <li>
              <span>Form Factor</span>
              <span>Single-Slot Design</span>
            </li>
          </ul>

          <h3>Support & Warranty</h3>
          <ul>
            <li>
              <span>Warranty Period</span>
              <span>1 Year Limited Brand Warranty</span>
            </li>
            <li>
              <span>Compatible OS</span>
              <span>Windows 11, 10, 8.1, 8, 7; Linux</span>
            </li>
            <li>
              <span>Package Contents</span>
              <span>Graphics Card (1U), Driver CD (1U)</span>
            </li>
            <li>
              <span>Country of Origin</span>
              <span>People's Republic of China</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default SpecSidebar;