import React from 'react';
import "./Test.css";

function Test(props) {
    const [isShowingAlert, setShowingAlert] = React.useState(false);
    
    return (
        <div>
          <div
            className={`alert alert-success ${isShowingAlert ? 'alert-shown' : 'alert-hidden'}`}
            onTransitionEnd={() => setShowingAlert(false)}
          >
            <strong>Success!</strong> Thank you for subscribing!
          </div>
          <button onClick={() => setShowingAlert(true)}>
            Show alert
          </button>
          (and other children)
        </div>
      );
  }
  export default Test;