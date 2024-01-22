import React, { Dispatch, SetStateAction } from "react";
import {
  Stack,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  Grid,
} from "@mui/material";
import { useFormReducer } from "../../../hooks";
import { required, validateFutureDate, validateDate } from "../../../utils";
import { Selectfield, Datefield, Timefield, Button, ModalWrapper } from "../..";
import {
  StyledCandidateHeader,
} from "../styles";
import messages from "../../../messages";

interface Props {
  formOpen: boolean;
  formShowHandler: Dispatch<SetStateAction<boolean>>;
  edit?: boolean;
  onSubmit: () => any;
}

const department = [
  { label: "HR", value: "hr" },
  { label: "Design", value: "design" },
  { label: "Engineering", value: "engineering" },
  { label: "Business", value: "business" },
];

const scheduleWithData = [
  { label: "Aditya", value: "aditya" },
  { label: "Rohan", value: "rohan" },
  { label: "Akshat", value: "Akshat" },
  { label: "Mansi", value: "mansi" },
];

const validators = {
  department: [required(messages?.interview?.required?.department)],
  date: [
    required(messages?.interview?.required?.date),
    validateFutureDate(messages?.interview?.validate?.date),
  ],
  startTime: [
    required(messages?.interview?.required?.startime),
    validateDate(messages?.interview?.validate?.startime),
  ],
  endTime: [
    required(messages?.interview?.required?.endtime),
    validateDate(messages?.interview?.validate?.endtime),
  ],
  scheduleWith: [required(messages?.interview?.required?.schedulewith)],
};

const InterviewForm: React.FC<Props> = ({
  formOpen,
  formShowHandler,
  edit,
  onSubmit,
}) => {
  const { submitting, hasError, handleSubmit, connectField } =
    useFormReducer(validators);

  let header: string;
  let btnText: string;
  if (edit) {
    header = messages?.interview?.editinterview;
    btnText = messages?.interview?.update;
  } else {
    header = messages?.interview?.scheduleinterview;
    btnText = messages?.interview?.schedule;
  }

  return (
    <ModalWrapper modalOpenState={formOpen} modalStateHandler={formShowHandler}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <StyledCandidateHeader>{header}</StyledCandidateHeader>
        <Stack rowGap={"20px"} mb="38px">
          <Grid container>
            <Grid item>
              {connectField("department", {
                label: messages?.interview?.department,
                formatfor: "form",
                options: department,
              })(Selectfield)}
            </Grid>
            <Grid item>
              {connectField("date", {
                label: messages?.interview?.date,
                formatfor: "form",
              })(Datefield)}
            </Grid>
          </Grid>
          <Grid container>
            <Grid item>
              {connectField("startTime", {
                label: messages?.interview?.startime,
                formatfor: "form",
              })(Timefield)}
            </Grid>
            <Grid item>
              {connectField("endTime", {
                label: messages?.interview?.endtime,
                formatfor: "form",
              })(Timefield)}
            </Grid>
          </Grid>
          <Grid container>
            <Grid item>
              {connectField("scheduleWith", {
                label: messages?.interview?.schedulewith,
                formatfor: "form",
                options: scheduleWithData,
              })(Selectfield)}
            </Grid>
            <Grid
              item
              display="flex"
              alignItems="center"
              sx={{ height: "60px", width: "368px", marginTop: "20px" }}
            >
              <FormControl>
                <RadioGroup row>
                  <FormControlLabel
                    control={<Radio />}
                    label= {messages?.interview?.googleschedule}
                  />
                </RadioGroup>
              </FormControl>
            </Grid>
          </Grid>
        </Stack>
        <div className="formActions" style={{ textAlign: "right" }}>
          <Button type="submit" disabled={submitting || hasError}>
            {btnText}
          </Button>
        </div>
      </form>
    </ModalWrapper>
  );
};

export default InterviewForm;
