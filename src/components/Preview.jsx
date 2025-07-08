import Letter from "./Letter";
import Download from "./Download";

export default function Preview(props) {
  return (
    <div>
      <Download />
      <Letter {...props} />
    </div>
  );
}