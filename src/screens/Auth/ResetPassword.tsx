import React from "react";
import md5 from "md5";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { replace } from "connected-react-router";
import { useFormReducer } from "../../hooks";
import { apiCall } from "../../redux/actions";
import { RESET_PASSWORD } from "../../api";
import { Stack } from "@mui/material";
import { Button, Textfield, InfoPopup } from "../../components";
import messages from "../../messages";
import {
  HttpMethods,
  required,
  confirmPassword,
  passwordValidator,
  routes,
} from "../../utils";

const validators = {
  password: [
    required(messages?.general?.errors?.passwordRequired),
    passwordValidator,
  ],
  confirmPassword: [
    required(messages?.general?.errors?.passwordRequired),
    confirmPassword(messages?.general?.errors?.password?.notMatching),
  ],
};

const ResetPassword = () => {
  const [infoState, setInfoState] = React.useState<boolean>(false);
  const [infoSuccess, setInfoSuccess] = React.useState<boolean>(false);
  const [infoMsg, setInfoMsg] = React.useState<string>("");
  const { handleSubmit, connectField } = useFormReducer(validators);
  const { token } = useParams<{ token?: string }>();
  const reduxDispatch = useDispatch();

  const PopupTimer = 5000;

  const successfulResetHandler = () => {
    setInfoMsg(messages?.resetPassword?.success);
    setInfoSuccess(true);
    setInfoState(true);
    setTimeout(() => reduxDispatch(replace(routes.login)), PopupTimer);
  };

  const failResetHandler = (err: Record<any, any>) => {
    setInfoMsg(
      messages?.resetPassword?.errors[err.message] ||
        messages?.resetPassword?.errors?.generalError
    );
    setInfoSuccess(false);
    setInfoState(true);
    setTimeout(() => setInfoState(false), PopupTimer);
  };

  const onSubmit = (data: any) =>
    new Promise<any>((resolve, reject) => {
      const sanitizedBody = {
        token,
        newPassword: md5(data.password),
      };
      reduxDispatch(
        apiCall(
          RESET_PASSWORD,
          resolve,
          reject,
          HttpMethods.POST,
          sanitizedBody
        )
      );
    })
      .then(() => {
        successfulResetHandler();
      })
      .catch((err) => {
        failResetHandler(err);
      });

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack direction="row" alignItems="flex-start">
          <Stack
            direction="row"
            justifyContent="space-between"
            gap="18px"
            sx={{
              marginRight: "55px",
            }}
          >
            {connectField("password", {
              label: messages?.resetPassword?.passwordLabel,
              placeholder: messages?.resetPassword?.passwordPlaceholder,
              formatfor: "password",
            })(Textfield)}
            {connectField("confirmPassword", {
              label: messages?.resetPassword?.confirmPasswordLabel,
              placeholder: messages?.resetPassword?.confirmPasswordPlaceholder,
              formatfor: "password",
            })(Textfield)}
          </Stack>
          <div style={{ marginTop: "23px", display: "flex" }}>
            <Button type="submit">{messages?.resetPassword?.btnText}</Button>
          </div>
        </Stack>
      </form>
      <InfoPopup
        modalOpenState={infoState}
        modalStateHandler={setInfoState}
        success={infoSuccess}
      >
        {infoMsg}
      </InfoPopup>
    </>
  );
};

export default ResetPassword;
