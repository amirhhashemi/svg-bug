import svg from "./assets/svg.svg";
import { InlineSvg } from "./InlineSvg.tsx";

function App() {
  return (
    <div>
      <img src={svg} />
      <InlineSvg />
    </div>
  );
}

export default App;
