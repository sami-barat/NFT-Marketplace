// eslint-disable-next-line no-unused-vars
import React from "react";
import Icon1 from "../assets/images/howitworks/Icon1.png";
import Icon2 from "../assets/images/howitworks/Icon2.png";
import Icon3 from "../assets/images/howitworks/Icon3.png";
import "./styles/howitworks.css";

const HowItWorks = () => {
  const workData = [
    {
      id: 1,
      image: Icon1,
      heading: "Setup Your Wallet",
      text: "Set up your wallet of choice. Connect it to the Animarket by clicking the wallet icon in the top right corner.",
    },
    {
      id: 2,
      image: Icon2,
      heading: "Create Wallet",
      text: "Upload your work and setup your collection. Add a description, social links and floor price.",
    },
    {
      id: 3,
      image: Icon3,
      heading: "Start Earning",
      text: "Choose between auctions and fixed-price listings. Start earning by selling your NFTs or trading others.",
    },
  ];

  return (
    <>
      <div>
        <div className="how-it-works-section container">
          <div style={{
            fontFamily: "'Work Sans', sans-serif",
            color: '#FFFFFF',
            paddingBottom: "50px",
          }}>
            <p style={{fontWeight: "600", fontSize: "38px", paddingBottom: "20px"}}>How It Works</p>
            <p style={{ fontWeight: "400", fontSize: "22px"}}>Find Out How To Get Started</p>
          </div>
          <div className="text_boxes">
            {workData.map((item) => (
              <div className="how-it-works-item" key={item.id}>
                <img src={item.image} alt={item.heading} />
                <div className="aa">
                  <p className="p1" style={{fontWeight: '600', fontSize: '22px', paddingBottom: '10px'}}>{item.heading}</p>
                  <p className="p2" style={{ fontWeight: '400', fontSize: '16px'}}>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export { HowItWorks };
