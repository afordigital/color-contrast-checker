import { Sun } from "lucide-react";
import GithubIcon from "./icons/Github";
import { cn } from "@/lib/utils";

export const Footer = () => {
  return (
    <footer className="flex justify-between items-center w-full">
      <p className="text-slate-700 font-semibold">
        Made by{" "}
        <a
          href="https://github.com/Afordin/"
          className={cn(
            "underline decoration-dotted underline-offset-2",
            "hover:text-slate-900 focus:ring-2",
            "ease-in-out transition-all duration-200"
          )}
        >
          Afordin
        </a>
      </p>
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
          <GithubIcon className="hover:bg-slate-100 ease-in-out transition-all duration-200" />
        </a>
      </div>
    </footer>
  );
};
