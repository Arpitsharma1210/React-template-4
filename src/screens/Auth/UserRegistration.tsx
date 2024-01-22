import React, { useState } from "react";
import md5 from "md5";
import { useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { REGISTER, OPTIONS_DEPARTMENT } from "../../api";
import { apiCall } from "../../redux/actions";
import { useFormReducer, useOptions } from "../../hooks/";
import { Textfield, Button, InfoPopup, Selectfield } from "../../components";
import {
  StyledInputContainer,
  StyledAvatar,
  StyledInput,
  StyledRegisterContainer,
  StyledInstruction,
  StyledFormItems,
  StyledButton,
  StyledImageContainer,
  StyledCard,
  StyledLeftImage,
  StyledForm,
  StyledLogo,
  StyledFormHeader,
} from "./styles";
import {
  required,
  numberValidator,
  passwordValidator,
  confirmPassword,
  routes,
  HttpMethods,
} from "../../utils";
import DemoImage from "../../assets/images/Demo.svg";
import NoahLogo from "../../assets/images/logo_text.svg";
import messages from "../../messages";

interface CustomAvatarProps {
  image: string | null;
  onChange: (image: string | null) => void;
}

const CustomAvatar: React.FC<CustomAvatarProps> = ({ image, onChange }) => {
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        onChange(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <StyledInputContainer>
      <StyledAvatar src={image || ""} alt="Profile Picture" />
      <StyledInput type="file" accept="image/*" onChange={handleImageChange} />
    </StyledInputContainer>
  );
};

const validators = {
  fname: [required(messages?.general?.errors?.firstNameRequired)],
  lname: [required(messages?.general?.errors?.lastNameRequired)],

  mobile: [
    required(messages?.general?.errors?.phoneRequired),
    numberValidator(messages?.general?.errors?.invalidPhone),
  ],
  designation: [required(messages?.general?.errors?.designationRequired)],
  department: [required(messages?.general?.errors?.departmentRequired)],
  password: [
    required(messages?.general?.errors?.passwordRequired),
    passwordValidator,
  ],
  confirmPassword: [
    required(messages?.general?.errors?.passwordRequired),
    confirmPassword(messages?.general?.errors?.password?.notMatching),
  ],
};

const setOptions = (optionData: Record<string, any>[]) => {
  let finalOptions = [];
  for (let i = 0; i < optionData.length; ++i) {
    let tempOption = {
      label: optionData[i].departmentName,
      value: optionData[i]._id,
    };
    finalOptions.push(tempOption);
  }
  return finalOptions;
};

const UserRegistration = () => {
  const [profileImage, setProfileImage] = useState(null);
  const [showComponent, setShowComponent] = useState(false);
  const [popSuccess, setPopSuccess] = useState<boolean>(false);
  const [popMsg, setPopMsg] = useState<string>("");

  const reduxDispatch = useDispatch();
  const { handleSubmit, connectField } = useFormReducer(validators);
  const { options } = useOptions(OPTIONS_DEPARTMENT, false);

  const history = useHistory();
  const { token } = useParams<{ token?: string }>();
  let PopupTimer = 3000;

  const successHandler = () => {
    setPopSuccess(true);
    setPopMsg(messages?.registerUser?.success);
    setShowComponent(true);
    setTimeout(() => history.replace(routes.login), PopupTimer);
  };

  const failHandler = (error: Record<any, any>) => {
    setPopSuccess(false);
    setPopMsg(
      messages?.registerUser?.errors[error.message] ||
        messages?.registerUser?.errors?.generalError
    );
    setShowComponent(true);
    setTimeout(() => setShowComponent(false), PopupTimer);
  };

  const onSubmit = async (data: any) =>
    new Promise<any>((resolve, reject) => {
      reduxDispatch(
        apiCall(`${REGISTER}/${token}`, resolve, reject, HttpMethods.POST, {
          firstName: data?.fname,
          lastName: data?.lname,
          phone: data?.mobile,
          designation: data?.designation,
          password: md5(data?.password),
          department: data?.department,
        })
      );
    })
      .then((res) => successHandler())
      .catch((err) => {
        failHandler(err);
      });

  return (
    <StyledRegisterContainer>
      <StyledImageContainer>
        <StyledLeftImage src={DemoImage} alt="Banner" />
      </StyledImageContainer>

      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <StyledFormHeader>
          <StyledLogo src={NoahLogo} alt="NOAH logo" />
          {messages?.registerUser?.heading}
        </StyledFormHeader>

        <CustomAvatar image={profileImage} onChange={setProfileImage} />

        <StyledInstruction>
          {messages?.registerUser?.uploadProfileInstruction}
        </StyledInstruction>
        <StyledCard>
          <StyledFormItems>
            {connectField("department", {
              label: messages?.registerUser?.departmentLabel,
              formatfor: "auth",
              options: setOptions(options),
            })(Selectfield)}
          </StyledFormItems>
          <StyledFormItems>
            {connectField("fname", {
              label: messages?.registerUser?.firstNameLabel,
              formatfor: "auth",
            })(Textfield)}
            {connectField("lname", {
              label: messages?.registerUser?.lastNameLabel,
              formatfor: "auth",
            })(Textfield)}
          </StyledFormItems>

          <StyledFormItems>
            {connectField("designation", {
              label: messages?.registerUser?.designationLabel,
              formatfor: "auth",
            })(Textfield)}
            {connectField("mobile", {
              label: messages?.registerUser?.phoneLabel,
              formatfor: "auth",
            })(Textfield)}
          </StyledFormItems>

          <StyledFormItems>
            {connectField("password", {
              label: messages?.registerUser?.passwordLabel,
              formatfor: "password",
            })(Textfield)}
            {connectField("confirmPassword", {
              label: messages?.registerUser?.confirmPassLabel,
              formatfor: "password",
            })(Textfield)}
          </StyledFormItems>
        </StyledCard>
        <StyledButton>
          <Button type="submit" onClick={handleSubmit}>
            {messages?.registerUser?.btnText}
          </Button>
        </StyledButton>
      </StyledForm>
      <InfoPopup
        success={popSuccess}
        modalOpenState={showComponent}
        modalStateHandler={setShowComponent}
      >
        {popMsg}
      </InfoPopup>
    </StyledRegisterContainer>
  );
};

export default UserRegistration;
