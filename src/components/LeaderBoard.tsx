import { Theme } from "@/App";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { score } from "@/utils";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

type LeaderBoardProps = {
  contrast: number;
  theme: Theme;
};

export const LeaderBoard = ({ contrast, theme }: LeaderBoardProps) => {
  const normalScore = score(contrast, "normal");
  const largeScore = score(contrast, "large");

  const isNormalAccessibleAAA = normalScore === "AAA";
  const isNormalAccessibleAA = normalScore === "AA" || isNormalAccessibleAAA;
  const isLargeAccessibleAAA = largeScore === "AAA";
  const isLargeAccessibleAA = largeScore === "AA" || isLargeAccessibleAAA;

  const isDarkMode = theme === "dark";

  const passStyle = isDarkMode
    ? "bg-[#22312A] text-center min-w-[50px] text-[#5BD5BA] border border-[#006239] rounded-full px-2"
    : "bg-[#E1FCEF] text-center min-w-[50px] text-[#14804A] rounded-full px-2";

  const failStyle = isDarkMode
    ? "bg-[#541C15] text-center min-w-[50px] text-[#F9F9F9] border border-[#7F2315] rounded-full px-2"
    : "bg-[#FAF0F3] text-center min-w-[50px] text-[#D12953] rounded-full px-2";

  return (
    <Table className="dark:bg-[#151515] dark:text-white">
      <TableHeader className="dark:bg-[#151515]">
        <TableRow>
          <TableHead>ELEMENT TYPE</TableHead>
          <TableHead className="text-center">AA</TableHead>
          <TableHead className="text-center">AAA</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">Normal Text</TableCell>
          <TableCell>
            <p
              className={twMerge(
                clsx(
                  isNormalAccessibleAA ? passStyle : failStyle,
                  "mx-auto w-fit"
                )
              )}
            >
              {isNormalAccessibleAA ? "Pass" : "Fail"}
            </p>
          </TableCell>
          <TableCell>
            <p
              className={twMerge(
                clsx(
                  isNormalAccessibleAAA ? passStyle : failStyle,
                  "mx-auto w-fit"
                )
              )}
            >
              {isNormalAccessibleAAA ? "Pass" : "Fail"}
            </p>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">Large Text</TableCell>
          <TableCell>
            <p
              className={twMerge(
                clsx(
                  isLargeAccessibleAA ? passStyle : failStyle,
                  "mx-auto w-fit"
                )
              )}
            >
              {isLargeAccessibleAA ? "Pass" : "Fail"}
            </p>
          </TableCell>
          <TableCell>
            <p
              className={twMerge(
                clsx(
                  isLargeAccessibleAAA ? passStyle : failStyle,
                  "mx-auto w-fit"
                )
              )}
            >
              {isLargeAccessibleAAA ? "Pass" : "Fail"}
            </p>
          </TableCell>
        </TableRow>
        {/* <TableRow>
          <TableCell className="font-medium">
            UI and Graphical Objects
          </TableCell>
          <TableCell>Paid</TableCell>
          <TableCell>$250.00</TableCell>
        </TableRow> */}
      </TableBody>
    </Table>
  );
};
