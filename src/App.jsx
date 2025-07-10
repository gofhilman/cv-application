import { useState } from "react";
import Header from "./components/Header";
import FormContainer from "./components/FormContainer";
import Preview from "./components/Preview";
import "./styles/App.css";

const themes = [
  { id: 0, color: "green" },
  { id: 1, color: "blue" },
  { id: 2, color: "red" },
];

export default function App() {
  const [colorState, setColorState] = useState(0);
  const [formResult, setFormResult] = useState({Education: [], Experience: []});

  return (
    <div
      className={
        "theme-color flex flex-col items-center " +
        themes.find((theme) => theme.id === colorState).color
      }
    >
      <Header
        themes={themes}
        colorState={colorState}
        setColorState={setColorState}
      />
      <FormContainer formResult={formResult} setFormResult={setFormResult} />
      <Preview formResult={formResult} />
    </div>
  );
}
