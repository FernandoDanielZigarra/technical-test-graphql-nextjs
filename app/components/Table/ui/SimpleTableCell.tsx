import TableCell from "@mui/material/TableCell";

interface SimpleTableCellProps {
  color: string;
  content: string | null;
  isTitle?: boolean;
}


export default function SimpleTableCell({
  color,
  content,
  isTitle,
}: SimpleTableCellProps) {
  return (
    <TableCell
    align="left"
      sx={{
        border: "1px solid #606060",
        padding: "10px",
        color: color,
        backgroundColor: isTitle ? "#404040" : "#666666",
        fontWeight: isTitle ? "bold" : "normal",
        fontSize: isTitle ? "16px" : "14px",
        textAlign: "center",
        
      }}
    >
      {!content ? "N/A" : content}
    </TableCell>
  );
}
