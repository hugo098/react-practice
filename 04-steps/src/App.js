import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export const App = () => {
  return (
    <div>
      <CounterV2 />
    </div>
  );
};

export const CounterV2 = () => {
  const [step, setStep] = useState(1);
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    setStep(1);
    setCounter(0);
  };

  const handleStep = (selectedStep) => {
    if (selectedStep < 1) return;
    setStep(selectedStep);
  };

  const handleCounter = (count) => {
    setCounter(count);
  };

  const handleCounterUp = () => {
    setCounter((currentCounter) => currentCounter + step);
  };

  const handleCounterDown = () => {
    setCounter((currentCounter) => currentCounter - step);
  };
  const date = new Date();

  return (
    <>
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={(e) => handleStep(Number(e.target.value))}
        />
        <span>{step}</span>
      </div>
      <div>
        <button onClick={handleCounterDown}>-</button>
        <input
          type="number"
          value={counter}
          onChange={(e) => handleCounter(Number(e.target.value))}
        />
        <button onClick={handleCounterUp}>+</button>
      </div>

      <p>
        <span>
          {counter === 0
            ? "Today is "
            : counter > 0
            ? `${counter} days from today is `
            : `${Math.abs(counter)} days ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </p>
      <div>
        {counter !== 0 || step !== 1 ? (
          <button onClick={handleClick}>Reset</button>
        ) : null}
      </div>
    </>
  );
};

export const Counter = () => {
  const [step, setStep] = useState(1);
  const [counter, setCounter] = useState(1);

  const handleStepUp = () => {
    setStep((currentStep) => currentStep + 1);
  };

  const handleStepDown = () => {
    setStep((currentStep) => currentStep - 1);
  };

  const handleCounterUp = () => {
    setCounter((currentCounter) => currentCounter + step);
  };

  const handleCounterDown = () => {
    setCounter((currentCounter) => currentCounter - step);
  };
  const date = new Date();

  return (
    <>
      <div>
        <button onClick={handleStepDown}>-</button>
        <span>Step: {step}</span>
        <button onClick={handleStepUp}>+</button>
      </div>
      <div>
        <button onClick={handleCounterDown}>-</button>
        <span>Counter: {counter}</span>
        <button onClick={handleCounterUp}>+</button>
      </div>

      <p>
        <span>
          {counter === 0
            ? "Today is "
            : counter > 0
            ? `${counter} days from today is `
            : `${Math.abs(counter)} days ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </p>
    </>
  );
};

// export const Steps = () => {
//   const [step, setStep] = useState(1);
//   const [isOpen, setIsOpen] = useState(true);

//   const handlePrevious = () => {
//     if (step > 1) setStep((currentStep) => currentStep - 1);
//   };

//   const handleNext = () => {
//     if (step < 3) setStep((currentStep) => currentStep + 1);
//   };

//   return (
//     <div>
//       <button className="close" onClick={() => setIsOpen((is) => !is)}>
//         &times;
//       </button>
//       {isOpen && (
//         <div className="steps">
//           <div className="numbers">
//             <div className={step >= 1 ? "active" : ""}>1</div>
//             <div className={step >= 2 ? "active" : ""}>2</div>
//             <div className={step >= 3 ? "active" : ""}>3</div>
//           </div>

//           <p className="message">
//             Step {step}:{messages[step - 1]}
//           </p>

//           <div className="buttons">
//             <button
//               style={{ backgroundColor: "#7950f2", color: "#fff" }}
//               onClick={handlePrevious}
//             >
//               Previous
//             </button>
//             <button
//               style={{ backgroundColor: "#7950f2", color: "#fff" }}
//               onClick={handleNext}
//             >
//               Next
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };
