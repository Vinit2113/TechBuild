import './specSection.css'

const SpecSection = () => {
  return (
    <>
      <div className="spec-section">
        <div className="spec-container">

          <h2>Performance</h2>
          <div className="table">
            <div><span>Total Cores</span><span>24 (8P + 16E)</span></div>
            <div><span>Total Threads</span><span>32</span></div>
            <div><span>Max Turbo Frequency</span><span>5.80 GHz</span></div>
            <div><span>Base Frequency</span><span>3.00 GHz</span></div>
            <div><span>Cache</span><span>36 MB</span></div>
          </div>

          <h2>Memory Specifications</h2>
          <div className="table">
            <div><span>Max Memory Size</span><span>128 GB</span></div>
            <div><span>Memory Types</span><span>DDR5 / DDR4</span></div>
            <div><span>Channels</span><span>2</span></div>
          </div>

        </div>
      </div>
    </>
  )
}

export default SpecSection