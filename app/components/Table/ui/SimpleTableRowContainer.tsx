import { PropsWithChildren } from "react";
import TableRow from "@mui/material/TableRow";
import { styled } from "@mui/material/styles";
interface SimpleTableRowContainerProps {
  color: string;
}

export default function SimpleTableRowContainer({
  children,
  color,
}: PropsWithChildren<SimpleTableRowContainerProps>) {
  return (
    <TableRow
      sx={{
        backgroundColor: color,
      }}
    >
      {children}
    </TableRow>
  );
}
