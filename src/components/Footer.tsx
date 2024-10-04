import { Sun } from "lucide-react";
import GithubIcon from "./icons/Github";

export const Footer = () => {
  return (
    <footer className="flex justify-between items-center w-full">
      <p className="font-semibold">Made by Afordin</p>
      <div className="flex items-center gap-2">
        <div>
          <span className="sr-only">Handle Dark Mode</span>
          <Sun className="hover:bg-slate-100 rounded-[4px] p-1 cursor-pointer ease-in-out transition-all duration-200" />
        </div>

        <a
          href="https://github.com/afordigital/color-contrast-checker"
          target="_blank"
          rel="noreferrer"
        >
          <span className="sr-only">Github</span>
          <GithubIcon className="hover:bg-slate-700 ease-in-out transition-all duration-200" />
        </a>
      </div>
    </footer>
  );
};
