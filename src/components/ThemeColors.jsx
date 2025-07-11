import mark from "../assets/radiobox-marked.svg";
import "../styles/ThemeColors.css";

export default function ThemeColors({ themes, colorState, setColorState }) {
  return (
    <div className="ml-8 flex divide-x-2 divide-white">
      {themes.map((theme) => {
        return (
          <ColorButton
            key={theme.id}
            id={theme.id}
            color={theme.color}
            colorState={colorState}
            setColorState={setColorState}
          />
        );
      })}
    </div>
  );
}

function ColorButton({ id, color, colorState, setColorState }) {
  const roundedMap = {
    0: "rounded-l-lg",
    2: "rounded-r-lg",
  };
  const rounded = roundedMap[id] || "";
  return (
    <button
      className={`flex size-8 items-center justify-center ${color} ${rounded}`}
      onClick={() => setColorState(id)}
    >
      {id === colorState && (
        <img src={mark} alt="Mark" className="size-4 brightness-0 invert" />
      )}
    </button>
  );
}
