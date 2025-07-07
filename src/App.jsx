import { useState } from "react";
import Header from "./components/Header";
import FormContainer from "./components/FormHeaders";

const colors = [
  { id: 0, color: "emerald-900", oklch: "oklch(37.8% 0.077 168.94)"},
  { id: 1, color: "blue-900", oklch: "oklch(37.9% 0.146 265.522)"},
  { id: 2, color: "rose-950", oklch: "oklch(27.1% 0.105 12.094)"},
];

export default function App() {
  const [colorState, setColorState] = useState(0);

  return (
    <div className="flex flex-col items-center">
      <Header colors={colors} colorState={colorState} setColorState={setColorState} />
      <FormContainer />
    </div>
  );
}
