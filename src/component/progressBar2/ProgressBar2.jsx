import { useEffect, useState } from "react";
import "./style.css";
const ProgressBar2 = ({ progress }) => {
  const [showProgress, setShowProgress] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setShowProgress(progress);
    }, 100);
  }, [progress]);

  return (
    <>
      <div className="outer">
        <div
          className="inner"
          role="progressbar"
          style={{
            transform: `translateX(${showProgress - 100}%)`,
            color: showProgress < 5 ? "black" : "white",
          }}
          aria-valuenow={progress}
          aria-valuemax="100"
          aria-valuemin="0"
        >
          {progress}%
        </div>
      </div>
    </>
  );
};
export default ProgressBar2;
