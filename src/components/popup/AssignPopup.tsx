import React from "react";
import { Grid } from "@mui/material";
import { Selectfield, Button, ModalWrapper } from "../";
import { useFormReducer } from "../../hooks";
import { required } from "../../utils";
import { PopupHeader } from "./styles";
import messages from "../../messages";

interface Props {
  onSubmit: any;
  modalOpenState: boolean;
  modalStateHandler: any;
}

const jobOptions = [
  { label: "Full Stack Developer", value: "developer" },
  { label: "Tester", value: "tester" },
  { label: "Designer", value: "designer" },
  { label: "Business Development Executive", value: "bde" },
];

const validators = {
  jobType: [required(messages?.form?.formrequired?.jobtype)],
};

const AssignPopup: React.FC<Props> = ({
  onSubmit,
  modalOpenState,
  modalStateHandler,
}) => {
  const { connectField, hasError, submitting, handleSubmit } =
    useFormReducer(validators);

  return (
    <ModalWrapper
      modalOpenState={modalOpenState}
      modalStateHandler={modalStateHandler}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <PopupHeader style={{ marginBottom: "26px" }}>
          {messages?.heading?.assignToJob}
        </PopupHeader>
        <div style={{ marginBottom: "38px" }} className="chooseJob_container">
          {connectField("jobType", {
            label: messages?.label?.openJob,
            formatfor: "form",
            options: jobOptions,
          })(Selectfield)}
        </div>
        <Grid container justifyContent="center" gap="18px">
          <Grid item>
            <Button variant="outlined" onClick={modalStateHandler}>
              {messages?.button?.cancel}
            </Button>
          </Grid>
          <Grid item>
            <Button disabled={submitting || hasError} type="submit">
            {messages?.button?.assign}
            </Button>
          </Grid>
        </Grid>
      </form>
    </ModalWrapper>
  );
};

export default AssignPopup;
