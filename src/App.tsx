import { useState } from "react";
import "./App.css";
import { ColorOptions } from "./components/ColorOptions";
import { LeaderBoard } from "./components/LeaderBoard";
import { AccesibilityExample } from "./components/AccesibilityExample";
import { hex } from "wcag-contrast";
import { Github } from "lucide-react";
import { useAutoAnimate } from "@formkit/auto-animate/react";

function App() {
  const [parent] = useAutoAnimate(/* optional config */);
  const [colorValues, setColorValues] = useState({
    text: "#656dff",
    background: "#b1e1ff",
  });

  const contrast = hex(colorValues.text, colorValues.background);

  return (
    <main
      ref={parent}
      className="max-w-5xl min-h-screen flex flex-col gap-[72px] justify-center mx-auto w-full"
    >
      <h1>WCAG Contrast Color Checker</h1>
      <ColorOptions
        colorValues={colorValues}
        setColorValues={setColorValues}
        contrast={contrast}
      />
      <h2>WCAG Compliance Results</h2>
      <div className="grid items-center justify-center grid-cols-2 gap-16">
        <LeaderBoard contrast={contrast} />
        <AccesibilityExample
          text={colorValues.text}
          background={colorValues.background}
        />
      </div>
      <footer className="flex justify-between w-full pt-12">
        <p className="font-semibold">Made by Afordin</p>
        <Github />
      </footer>
    </main>
  );
}

export default App;
