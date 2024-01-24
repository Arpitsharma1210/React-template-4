import React from "react";
import { Chip } from "@mui/material";
import { ChipButton, ModalWrapper } from "../";
import { colors } from "../../theme/style.palette.js";
import {
  StyledHeader,
  StyledDate,
  StyledHeaderSection,
  StyledSubHeading,
  StyledChip,
  StyledParagraph,
} from "./style";
import messages from "../../messages";

interface MyComponentProps {
  heading: string;
  date: string;
  modalOpenState: boolean;
  modalStateHandler: any;
}

const JD: React.FC<MyComponentProps> = ({
  heading,
  date,
  modalOpenState,
  modalStateHandler,
}) => {
  return (
    <ModalWrapper
      edgy
      slider
      modalOpenState={modalOpenState}
      modalStateHandler={modalStateHandler}
      style={{ height: "100%", overflowY: "scroll", boxSizing: "border-box" }}
    >
      <div className="Parent" style={{ width: 700 }}>
        <StyledHeaderSection>
          <div style={{ display: "flex", alignItems: "center" }}>
            <StyledHeader>{heading}</StyledHeader>
            <div style={{ marginLeft: "20px" }}>
              <ChipButton color={"grey"}> {messages?.button?.onSite} </ChipButton>
            </div>
          </div>

          <StyledDate>{date}</StyledDate>
        </StyledHeaderSection>

        <section className="Description" style={{ marginBottom: "25px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "20px",
            }}
          >
            <StyledSubHeading style={{ marginRight: 12 }}>
              {messages?.heading?.jobDescription}
            </StyledSubHeading>
            <StyledChip>
              <Chip
                label= {messages?.label?.exp}
                style={{
                  backgroundColor: colors.blackExtra,
                  color: colors.white,
                }}
              />
              <Chip
                label={messages?.label?.fulltime}
                style={{
                  backgroundColor: colors.blackExtra,
                  color: colors.white,
                }}
              />
              <Chip
                label={messages?.label?.ctc}
                style={{
                  backgroundColor: colors.blackExtra,
                  color: colors.white,
                }}
              />
            </StyledChip>
          </div>
          <StyledParagraph>
            We are seeking a highly skilled Full Stack Developer to join our
            dynamic development team. The ideal candidate will be responsible
            for designing,developing, and maintaining web-based applications
            that meet our clients' needs. You will be expected to work closely
            with our project managers, designers, and other developers to create
            functional and efficient applications.
          </StyledParagraph>
        </section>

        <section className="Responsibilities" style={{ marginBottom: "15px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "20px",
            }}
          >
            <StyledSubHeading>{messages?.heading?.responsibilities}</StyledSubHeading>
          </div>
          <StyledParagraph>
            <li>
              Designing and developing web-based applications using languages
              such as HTML, CSS, JavaScript, and PHP.
            </li>
            <li>
              Collaborating with project managers, designers, and other
              developers to create functional and efficient applications.
            </li>
            <li>
              Writing clean and efficient code, as well as debugging and
              troubleshooting issues as they arise.
            </li>
            <li>
              Maintaining and updating existing applications, ensuring they are
              up-to-date with the latest technologies and industry standards.
            </li>
            <li>
              Participating in code reviews and providing feedback to other
              developers.
            </li>
            <li>
              Keeping up-to-date with new web technologies and trends, and
              applying them to our applications when appropriate.
            </li>
          </StyledParagraph>
        </section>

        <section className="skills">
          <StyledSubHeading style={{ marginBottom: 12 }}>
            {messages?.heading?.skills}
          </StyledSubHeading>
          <StyledChip>
            <Chip
            label= {messages?.label?.react}
              style={{
                backgroundColor: colors.blackExtra,
                color: colors.white,
              }}
            />
            <Chip
              label= {messages?.label?.js}
              style={{
                backgroundColor: colors.blackExtra,
                color: colors.white,
              }}
            />
            <Chip
              label={messages?.label?.webApp}
              style={{
                backgroundColor: colors.blackExtra,
                color: colors.white,
              }}
            />
            <Chip
              label={messages?.label?.team}
              style={{
                backgroundColor: colors.blackExtra,
                color: colors.white,
              }}
            />
          </StyledChip>
        </section>
      </div>
    </ModalWrapper>
  );
};

export default JD;
