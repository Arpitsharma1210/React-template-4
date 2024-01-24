import React from "react";
import { Stack, Grid } from "@mui/material";
import { useFormReducer } from "../../../hooks";
import { required } from "../../../utils";
import { Textfield, Selectfield, InputLabel, Button } from "../..";
import {
  StyledCandidateHeader,
  UploadButton,
} from "../styles";
import UploadIcon from "../../../assets/images/uploadIcon.svg";
import messages from "../../../messages";

type submitHandler = () => any;

const jobTypes = [
  { label: "Part Time", value: "parttime" },
  { label: "Full Time", value: "fulltime" },
  { label: "Contract", value: "contract" },
];

const sources = [
  { label: "LinkedIn", value: "linkedin" },
  { label: "Indeed", value: "indeed" },
  { label: "Referral", value: "refer" },
  { label: "Internshala", value: "internshala" },
  { label: "Naukri", value: "naukri" },
  { label: "Other", value: "other" },
];

const designations = [
  { label: "Full Stack Developer", value: "developer" },
  { label: "Designer", value: "designer" },
  { label: "Tester", value: "tester" },
];

const validators = {
  reqNo: [required(messages?.form?.formrequired?.reqno)],
  jobType: [required(messages?.form?.formrequired?.jobtype)],
  source: [required(messages?.form?.formrequired?.source)],
  designation: [required(messages?.form?.formrequired?.designation)],
};

const AddMultipleCandidate: React.FC<{ onSubmit: submitHandler }> = ({
  onSubmit,
}) => {
  const { submitting, hasError, handleSubmit, connectField } =
    useFormReducer(validators);
  const [noOfFiles, setNoOfFiles] = React.useState<number | string>(0);
  const [validPdf, setValidPdf] = React.useState<boolean>(false);

  const fileHandler = (event: any) => {
    let files = event.target.files;
    for (let i = 0; i < files.length; ++i) {
      let file = files[i];
      if (file.type !== "application/pdf") {
        setValidPdf(false);
        setNoOfFiles(messages?.form?.formrequired?.validpdfs);
        return;
      }
    }
    setValidPdf(true);
    setNoOfFiles(event.target.files.length);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <StyledCandidateHeader>{messages?.candidate?.addcandidates}</StyledCandidateHeader>
      <Stack rowGap={"20px"} mb="20px">
        <Grid container>
          <Grid item>
            {connectField("reqNo", {
              label: (messages?.form?.reqno),
              formatfor: "form",
            })(Textfield)}
          </Grid>
          <Grid item>
            {connectField("jobType", {
              label: (messages?.form?.jobtype),
              formatfor: "form",
              options: jobTypes,
            })(Selectfield)}
          </Grid>
        </Grid>
        <Grid container>
          <Grid item>
            {connectField("source", {
              label: (messages?.form?.source),
              formatfor: "form",
              options: sources,
            })(Selectfield)}
          </Grid>
          <Grid item>
            {connectField("designation", {
              label: (messages?.form?.designation),
              formatfor: "form",
              options: designations,
            })(Selectfield)}
          </Grid>
        </Grid>
      </Stack>
      <div style={{ marginBottom: "33px" }}>
        <InputLabel label={messages?.form?.uploadresumes} />
        <div className="upload">
          <UploadButton style={{ height: "236px" }} type="button">
            <i>
              <img src={UploadIcon} alt="upload Icon" />
            </i>
            {messages?.form?.uploadresumes}
            <input onChange={fileHandler} type="file" multiple />
          </UploadButton>
        </div>
      </div>
      <div
        style={{ display: "flex", justifyContent: "space-between" }}
        className="formactions"
      >
        <div className="resume_uploaded">
          <InputLabel label={messages?.form?.nofresume} />
          <p>{noOfFiles}</p>
        </div>
        <Button
          bold
          type="submit"
          disabled={submitting || hasError || !validPdf}
        >
          {messages?.candidate?.addcandidates}
        </Button>
      </div>
    </form>
  );
};

export default AddMultipleCandidate;
