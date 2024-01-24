import React from "react";
import { Stack, Chip } from "@mui/material";
import {
  Textfield,
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  Button,
  ModalWrapper,
} from "..";
import messages from "../../messages";

interface Props {
  modalOpenState: boolean;
  modalStateHandler: any;
}

const EditPipelinePopup: React.FC<Props> = ({
  modalOpenState,
  modalStateHandler,
}) => {
  const [inputValue, setInputValue] = React.useState("");
  const [chips, setChips] = React.useState([]);

  const handleAddChip = () => {
    if (inputValue.trim() !== "") {
      setChips([...chips, inputValue.trim()]);
      setInputValue("");
    }
  };

  const handleDeleteChip = (chipToDelete: any) => () => {
    setChips((prevChips) => prevChips.filter((chip) => chip !== chipToDelete));
  };
  return (
    <ModalWrapper
      modalOpenState={modalOpenState}
      modalStateHandler={modalStateHandler}
      disableClose
      style={{ padding: "0", minWidth: "70%" }}
    >
      <Card>
        <CardHeader divider style={{ padding: "30px" }}>
          <CardTitle>{messages?.heading?.editPipeline}</CardTitle>
          <div>
            <Stack direction="row" gap={2} paddingLeft="30px">
              <Button
                variant="outlined"
                onClick={() => modalStateHandler(false)}
              >
                {messages?.button?.cancel}
              </Button>
              <Button>{messages?.button?.createProcess}</Button>
            </Stack>
          </div>
        </CardHeader>
        <CardContent>
          <Stack
            direction="row"
            columnGap="18px"
            paddingTop="30px"
            alignItems="end"
            mb="40px"
          >
            <Textfield
              label="Stage Name"
              formatfor="form"
              value={inputValue}
              onChange={setInputValue}
            />
            <Button onClick={handleAddChip}>{messages?.button?.addStage}</Button>
          </Stack>
          <div
            style={{ display: "flex", columnGap: "16px", marginBottom: 38 }}
            className="chipContainer mb38"
          >
            {chips.map((chip, index) => (
              <Chip
                key={index}
                label={chip}
                onDelete={handleDeleteChip(chip)}
              />
            ))}
          </div>
        </CardContent>
      </Card>
    </ModalWrapper>
  );
};

export default EditPipelinePopup;
