import { useState } from "react";
import { Input } from "./ui/input";

export const ColorOptions = () => {
  const [colorValues, setColorValues] = useState({
    text: "",
    background: "",
  });

  const handleInput = (event) => {
    const { name, value } = event.target;
    setColorValues((prevCamps) => ({ ...prevCamps, [name]: value }));
  };

  return (
    <div className="flex gap-12">
      <div className="flex gap-4 items-center">
        <label htmlFor="text-color">Text color</label>
        <div className="flex gap-4 relative">
          <Input
            type="color"
            name="text"
            value={colorValues.text}
            onChange={handleInput}
            className="w-[50px] border-none absolute"
          />
          <Input
            type="text"
            name="text"
            id="text-color"
            value={colorValues.text}
            onChange={handleInput}
            placeholder="Add value"
            className="pl-12"
          />
        </div>
      </div>
      <div className="flex gap-4 items-center">
        <label htmlFor="background-color">Background Color</label>
        <div className="flex gap-4 relative">
          <Input
            type="color"
            name="background"
            value={colorValues.background}
            onChange={handleInput}
            className="w-[50px] border-none absolute"
          />
          <Input
            type="text"
            name="background"
            id="background-color"
            value={colorValues.background}
            onChange={handleInput}
            placeholder="Add background"
            className="pl-12"
          />
        </div>
      </div>
      <div>
        <p>Contrast Ratio</p>
      </div>
    </div>
  );
};
