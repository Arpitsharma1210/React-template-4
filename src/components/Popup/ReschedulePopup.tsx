import React from "react";
import { Grid } from "@mui/material";
import { Timefield, Button, ModalWrapper } from "../";
import { required, validateDate } from "../../utils";
import { useFormReducer } from "../../hooks";
import { PopupHeader } from "./styles";
import messages from "../../messages";

interface Props {
  onSubmit: any;
  modalOpenState: boolean;
  modalStateHandler: any;
}

const validators = {
  time: [
    required(messages?.reschedule?.suggestedTimeRequired),
    validateDate(messages?.reschedule?.validate?.suggestedTimeFormatInvalid),
  ],
  duration: [
    required(messages?.reschedule?.durationRequired),
    validateDate(messages?.reschedule?.validate?.durationFormatInvalid),
  ],
};

const ReschedulePopup: React.FC<Props> = ({
  onSubmit,
  modalOpenState,
  modalStateHandler,
}) => {
  const { handleSubmit, hasError, submitting, connectField } =
    useFormReducer(validators);

  return (
    <ModalWrapper
      modalOpenState={modalOpenState}
      modalStateHandler={modalStateHandler}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <PopupHeader style={{ marginBottom: "26px" }}>{messages?.heading?.reschedule}</PopupHeader>

        <Grid container mb="38px" gap="30px">
          <Grid item>
            {connectField("time", {
              formatfor: "formmini",
              label: messages?.label?.suggestedTime,
            })(Timefield)}
          </Grid>
          <Grid item>
            {connectField("duration", {
              formatfor: "formmini",
              label: messages?.label?.duration,
              ampm: false,
            })(Timefield)}
          </Grid>
        </Grid>
        <Grid container justifyContent="center" gap="18px">
          <Grid item>
            <Button variant="outlined" onClick={modalStateHandler}>
              {messages?.button?.cancel}
            </Button>
          </Grid>
          <Grid item>
            <Button disabled={submitting || hasError} type="submit">
            {messages?.button?.suggest}
            </Button>
          </Grid>
        </Grid>
      </form>
    </ModalWrapper>
  );
};

export default ReschedulePopup;
