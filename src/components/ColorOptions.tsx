import { Dispatch, SetStateAction } from "react";
import { Input } from "./ui/input";

type ColorValues = {
  text: string;
  background: string;
};

type ColorOptionsProps = {
  colorValues: ColorValues;
  setColorValues: Dispatch<SetStateAction<ColorValues>>;
  contrast: number;
};

export const ColorOptions = ({
  colorValues,
  setColorValues,
  contrast,
}: ColorOptionsProps) => {
  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setColorValues((prevCamps) => ({ ...prevCamps, [name]: value }));
  };

  return (
    <article className="flex gap-8">
      <section className="flex items-center gap-4">
        <label htmlFor="text-color" className="font-medium whitespace-nowrap">
          Text color
        </label>
        <div className="relative flex gap-4">
          <label htmlFor="picker-text-color" className="sr-only">
            Picker Text color
          </label>
          <Input
            type="color"
            id="picker-text-color"
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
            maxLength={7}
            className="pl-12 dark:bg-[#202020]"
          />
        </div>
      </section>

      <section className="flex items-center gap-4">
        <label
          htmlFor="background-color"
          className="font-medium whitespace-nowrap"
        >
          Background Color
        </label>
        <div className="relative flex gap-4">
          <label htmlFor="picker-background-color" className="sr-only">
            Picker Background color
          </label>
          <Input
            type="color"
            id="picker-background-color"
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
            maxLength={7}
            className="pl-12 dark:bg-[#202020]"
          />
        </div>
      </section>

      <section className="flex items-center gap-4">
        <p className="font-medium whitespace-nowrap">Contrast Ratio</p>
        <p className="text-3xl font-semibold">{contrast.toFixed(2)}:1</p>
      </section>
    </article>
  );
};
