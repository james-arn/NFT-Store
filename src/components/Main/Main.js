import React, { useEffect, useState } from "react";
import instagramLogo from "../../assets/owner/instagram.png";
import twitterLogo from "../../assets/owner/twitter.png";
import moreIcon from "../../assets/owner/more.png";
import "./Main.css";

export const Main = ({ selectedPunk, punkListData }) => {
  const [activePunk, setActivePunk] = useState(punkListData[0]);
  useEffect(() => {
    setActivePunk(punkListData[selectedPunk]);
  }, [selectedPunk, punkListData]);

  return (
    <div className="main">
      <div className="mainContent">
        <div className="punkHighlight">
          <div className="punkContainer">
            <img
              className="selectedPunk"
              src={activePunk.image_original_url}
              alt=""
            />
          </div>
        </div>

        <div className="punkDetails" style={{ color: "#fff" }}>
          <div className="title">
            {activePunk.name}
            <span className="itemNumber">*#{activePunk.token_id}</span>
          </div>

          <div className="owner">
            <div className="ownerImageContainer">
              <img src={activePunk.owner.profile_img_url} alt="" />
            </div>

            <div className="ownerDetails">
              <div className="ownerNameAndHandle"> </div>
              <div>{activePunk.owner.address}</div>
              <div className="ownerHandle">@JamesArnold</div>
              <a href="https://www.instagram.com/">
                <div className="ownerLink">
                  <img src={instagramLogo} alt="Instagram" />
                </div>
              </a>
              <a href="https://www.instagram.com/yagatoshi/">
                <div className="ownerLink">
                  <img src={twitterLogo} alt="Twitter" />
                </div>
              </a>
              <a href="https://opensea.io/collection/cyberpunk">
                <div className="ownerLink">
                  <img src={moreIcon} alt="More" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
