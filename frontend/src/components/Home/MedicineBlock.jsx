import React from "react";
import "./Home.css"; // Import the CSS file containing your styles

const MedicineBlock = () => {
  return (
    <div className="content-wrapper">
      {/* Today Block */}
      <div className="today-block-bg">
        <div className="today-block-view">
          {/* Example content for the Today block */}
          <div className="single-task">
            <span className="task-title">Complete project</span>
            <input type="checkbox" className="checkmark" />
          </div>
          <div className="single-task">
            <span className="task-title">Team meeting at 3 PM</span>
            <input type="checkbox" className="checkmark" />
          </div>
        </div>
      </div>

      {/* Medicine Block */}
      <div className="medicine-block-bg">
        <div className="medicine-block-view">
          {/* Example content for the Medicine block */}
          <div className="single-task">
            <span className="task-title">Take morning pills</span>
            <input type="checkbox" className="checkmark" />
          </div>
          <div className="single-task">
            <span className="task-title">Evening dose</span>
            <input type="checkbox" className="checkmark" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedicineBlock;
