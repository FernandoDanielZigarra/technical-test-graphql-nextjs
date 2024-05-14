import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import Paper from "@mui/material/Paper";
import SimpleTableCell from "./ui/SimpleTableCell";
import { HeadersRows } from "@/constants";
import SimpleTableRowContainer from "./ui/SimpleTableRowContainer";

interface DataProps {
  data: DataContainerProps[];
}

interface DataContainerProps {
  __typename: string;
  containersStatus: ContainerStatusProps;
containerFamily: string | null;
containersModel: string | null;
containersGeneration: string | null;
containersCapacity: string | null;
containersRevisionType: string | null;
formStatus: string | null;
}

interface ContainerStatusProps {
  __typename: string;
  name: string;
}

export default function BasicTable(data: DataProps) {
  return (
    <TableContainer component={Paper}>
      <Table
        sx={{ minWidth: 650 }}
        aria-label="simple table"
        style={{ backgroundColor: "#666666" }}
      >
        <TableHead>
          <SimpleTableRowContainer color="#404040">
            {HeadersRows.map((row) => (
              <SimpleTableCell
                color="white"
                key={row}
                content={row}
                isTitle={true}
              />
            ))}
          </SimpleTableRowContainer>
        </TableHead>
        <TableBody>
          {data.data.map((row, i) => (
            <SimpleTableRowContainer color="#787878" key={i}>
              <SimpleTableCell color="white" content={i.toString()} />
              <SimpleTableCell color="white" content={row.__typename} />
              <SimpleTableCell
                color="white"
                content={row.containersStatus.name}
              />
              <SimpleTableCell color="white" content={row.containerFamily} />
              <SimpleTableCell color="white" content={row.containersModel} />
              <SimpleTableCell color="white" content={row.containersGeneration} />
              <SimpleTableCell color="white" content={row.containersCapacity} />
              <SimpleTableCell color="white" content={row.containersRevisionType} />
              <SimpleTableCell color="white" content={row.formStatus} />
            </SimpleTableRowContainer>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
