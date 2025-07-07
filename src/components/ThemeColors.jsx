import mark from "../assets/radiobox-marked.svg";

export default function ThemeColors({ colors, colorState, setColorState }) {
  return (
    <div className="ml-8 flex">
      {colors.map((color) => {
        return (
          <ColorButton
            key={color.id}
            id={color.id}
            oklch={color.oklch}
            colorState={colorState}
            setColorState={setColorState}
          />
        );
      })}
    </div>
  );
}

function ColorButton({ id, oklch, colorState, setColorState }) {
  return (
    <button
      className="flex size-8 items-center justify-center"
      style={{ backgroundColor: oklch }}
      onClick={() => setColorState(id)}
    >
      {id === colorState && <img src={mark} alt="Mark" className="size-4" />}
    </button>
  );
}
