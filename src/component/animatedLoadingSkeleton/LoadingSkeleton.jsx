import React, { useState, useEffect } from "react";
import "./style.css";

function LoadingSkeleton() {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 2000)

  return (
    <div className="card">
      {loading ? (
        <div className="skeleton-wrapper">
          {/* write code here */}
          <div className='skeleton line name'> </div>
          <div className='skeleton line bio'> </div>
        </div>
      ) : (
        <div className="content">
          <h2>John Doe</h2>
          <p>Full-stack developer at XYZ company</p>
        </div>
      )}
    </div>
  );
}

export default LoadingSkeleton;