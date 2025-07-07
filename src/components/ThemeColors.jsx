import mark from "../assets/radiobox-marked.svg";
import "../styles/ThemeColors.css";

export default function ThemeColors({ themes, colorState, setColorState }) {
  return (
    <div className="ml-8 flex">
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
  return (
    <button
      className={"flex size-8 items-center justify-center " + color}
      onClick={() => setColorState(id)}
    >
      {id === colorState && <img src={mark} alt="Mark" className="size-4 brightness-0 invert" />}
    </button>
  );
}
