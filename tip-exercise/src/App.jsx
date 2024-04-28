import { useState } from "react";

const App = () => {
  return <TipCalculator />;
};

const TipCalculator = () => {
  const [bill, setBill] = useState(0);
  const [personalLike, setPersonalLike] = useState(0);
  const [friendLike, setFriendLike] = useState(0);

  const likeAverage = (personalLike + friendLike) / 2;
  const tip = (bill * likeAverage) / 100;

  const handleReset = () => {
    setBill(0);
    setPersonalLike(0);
    setFriendLike(0);
  };

  return (
    <div>
      <BillInput bill={bill} onChange={setBill}>
        How much was the bill{" "}
      </BillInput>
      <Selection selected={personalLike} onChange={setPersonalLike}>
        How did you like the service?
      </Selection>
      <Selection selected={friendLike} onChange={setFriendLike}>
        How did your friend like the service?
      </Selection>
      {bill !== 0 ? (
        <Output>
          Your pay ${bill} (${bill} + ${tip} tip){" "}
        </Output>
      ) : null}
      {bill !== 0 || personalLike !== 0 || friendLike !== 0 ? (
        <button onClick={handleReset}>Reset</button>
      ) : null}
    </div>
  );
};

const BillInput = ({ bill, children, onChange }) => {
  return (
    <div>
      {children}
      <input
        type="number"
        min={0}
        value={bill}
        onChange={(e) => onChange(Number(e.target.value))}
      />
    </div>
  );
};

const Selection = ({ children, selected, onChange }) => {
  return (
    <div>
      {children + " "}
      <select
        value={selected}
        onChange={(e) => onChange(Number(e.target.value))}
      >
        <option value={0}>Dissatisfied (0%)</option>
        <option value={5}>It was okay (5%)</option>
        <option value={10}>It was good (10%)</option>
        <option value={20}>Absolutely amazing! (20%)</option>
      </select>
    </div>
  );
};

const Output = ({ children }) => {
  return <h3>{children}</h3>;
};

export default App;
