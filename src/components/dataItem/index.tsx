import React from "react";
import { StyledDataItem } from "./styles";
import ActiveJobsIcon from "../../assets/images/activejobs.svg";
import ApplicantsIcon from "../../assets/images/applicants.svg";
import InterviewsIcon from "../../assets/images/interviews.svg";
import OfferedIcon from "../../assets/images/offered.svg";
import HiresIcon from "../../assets/images/hires.svg";
import StatIncrease from "../../assets/images/stat-increase.svg";
import StatDecrease from "../../assets/images/stat-decrease.svg";
import messages from "../../messages";

interface Props {
  type: "activejobs" | "applicants" | "interviews" | "offered" | "hires";
  data: string;
  stattype?: "increase" | "decrease" | "none";
  statdata?: string;
}

const ItemData = {
  activejobs: { title: "Active Jobs", icon: ActiveJobsIcon },
  applicants: { title: "Applicants", icon: ApplicantsIcon },
  interviews: { title: "Interviews", icon: InterviewsIcon },
  offered: { title: "Offered", icon: OfferedIcon },
  hires: { title: "Hires", icon: HiresIcon },
};

const DataItem: React.FC<Props> = ({
  type,
  data,
  stattype = "none",
  statdata,
}) => {
  return (
    <StyledDataItem>
      <div className="imgContainer">
        <img src={ItemData[type].icon} alt="dataitem icon" />
      </div>
      <div className="databox">
        <div className="title">{ItemData[type].title}</div>
        <div className="data">{data}</div>
        {stattype !== "none" && (
          <div className={`stat ${stattype === "increase" ? "inc" : "dec"}`}>
            <span>
              {stattype === "increase" ? (
                <img src={StatIncrease} alt="" />
              ) : (
                <img src={StatDecrease} alt="" />
              )}{" "}
              {(statdata ? statdata : "") + "%"}{" "}
            </span>
            <span>{messages?.dataitem?.this}</span>
            <span>{messages?.dataitem?.month}</span>
          </div>
        )}
      </div>
    </StyledDataItem>
  );
};

export default DataItem;
