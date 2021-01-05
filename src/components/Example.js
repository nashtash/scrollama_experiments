import React, { useState } from 'react';
import { Scrollama, Step } from 'react-scrollama';

const ScrollamaDemo = () => {
  const [currentColor, setCurrentColor] = useState(null); //currentStepindex wird als gesamt Index verwendet

  // This callback fires when a Step hits the offset threshold. It receives the
  // data prop of the step, which in this demo stores the index of the step.
  const onStepEnter = ({ data }) => { //Event handler, der bei einem neuen Schritt sichtbar wird.
    setCurrentColor(data);
  };

  const steps = ["cornFlowerBlue", "lightBlue", "deepSkyBlue", "dodgerBlue"]

  return (
    <div style={{ margin: '50vh 0', border: '2px dashed skyblue', backgroundColor: currentColor }}>
      <div style={{ position: 'sticky', top: 0, border: '1px solid orchid' }}>
        I'm sticky. The current triggered step index is: {currentColor}
      </div>
      <Scrollama onStepEnter={onStepEnter} debug> 
        {steps.map((stepvalue, stepIndex) => (
          <Step data={stepvalue} key={stepIndex}>
            <div
              style={{
                margin: '50vh 0',
                border: '1px solid gray',
              }}
            >
              I'm a Scrollama Step of index {stepIndex}
            </div>
          </Step>
        ))}
      </Scrollama>
    </div>
  );
};

export default ScrollamaDemo;