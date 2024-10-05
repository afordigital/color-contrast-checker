import { Moon, Sun } from "lucide-react";
import GithubIcon from "./icons/Github";
import { cn } from "@/lib/utils";
import { Dispatch, SetStateAction } from "react";
import { Theme } from "@/App";

type FooterProps = {
  theme: Theme;
  setTheme: Dispatch<SetStateAction<Theme>>;
};

export const Footer = ({ theme, setTheme }: FooterProps) => {
  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <footer className="flex justify-between items-center w-full">
      <p className="text-slate-700 dark:text-slate-300 font-semibold">
        Made by{" "}
        <a
          href="https://github.com/Afordin/"
          className={cn(
            "underline decoration-dotted underline-offset-2",
            "hover:text-slate-900 dark:hover:text-slate-100 focus:ring-2",
            "ease-in-out transition-all duration-200"
          )}
        >
          Afordin
        </a>
      </p>
      <div className="flex items-center gap-2">
        <button
          onClick={changeTheme}
          className="hover:bg-slate-100 dark:hover:bg-[#202020] rounded-[4px]"
        >
          <span className="sr-only">Handle Dark Mode</span>
          {theme === "dark" ? (
            <Sun
              className={cn(
                "p-1 cursor-pointer",
                "hover:rotate-[30deg]",
                "ease-in-out transition-all duration-300"
              )}
            />
          ) : (
            <Moon
              className={cn(
                "p-1 cursor-pointer",
                "hover:rotate-[30deg]",
                "ease-in-out transition-all duration-300"
              )}
            />
          )}
        </button>

        <a
          href="https://github.com/afordigital/color-contrast-checker"
          target="_blank"
          rel="noreferrer"
        >
          <span className="sr-only">Github</span>
          <GithubIcon className="hover:bg-slate-100 dark:hover:bg-[#202020] ease-in-out transition-all duration-200" />
        </a>
      </div>
    </footer>
  );
};
