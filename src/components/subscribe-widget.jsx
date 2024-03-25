// eslint-disable-next-line no-unused-vars
import React from "react";
import "./styles/subscribewidget.css";
import Photo from "../assets/images/Photo.png";
import { BiEnvelope } from "react-icons/bi";
import { Button } from "./button";

const SubscribeWidget = () => {
  return (
    <>
      <div className="sub-w" style={{ height: "550px", paddingTop: '35px'  }}>
        <div
          className="sub-wigdet container"
          style={{ maxWidth: "1050px", display: "flex",  }}
        >
          <div>
            <img className="img-space" src={Photo} alt="NFT's" />
          </div>
          <div className="weekly">
            <p className="p-w" style={{fontSize: '38px', fontWeight: '600'}}>Join Our Weekly Digest</p>
            <p className="p-g" style={{fontSize: '22px', fontWeight: '400'}}>Get Exclusive Promotions & Updates Straight To Your Inbox.</p>
            <div className="inputWithButton">
              <input 
              type="email" 
              id="email" 
              pattern=".+@example\.com" 
              placeholder="Enter your email here" 
              className="inputField" 
              required
              style={{
                fontFamily:"'Work Sans', sans-serif",
                fontSize: '16px',
                fontWeight: '600'
              }}/>
              <Button className="button-sub"
                text="Subscribe"
                w={211}
                h={60}
                color="#FFFFFF"
                bcolor="#A259FF"
                ff={"'Work Sans', sans-serif"}
                fw={600}
                fz={16}
                b={0}
                brs={20}
                icon={<BiEnvelope size={20} color="#FFFFFF"/>}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { SubscribeWidget };
