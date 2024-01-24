import React, { Dispatch, SetStateAction } from "react";
import { Stack, Grid } from "@mui/material";
import { Visibility } from "@mui/icons-material/";
import { useFormReducer } from "../../../hooks";
import { required } from "../../../utils";
import {
  Selectfield,
  Button,
  ModalWrapper,
  CustomAccordion,
  RichTextEditor,
  Textfield,
} from "../..";
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
const handleContentChange = (text: string, html: string): void => {
  console.log("Text:", text);
  console.log("HTML:", html);
};

const department = [
  { label: "HR", value: "hr" },
  { label: "Design", value: "design" },
  { label: "Engineering", value: "engineering" },
  { label: "Business", value: "business" },
];

const jobType = [
  { label: "Full Time", value: "fulltime" },
  { label: "Onsite", value: "onsite" },
  { label: "WFH", value: "wfh" },
];

const location = [
  { label: "Jaipur", value: "jaipur" },
  { label: "Pune", value: "pune" },
];


const minSal: { label: string; value: string; }[] = [];

for (let i = 2; i <= 15; i++) {
  minSal.push({ label: `${i} LPA`, value: `${i}` });
}

const maxSal: { label: string; value: string; }[] = [];

for (let i = 2; i <= 15; i++) {
  maxSal.push({ label: `${i} LPA`, value: `${i}` });
}

const maxExp: { label: string; value: string; }[] = [];

for (let i = 0.5; i <= 10; i += 0.5) {
  maxExp.push({ label: `${i} Years`, value: `${i}` });
}

const minExp: { label: string; value: string; }[] = [];

for (let i = 0.5; i <= 5; i += 0.5) {
  minExp.push({ label: `${i} Years`, value: `${i}` });
}

const validators = {
  department: [required(messages?.form?.formrequired?.department)],
  jobType: [required(messages?.form?.formrequired?.jobtype)],
  reqNo: [required(messages?.form?.formrequired?.reqno)],
  location: [required(messages?.form?.formrequired?.location)],
  designation: [required(messages?.form?.formrequired?.designation)],
  minExp: [required(messages?.form?.formrequired?.minexp)],
  maxExp: [required(messages?.form?.formrequired?.maxexp)],
};

const JobForm: React.FC<Props> = ({
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
    header = messages?.job?.editjob;
    btnText = messages?.job?.update;
  } else {
    header = messages?.job?.createJob;
    btnText = messages?.job?.request;
  }

  return (
    <ModalWrapper
      edgy={true}
      slider={true}
      modalOpenState={formOpen}
      modalStateHandler={formShowHandler}
      style={{ height: "100%", overflowY: "scroll", boxSizing: "border-box" }}
    >
      <form style={{ overflow: "auto" }} onSubmit={handleSubmit(onSubmit)}>
        <StyledCandidateHeader>{header}</StyledCandidateHeader>
        <Stack rowGap={"20px"} mb="38px">
        <Grid container>
          <Grid item>
              {connectField("jobTitle", {
                label: messages?.job?.jobTitle,
                formatfor: "form",
              })(Textfield)}
            </Grid>
          </Grid>
          <Grid container>
          <Grid item>
              {connectField("reqNo", {
                label: messages?.job?.reqNo,
                formatfor: "form",
                handleSubmit:false,
              })(Textfield)}
            </Grid>
            <Grid item>
              {connectField("jobType", {
                label: messages?.form?.jobtype,
                formatfor: "form",
                options: jobType,
              })(Selectfield)}
            </Grid>
          </Grid>
          <Grid container>
          <Grid item>
              {connectField("department", {
                label: messages?.form?.department,
                formatfor: "form",
                options: department,
              })(Selectfield)}
            </Grid>
            <Grid item>
              {connectField("location", {
                label: messages?.form?.location,
                formatfor: "form",
                options: location,
              })(Selectfield)}
            </Grid>
          </Grid>
          <Grid container>
            <Grid item>
              {connectField("designation", {
                label: messages?.form?.designation,
                formatfor: "form",
              })(Textfield)}
            </Grid>
            <Grid item>
              {connectField("vacancies", {
                label: messages?.job?.noVacancies,
                formatfor: "form",
              })(Textfield)}
            </Grid>
            </Grid>
            <Grid container>
            <Grid item>
                {connectField("minExp", {
                  label: messages?.job?.minExp,
                  formatfor: "formmini",
                  options: minExp,
                })(Selectfield)}
              </Grid>
              <Grid item>
                {connectField("maxExp", {
                  label: messages?.job?.maxExp,
                  formatfor: "formmini",
                  options: maxExp,
                })(Selectfield)}
              </Grid>
              <Grid item>
                {connectField("minSal", {
                  label: messages?.job?.minSal,
                  formatfor: "formmini",
                  options: minSal,
                })(Selectfield)}
              </Grid>
              <Grid item>
                {connectField("maxSal", {
                  label: messages?.job?.maxSal,
                  formatfor: "formmini",
                  options: maxSal,
                })(Selectfield)}
              </Grid>
          </Grid>
          <CustomAccordion
            title= {messages?.form?.description}
            contentComponent={
              <RichTextEditor onContentChange={handleContentChange} />
            }
          />
          <CustomAccordion
            title={messages?.form?.responsibilities}
            contentComponent={
              <RichTextEditor onContentChange={handleContentChange} />
            }
          />
          <CustomAccordion title={messages?.form?.skills} contentComponent={"Hello"} />
        </Stack>
        <Grid
          container
          className="formActions"
          direction="row"
          gap="20px"
          justifyContent="flex-end"
        >
          <Button variant="outlined">
            <Visibility /> {messages?.form?.preview}
          </Button>
          <Button type="submit" disabled={submitting || hasError}>
            {btnText}
          </Button>
        </Grid>
      </form>
    </ModalWrapper>
  );
};

export default JobForm;
