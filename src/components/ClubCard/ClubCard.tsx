import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

import defaultLogo from "../assets/default_logo.jpg";
import checkMark from "../assets/icons/check_mark.png";
import vector from "../assets/icons/vector.png";
import redVector from "../assets/icons/red_vector.png";
import Club from "../../models/Club";

interface ClubCard_Props {
  data: Club;
}

const ClubCard = ({ data }: ClubCard_Props) => {
  const { name, description, appsOpen, appRequired } = data;
  return (
    <div className="card">
      <div className="background">
        <div className="content">
          <div className="bear">
            <Image
              src={defaultLogo}
              className="default-logo"
              alt="default-logo"
            />
          </div>
          <div className="right">
            <text className="club-name">{name}</text>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              {appsOpen ? (
                <div>
                  <Image src={checkMark} className="check-mark-logo" />
                  <text className="app-info open">OPEN</text>
                </div>
              ) : (
                <></>
              )}
              {appRequired ? (
                <div>
                  <Image src={vector} alt="vector-logo" />
                  <text className="app-info req">APPLICATION</text>
                </div>
              ) : (
                <div>
                  <Image src={redVector} alt="red-vector-logo" />
                  <text className="app-info not-req">NO APPLICATION</text>
                </div>
              )}
            </div>
          </div>
        </div>
        <text className="desc">{description}</text>
      </div>
    </div>
  );
};

export default ClubCard;
