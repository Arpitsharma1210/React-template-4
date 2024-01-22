import React from "react";
import { Autocompletefield, Selectfield } from "../";
import {
  StyledTableHeaderContainer,
  StyledTableTitle,
  StyledTableActions,
} from "./styles";
import messages from "../../messages";

interface Props {
  tableName: string;
}

const TableOptions = [
  { label: "Sort By: Newest", value: "newest" },
  { label: "Sort By: Oldest", value: "oldest" },
  { label: "Sort By: Default", value: "default" },
];

const TableHeader: React.FC<Props> = ({ tableName }) => {
  const [autocompleteValue, setAutocompleteValue] = React.useState<string>("");
  const [typingValue, setTypingValue] = React.useState<string>("");
  const [selectValue, setSelectValue] = React.useState<string>("default");

  return (
    <StyledTableHeaderContainer>
      <StyledTableTitle>{tableName}</StyledTableTitle>
      <StyledTableActions>
        <Autocompletefield
          typingValue={typingValue}
          typingValueHandler={setTypingValue}
          autocompleteValue={autocompleteValue}
          autocompleteValueHandler={setAutocompleteValue}
          placeholder={messages?.placeholder?.search}
          formatfor="table"
        />
        <Selectfield
          value={selectValue}
          onChange={setSelectValue}
          options={TableOptions}
          formatfor="table"
        />
      </StyledTableActions>
    </StyledTableHeaderContainer>
  );
};

export default TableHeader;
