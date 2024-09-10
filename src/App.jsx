import "./index.css";
import Questions from "./Questions";
import data from "./data";
import { useState } from "react";

function App() {

const [questions, setQuestion] = useState(data); 

  return (
    <main>
      <Questions questions={questions} />
    </main>
  );
}

export default App;
