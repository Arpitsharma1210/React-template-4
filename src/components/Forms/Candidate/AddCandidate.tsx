import React from "react";
import { Stack,Grid } from "@mui/material";
import { useFormReducer } from "../../../hooks";
import { required, emailValidator, numberValidator } from "../../../utils";
import { Textfield, Selectfield, InputLabel, Button } from "../..";
import {
  StyledCandidateHeader,
  UploadButton,
} from "../styles";
import UploadIcon from "../../../assets/images/uploadIcon.svg";
import messages from "../../../messages";

type submitHandler = () => any;

const validators = {
  name: [required(messages?.form?.formrequired?.name)],
  email: [required(messages?.form?.formrequired?.email), emailValidator],
  mobile: [
    required(messages?.form?.formrequired?.mobile),
    numberValidator(messages?.form?.formrequired?.mobilevalidator),
  ],
  source: [required(messages?.form?.formrequired?.source)],
  designation: [required(messages?.form?.formrequired?.designation)],
  location: [required(messages?.form?.formrequired?.location)],
};

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

const locations = [
  { label: "Office", value: "office" },
  { label: "WFH", value: "wfh" },
  { label: "OnSite", value: "onsite" },
];

const AddCandidate: React.FC<{ onSubmit: submitHandler }> = ({ onSubmit }) => {
  const { submitting, hasError, handleSubmit, connectField } =
    useFormReducer(validators);

  const [validPdf, setValidPdf] = React.useState<boolean>(false);
  const [attachedFileName, setAttachedFileName] = React.useState<string>("");

  const fileHandler = (event: any) => {
    const files = event.target.files;
    for (let i = 0; i < files.length; ++i) {
      let file = files[i];
      if (file.type !== "application/pdf") {
        setValidPdf(false);
        setAttachedFileName(messages?.form?.formrequired?.validpdf);
        return;
      }
    }
    setValidPdf(true);
    setAttachedFileName(files[0].name);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <StyledCandidateHeader>{messages?.candidate?.addcandidate}</StyledCandidateHeader>
      <Stack rowGap={"20px"} mb="20px">
        <Grid container>
          <Grid item>
            {connectField("name", {
              label: (messages?.form?.name),
              formatfor: "form",
            })(Textfield)}
          </Grid>
          <Grid item>
            {connectField("email", {
              label: (messages?.form?.email),
              formatfor: "form",
            })(Textfield)}
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
            {connectField("mobile", {
              label: (messages?.form?.mobile),
              formatfor: "form",
            })(Textfield)}
          </Grid>
        </Grid>
        <Grid container>
          <Grid item>
            {connectField("designation", {
              label: (messages?.form?.designation),
              formatfor: "form",
              options: designations,
            })(Selectfield)}
          </Grid>
          <Grid item>
            {connectField("location", {
              label: (messages?.form?.location),
              formatfor: "form",
              options: locations,
            })(Selectfield)}
          </Grid>
        </Grid>
      </Stack>
      <div style={{ marginBottom: "33px" }}>
        <InputLabel label={messages?.form?.uploadresume} />
        <div className="upload">
          <UploadButton style={{ height: "126px" }} type="button">
            <i>
              <img src={UploadIcon} alt="upload Icon" />
            </i>
            {messages?.form?.uploadresume}
            <input onChange={fileHandler} type="file" />
          </UploadButton>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
        className="formactions"
      >
        <p>{attachedFileName}</p>
        <Button
          bold
          type="submit"
          disabled={submitting || hasError || !validPdf}
        >
          {messages?.candidate?.addcandidate}
        </Button>
      </div>
    </form>
  );
};

export default AddCandidate;
