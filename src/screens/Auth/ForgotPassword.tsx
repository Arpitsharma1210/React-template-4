import React from "react";
import { Stack } from "@mui/material";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { Textfield, Button, Toast, InfoPopup } from "../../components";
import {
  HttpMethods,
  domainValidator,
  emailValidator,
  required,
} from "../../utils";
import { useFormReducer } from "../../hooks";
import { RESET_PASSWORD_REQUEST_LINK } from "../../api";
import { apiCall } from "../../redux/actions";
import messages from "../../messages";

const validators = {
  email: [
    required(messages?.general?.errors?.emailRequired),
    emailValidator,
    domainValidator,
  ],
};

const ForgotPassword = () => {
  const { handleSubmit, connectField, reset } = useFormReducer(validators);
  const reduxDispatch = useDispatch();

  const [showComponent, setShowComponent] = React.useState(false);
  const [popSuccess, setPopSuccess] = React.useState<boolean>(false);
  const [popMsg, setPopMsg] = React.useState<string>("");
  let PopupTimer = 3000;

  const toastHandler = () => {
    toast(
      <Toast
        text={messages?.forgotPassword?.requestSentTitle}
        subText={messages?.forgotPassword?.requestSentSubtitle}
        type="success"
      />
    );
  };

  const failHandler = (error: Record<any, any>) => {
    setPopSuccess(false);
    setPopMsg(
      messages?.forgotPassword?.errors[error.message] ||
        messages?.forgotPassword?.errors?.generalError
    );
    setShowComponent(true);
    setTimeout(() => setShowComponent(false), PopupTimer);
  };

  const onSubmit = (data: any) =>
    new Promise<any>((resolve, reject) => {
      const sanitizedBody = {
        email: data.email,
      };
      reduxDispatch(
        apiCall(
          RESET_PASSWORD_REQUEST_LINK,
          resolve,
          reject,
          HttpMethods.POST,
          sanitizedBody
        )
      );
      reset();
    })
      .then(() => {
        toastHandler();
      })
      .catch((err) => {
        failHandler(err);
      });

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack direction="row" spacing={2}>
          {connectField("email", {
            label: messages?.forgotPassword?.emailLabel,
            formatfor: "auth",
            placeholder:
              messages?.forgotPassword?.placeholderSubtext +
              messages?.company?.domain,
          })(Textfield)}
          <div style={{ marginTop: "23px", display: "flex" }}>
            <Button type="submit">
              {messages?.forgotPassword?.btnText}
            </Button>
          </div>
        </Stack>
      </form>
      <InfoPopup
        success={popSuccess}
        modalOpenState={showComponent}
        modalStateHandler={setShowComponent}
      >
        {popMsg}
      </InfoPopup>
    </>
  );
};

export default ForgotPassword;
