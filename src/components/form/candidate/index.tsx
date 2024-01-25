import React, { Dispatch, SetStateAction } from "react";
import { ModalWrapper } from "../..";
import AddCandidate from "./AddCandidate";
import AddMultipleCandidate from "./AddCandidates";

type submitHandler = () => any;

interface Props {
  onSubmit: submitHandler;
  formOpen: boolean;
  formShowHanlder: Dispatch<SetStateAction<boolean>>;
  multiple?: boolean;
}

const AddCandidateForm: React.FC<Props> = ({
  onSubmit,
  formOpen,
  formShowHanlder,
  multiple,
}) => {
  return (
    <ModalWrapper modalOpenState={formOpen} modalStateHandler={formShowHanlder}>
      {multiple ? (
        <AddMultipleCandidate onSubmit={onSubmit} />
      ) : (
        <AddCandidate onSubmit={onSubmit} />
      )}
    </ModalWrapper>
  );
};

export default AddCandidateForm;
