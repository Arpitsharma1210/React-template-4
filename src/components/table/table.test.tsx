import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import MeasurelyTable, { formatDate, } from "../../components/table";
import {
  StyledTableCell,
  StyledTableRow,
  StyledNoDataInfo,
  StyledPaginationContainer,
  StyledPageContainer,
  StyledActionItem,
} from "../../components/table/styles";
import moment from "moment";
import React from "react";

describe("MeasurelyTable Component", () => {
  const specs = [
    { id: "name", label: "Name" },
    { id: "age", label: "Age" },
  ];

  const data = [
    { id: 1, name: "John Doe", age: 25 },
    { id: 2, name: "Jane Doe", age: 30 },
  ];

  const metadata = {
    page: 1,
    limit: 10,
    total: 20,
    order: "name",
    direction: "asc" as "desc" | "asc",
    filters: [] as any[],
    allowedFilters: []as any[],
  };

  it("renders without crashing", () => {
    render(<MeasurelyTable specs={specs} data={data}  />);
  });

  it("renders the correct number of columns", () => {
    render(<MeasurelyTable specs={specs} data={data}  />);
    expect(screen.getAllByTestId("styled-table-cell")).toHaveLength(6);
  });

  it("renders the correct number of rows", () => {
    render(<MeasurelyTable specs={specs} data={data}  />);
    expect(screen.getAllByTestId("styled-table-row")).toHaveLength(
      data.length + 0
    );
  });

  it("renders the empty message when data is empty", () => {
    render(<MeasurelyTable specs={specs} data={[]} />);
    expect(screen.getByTestId("no-data-info")).toBeInTheDocument();
  });

//   it("calls fetchPage when clicking on pagination buttons", () => {
//     const fetchPageMock = jest.fn();
//     render(
//       <MeasurelyTable
//         specs={specs}
//         data={data}
        
//         fetchPage={fetchPageMock}
//       />
//     );

//     fireEvent.click(screen.getAllByTestId("page-container")[0]);

//     expect(fetchPageMock).toHaveBeenCalledWith(metadata.page);
//   });

//   it("does not render pagination when not needed", () => {
//     render(
//       <MeasurelyTable
//         specs={specs}
//         data={data}

//       />
//     );
//     expect(screen.queryByTestId("pagination-container")).toBeNull();
//   });

//   it("returns an empty string when given an empty string", () => {
//     const result = formatDate("");
//     expect(result).toBe("");
//   });

//   it("returns formatted date for a valid input string", () => {
//     const inputDate = "2023-01-01";
//     const formattedDate = moment(inputDate).format("DD MMM YYYY");
//     const result = formatDate(inputDate);
//     expect(result).toBe(formattedDate);
//   });

//   it("calls updateFilters with correct parameters when clicking on column title", () => {
//     const updateFiltersMock = jest.fn();
//     render(
//       <MeasurelyTable
//         specs={specs}
//         data={data}
//         updateFilters={updateFiltersMock}
//       />
//     );

//     fireEvent.click(screen.getAllByTestId("styled-table-cell")[6]);

//     expect(updateFiltersMock).toHaveBeenCalledWith({
      
//     });
//   });

//   it("handles column sorting", () => {
//     const updateFiltersMock = jest.fn();
//     render(
//       <MeasurelyTable
//         specs={specs}
//         data={data}
//         updateFilters={updateFiltersMock}
//       />
//     );
//     fireEvent.click(screen.getAllByTestId("styled-table-cell")[0]);

//     expect(updateFiltersMock).toHaveBeenCalledWith({
//       order: specs[0].id,
//       direction: metadata.direction === "asc" ? "desc" : "asc",
//     });
//   });
});

describe("MeasurelyTable Component additional test cases", () => {
  const specs = [
    { id: "name", label: "Name" },
    { id: "age", label: "Age" },
  ];

  const data = [
    { id: 1, name: "John Doe", age: 25 },
    { id: 2, name: "Jane Doe", age: 30 },
  ];

  const metadata = {
    page: 1,
    limit: 10,
    total: 20,
    order: "name",
    direction: "asc",
  };

  it("renders the correct number of pages with pagination limit options", () => {
    render(
      <MeasurelyTable
        specs={specs}
        data={data}
        fetchPage={() => {}}
      />
    );
    expect(screen.getAllByTestId("page-container")).toHaveLength(4);
  });

  it("handles column sorting with specified disabled columns", () => {
    const updateFiltersMock = jest.fn();
    render(
      <MeasurelyTable
        specs={specs}
        data={data}
        updateFilters={updateFiltersMock}
        disableSorting={["name"]}
      />
    );
    fireEvent.click(screen.getAllByTestId("styled-table-cell")[0]);
    expect(updateFiltersMock).not.toHaveBeenCalled();
  });

  it("renders the correct number of pages with pagination limit options when pageCount > totalNumberOfBoxesToShow", () => {
    render(
      <MeasurelyTable
        specs={specs}
        data={data}
        fetchPage={() => {}}
      />
    );
    expect(screen.getAllByTestId("page-container")).toHaveLength(4);
  });
});