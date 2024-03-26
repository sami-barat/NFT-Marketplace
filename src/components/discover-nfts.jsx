// eslint-disable-next-line no-unused-vars
import React from "react";
import Discover1 from "../assets/images/discovernfts/Discover1.png";
import Discover2 from "../assets/images/discovernfts/Discover2.png";
import Discover3 from "../assets/images/discovernfts/Discover3.png";
import Avatar1 from "../assets/images/discovernfts/Avatar1.png";
import Avatar2 from "../assets/images/discovernfts/Avatar2.png";
import Avatar3 from "../assets/images/discovernfts/Avatar3.png";
import "./styles/discovernfts.css";
import { Button } from "./button";
import { LuEye } from "react-icons/lu";

const DiscoverNfts = () => {
  const discoverData = [
    {
      id: 1,
      Image: Discover1,
      name: "Distant Galaxy",
      avatarImage: Avatar1,
      avatarName: "MoonDancer",
      Price: "1.6 ETH",
      highestBid: "0.33 wETH",
    },
    {
      id: 2,
      Image: Discover2,
      name: "Life on Edena",
      avatarImage: Avatar2,
      avatarName: "NebulaKid",
      Price: "1.6 ETH",
      highestBid: "0.33 wETH",
    },
    {
      id: 3,
      Image: Discover3,
      name: "Astro Fiction",
      avatarImage: Avatar3,
      avatarName: "SpaceOne",
      Price: "1.6 ETH",
      highestBid: "0.33 wETH",
    },
  ];

  return (
    <>
      <div style={{ backgroundColor: "#2B2B2B", paddingTop: "100px" }}>
        <div className="discover_section container">
          <div className="discover-content">
            <div>
              <p className="heading">Discover more NFT's</p>
              <p className="sub-heading">Explore New Trending NFT's</p>
            </div>
            <Button
              w={187}
              h={60}
              color="#FFFFFF"
              bcolor="transparent"
              text="See All"
              ff={"'Work Sans', sans-serif"}
              alignItems
              fw={600}
              b="2px solid #A259FF"
              fz="16px"
              brs={20}
              icon={<LuEye size={20} color="#A259FF" />}
            />
          </div>
          <div className="discover_cards">
            {discoverData.map((item) => (
              <div key={item.id} className="informations">
                <img src={item.Image} alt={item.name} />
                <div style={{ margin: "15px 25px" }}>
                  <p className="text-1">{item.name}</p>
                  <div style={{ display: "flex" }}>
                    <img
                      src={item.avatarImage}
                      alt={item.avatarName}
                      className="avatar_image"
                    />
                    <p className="text-2">{item.avatarName}</p>
                  </div>
                </div>
                <div className="information-2">
                  <div>
                    <p style={{ color: "#858584", fontSize: "12px" }}>Price</p>
                    <p style={{ fontSize: "16px" }}>{item.Price}</p>
                  </div>
                  <div>
                    <p style={{ color: "#858584", fontSize: "12px" }}>
                      Highest Bid
                    </p>
                    <p style={{ fontSize: "16px" }}>{item.highestBid}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export { DiscoverNfts };
