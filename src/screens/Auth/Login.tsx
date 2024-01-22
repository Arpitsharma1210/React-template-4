import React from "react";
import md5 from "md5";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../redux/actions";
import { Stack } from "@mui/material";
import { Button, InfoPopup, Textfield, Tooltip } from "../../components/";
import {
  routes,
  domainValidator,
  emailValidator,
  required,
} from "../../utils/";
import { useFormReducer } from "../../hooks/";
import { colors } from "../../theme/style.palette.js";
import GoogleIcon from "../../assets/images/googleIcon.svg";
import messages from "../../messages";
import { push } from "connected-react-router";

const validators = {
  email: [
    required(messages?.general?.errors?.emailRequired),
    emailValidator,
    domainValidator,
  ],
  password: [required(messages?.general?.errors?.passwordRequired)],
};

const Login = () => {
  const { handleSubmit, connectField, reset } = useFormReducer(validators);
  const history = useHistory();
  const reduxDispatch = useDispatch();

  const [showComponent, setShowComponent] = React.useState(false);
  const [popSuccess, setPopSuccess] = React.useState<boolean>(false);
  const [popMsg, setPopMsg] = React.useState<string>("");
  let PopupTimer = 3000;

  const successfulLoginHandler = () => {
    history.replace(routes.dashboard);
  };

  const failLoginHandler = (error: Record<any, any>) => {
    reset();
    setPopSuccess(false);
    setPopMsg(
      messages?.login?.errors[error.message] ||
        messages?.login?.errors?.generalError
    );
    setShowComponent(true);
    setTimeout(() => setShowComponent(false), PopupTimer);
  };

  const onSubmit = (data: any) =>
    new Promise<any>((resolve, reject) => {

      reduxDispatch(push(routes.dashboard))
    })
      .catch((error) => {
        failLoginHandler(error);
      });

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack direction="row">
          <Stack
            direction="row"
            justifyContent="space-between"
            gap="18px"
            sx={{
              marginRight: "55px",
            }}
          >
            {connectField("email", {
              label: messages?.login?.emailLabel,
              formatfor: "auth",
            })(Textfield)}
            {connectField("password", {
              label: messages?.login?.passwordLabel,
              formatfor: "password",
              linkText: messages?.login?.forgotPasswordLabel,
              to: routes.forgotPassword,
            })(Textfield)}
          </Stack>
          <div style={{ marginTop: "23px", display: "flex" }}>
            <div style={{ marginRight: "30px" }}>
              <Button type="submit">{messages?.login?.btnText}</Button>
            </div>
            <div style={VerticalBreakStyles}></div>
            <Tooltip title={messages?.tooltip?.google}>
              <div style={GoogleIconContainerStyles}>
                <img src={GoogleIcon} alt="goog le oauth icon" />
              </div>
            </Tooltip>
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

const VerticalBreakStyles = {
  height: "65px",
  borderLeft: `1px solid ${colors.grey50}`,
  marginRight: "30px",
};

const GoogleIconContainerStyles = {
  cursor: "pointer",
  boxSizing: "border-box" as "border-box",
  border: `1px solid ${colors.black}`,
  borderRadius: "8px",
  height: "65px",
  width: "65px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "18px",
};

export default Login;
