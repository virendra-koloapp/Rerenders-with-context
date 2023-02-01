import React, { useEffect, useState } from 'react';
import './style.css';

const MyContext = React.createContext();

const useData = () => React.useContext(MyContext);

export default function App() {
  const [a, setA] = useState({ value: 2 });
  const [b, setB] = useState({ value: 2 });
  const [c, setC] = useState({ value: 2 });

  const value = {
    a,
    b,
    c,
  };

  const updateA = () => {
    setA({
      value: Math.random(),
    });
  };
  const updateB = () => {
    setB({
      value: Math.random(),
    });
  };
  const updateC = () => {
    setC({
      value: Math.random(),
    });
  };
  return (
    <MyContext.Provider value={value}>
      <button onClick={updateA}>Update A</button>
      <button onClick={updateB}>Update B</button>
      <button onClick={updateC}>Update C</button>
      <A />
      <B />
      <C />
    </MyContext.Provider>
  );
}

function A() {
  const { a } = useData();
  const updateCount = React.useRef(0);
  useEffect(() => {
    updateCount.current++;
  });
  return (
    <div className="a">
      <h1>A! {JSON.stringify(a)}</h1>
      <p>Update Count : {updateCount.current}</p>
    </div>
  );
}

function B() {
  const { b } = useData();
  const updateCount = React.useRef(0);
  useEffect(() => {
    updateCount.current++;
  });
  return (
    <div className="b">
      <h1>B! {JSON.stringify(b)}</h1>
      <p>Update Count : {updateCount.current}</p>
    </div>
  );
}

function C() {
  const { c } = useData();
  const updateCount = React.useRef(0);
  useEffect(() => {
    updateCount.current++;
  });
  return (
    <div className="c">
      <h1>C! {JSON.stringify(c)}</h1>
      <p>Update Count : {updateCount.current}</p>
    </div>
  );
}
