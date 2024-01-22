import * as React from "react";
import {
  StyledTableCell,
  StyledTableContainer,
  StyledTable,
  StyledTableBody,
  StyledTableHead,
  StyledTableRow,
} from "./styles";
import TableHeader from "./TableHeader";
import TablePaginaton from "./TablePagination";

export interface TableSpec {
  id: string;
  label?: string;
  format?: { component: React.FC<any>; props: Object };
  getValue?: (
    row: any
  ) => any /* to get key value pairs manually (for nested data etc) */;
  dynamicProp?: { name: string; value: string };
  event?: any;
  action?: (...actionArgs: any[]) => any;
}

export interface TableProps {
  tableName?: string;
  columnData?: TableSpec[];
  data?: Record<string, any>[];
}

const Table: React.FC<TableProps> = ({ tableName, data, columnData }) => {
  const TableColumnData = () =>
    columnData.map((clnItem) => (
      <StyledTableCell key={clnItem.id}>{clnItem.label}</StyledTableCell>
    ));

  const TableBodyData = () => {
    let immutableData = [...data];

    /* to get specific or nested value from row object */
    columnData.forEach((cln) => {
      if (cln.getValue) {
        immutableData = immutableData.map((row: Record<string, any>) => ({
          ...row,
          [cln.id]: cln.getValue && cln.getValue(row),
        }));
      }
    });

    Object.freeze(immutableData);

    /* row is object inside array of object */
    return immutableData.map((row: Record<string, any>) => (
      <StyledTableRow key={Math.random()}>
        {columnData.map((field) => {
          const cellData = row[field.id]
            ? row[field.id].toString()
            : field.id; /* if object has data with field.id key, if not then id key will be data */
          return (
            <StyledTableCell key={`${field.label}@${field.id}`}>
              {field.format ? (
                <field.format.component
                  {...field.format.props}
                  {...{
                    [field?.dynamicProp?.name]: row[field?.dynamicProp?.value],
                  }}
                  {...{
                    [field.event || "onClick"]: (e: any) =>
                      field.action && field.action(e, row),
                  }}
                >
                  {cellData}
                </field.format.component>
              ) : (
                cellData
              )}
            </StyledTableCell>
          );
        })}
      </StyledTableRow>
    ));
  };

  return (
    <StyledTableContainer>
      <TableHeader tableName={tableName}></TableHeader>
      <StyledTable>
        <StyledTableHead>
          <StyledTableRow>{TableColumnData()}</StyledTableRow>
        </StyledTableHead>
        <StyledTableBody>{TableBodyData()}</StyledTableBody>
      </StyledTable>
      <TablePaginaton />
    </StyledTableContainer>
  );
};

export default React.memo(Table);
