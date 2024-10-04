import { useState } from "react";
import "./App.css";
import { ColorOptions } from "./components/ColorOptions";
import { LeaderBoard } from "./components/LeaderBoard";
import { AccesibilityExample } from "./components/AccesibilityExample";
import { hex } from "wcag-contrast";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { Footer } from "./components/Footer";
import { ArrowUpRight } from "lucide-react";

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
      className="max-w-5xl min-h-screen flex flex-col gap-[56px] justify-center mx-auto w-full"
    >
      <h1>WCAG Contrast Color Checker</h1>
      <ColorOptions
        colorValues={colorValues}
        setColorValues={setColorValues}
        contrast={contrast}
      />
      <div>
        <h2>WCAG Compliance Results</h2>
        <div className="grid pt-8 grid-cols-2 gap-16">
          <LeaderBoard contrast={contrast} />
          <div>
            <AccesibilityExample
              text={colorValues.text}
              background={colorValues.background}
            />
            <a
              href="https://www.w3.org/WAI/standards-guidelines/wcag/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center pt-2 justify-end w-full gap-1 group"
            >
              <p className="text-[12px] transition-transform duration-300 font-normal group-hover:underline underline-offset-2 decoration-dotted">
                Ver información completa
              </p>
              <ArrowUpRight
                size={16}
                strokeWidth={1}
                className="transform transition-transform duration-300 group-hover:underline-1 group-hover:translate-x-[2px] group-hover:-translate-y-[2px]"
              />
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}

export default App;
