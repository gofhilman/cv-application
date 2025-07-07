import ThemeColors from "./ThemeColors";

export default function Header(props) {
  const matchedColor = props.colors.find(
    (color) => color.id === props.colorState,
  ).oklch;
  return (
    <header className="flex items-center py-3">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="mr-2 size-8"
        style={{
          fill: matchedColor,
        }}
      >
        <path
          d={
            "M13,9H18.5L13,3.5V9M6,2H14L20,8V20A2," +
            "2 0 0,1 18,22H6C4.89,22 4,21.1 4,20V4C4,2.89 4.89," +
            "2 6,2M14,20V19C14,17.67 11.33,17 10,17C8.67,17 6," +
            "17.67 6,19V20H14M10,12A2,2 0 0,0 8,14A2,2 0 0,0 10," +
            "16A2,2 0 0,0 12,14A2,2 0 0,0 10,12Z"
          }
        />
      </svg>
      <h1
        className="text-2xl font-bold"
        style={{
          color: matchedColor,
        }}
      >
        CVGen
      </h1>
      <ThemeColors {...props} />
    </header>
  );
}
