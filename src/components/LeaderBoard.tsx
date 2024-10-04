import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { score } from "@/utils";

type LeaderBoardProps = {
  contrast: number;
};

export const LeaderBoard = ({ contrast }: LeaderBoardProps) => {
  const normalScore = score(contrast, "normal");
  const largeScore = score(contrast, "large");

  const isNormalAccessibleAAA = normalScore === "AAA";
  const isNormalAccessibleAA = normalScore === "AA" || isNormalAccessibleAAA;
  const isLargeAccessibleAAA = largeScore === "AAA";
  const isLargeAccessibleAA = largeScore === "AA" || isLargeAccessibleAAA;

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>ELEMENT TYPE</TableHead>
          <TableHead>AA</TableHead>
          <TableHead>AAA</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">Normal Text</TableCell>
          <TableCell>{isNormalAccessibleAA ? "Pass" : "Fail"}</TableCell>
          <TableCell>{isNormalAccessibleAAA ? "Pass" : "Fail"}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">Large Text</TableCell>
          <TableCell>{isLargeAccessibleAA ? "Pass" : "Fail"}</TableCell>
          <TableCell>{isLargeAccessibleAAA ? "Pass" : "Fail"}</TableCell>
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
