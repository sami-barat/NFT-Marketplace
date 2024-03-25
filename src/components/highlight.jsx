// eslint-disable-next-line no-unused-vars
import React from "react";
import NFTHighlight from "../assets/images/NFTHighlight.png";
import Avatar from "../assets/images/Avatar.png";
import { Button } from "./button";
import { LuEye } from "react-icons/lu";
import "./styles/highlight.css";

const Highlight = () => {
  const backgroundStyle = {
    backgroundImage: `linear-gradient(180deg, rgba(162, 89, 255, 0) 0%, #A259FF 100%), url(${NFTHighlight})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    width: "100%",
    height: "640px",
    display: "flex ",
    alignItems: "flex-end ",
  };

  return (
    <>
      <div style={backgroundStyle}>
        <div
          className="container high-nfts">
          <div style={{ position: "relative" }}>
            <div className="avatarStyle">
              <img src={Avatar} style={{height: '24', width: '24px'}} alt="Avatar" />
              <p>Shroomie</p>
            </div>
            <p className="mushroom"
              style={{
                fontFamily: "'Work Sans', sans-serif",
                fontSize: "51px",
                fontWeight: "600",
                color: "#FFFFFF",
                lineHeight: "56.1px",
                margin: "0 0 30px 0",
              }}
            >
              Magic Mushrooms
            </p>
            <Button
              w={198}
              h={60}
              color="#2B2B2B"
              bcolor="#FFFFFF"
              text="See NFT"
              ff={"'Work Sans', sans-serif"}
              alignItems
              fw={600}
              b="0"
              fz="16px"
              brs={20}
              icon={<LuEye size={20} color="#A259FF" />}
            />
          </div>
          <div className="auctionEndsStyle">
            <p style={{ fontSize: "12px", fontWeight: "400" }}>
              Auction ends in:
            </p>
            <p className="time" style={{ fontSize: "38px", fontWeight: "700" }}>
              59 : 59 : 59
            </p>
            <div
              style={{
                display: "flex",
                gap: "75px",
                fontSize: "12px",
                fontWeight: "400",
              }}
            >
              <p>Hours</p>
              <p>Minutes</p>
              <p>Seconds</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { Highlight };
