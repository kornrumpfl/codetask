import styled from "styled-components";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [sum, setSum] = useState(0);
  const textToNumber = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 10,
    k: 11,
    l: 12,
    m: 13,
    n: 14,
    o: 15,
    p: 16,
    q: 17,
    r: 18,
    s: 19,
    t: 20,
    u: 21,
    v: 22,
    w: 23,
    x: 24,
    y: 25,
    z: 26,
  };

  function handleChange(event) {
    setName(event.target.value);
    const name = event.target.value.toLowerCase();
    let partSum = 0;
    [...name].forEach((c) => {
      if (textToNumber[c]) {
        partSum = partSum + textToNumber[c];
        setSum(partSum);
      }
    });
    if (name.length === 0) {
      setSum(0);
    }
  }

  function handleClear() {
    setName("");
    setSum(0);
  }

  return (
    <Main>
      <h1>Coding task</h1>
      <input
        id="name"
        type="text"
        placeholder="type-something"
        aria-label="input name"
        value={name}
        onChange={handleChange}
      ></input>
      <span data-testid="sum">{sum}</span>
      <button onClick={handleClear}>Clear All</button>
    </Main>
  );
}

export default App;

const Main = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h1 {
    text-align: center;
  }

  input {
    width: 50vw;
    display: flex;
    align-self: center;
  }
  span {
    align-self: center;
    padding: 15px;
  }

  button {
    width: 10vw;
    align-self: center;
  }
`;
