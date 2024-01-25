import React from "react";
import { Grid } from "@mui/material";
import { Textfield, Button, ModalWrapper } from "../";
import { useFormReducer } from "../../hooks";
import { required } from "../../utils";
import { PopupHeader } from "./styles";
import messages from "../../messages";

interface Props {
  onSubmit: any;
  modalOpenState: boolean;
  modalStateHandler: any;
}

const validators = {
  feedback: [required(messages?.form?.formrequired?.feedback)],
};

const FeedbackPopup: React.FC<Props> = ({
  onSubmit,
  modalStateHandler,
}) => {
  const { submitting, hasError, handleSubmit, connectField } =
    useFormReducer(validators);

  return (
    <ModalWrapper
      modalStateHandler={modalStateHandler}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <PopupHeader style={{ marginBottom: "26px" }}>{messages?.heading?.feedback}</PopupHeader>
        <div style={{ marginBottom: "38px" }} className="feedback_container">
          {connectField("feedback", {
            label: messages?.label?.enterFeedback,
            formatfor: "form",
          })(Textfield)}
        </div>
        <Grid container justifyContent="center" gap="18px">
          <Grid item>
            <Button variant="outlined" onClick={modalStateHandler}>
              {messages?.button?.cancel}
            </Button>
          </Grid>
          <Grid item>
            <Button disabled={submitting || hasError} type="submit">
            {messages?.button?.submit}
            </Button>
          </Grid>
        </Grid>
      </form>
    </ModalWrapper>
  );
};

export default FeedbackPopup;
