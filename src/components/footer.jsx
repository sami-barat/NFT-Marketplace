import {
  PiDiscordLogo,
  PiYoutubeLogo,
  PiTwitterLogo,
  PiInstagramLogo,
} from "react-icons/pi";

import Storefront from "../assets/images/Storefront.png";
import "./styles/footer.css";

import { Button } from "./button";

const Footer = () => {
  const handleDiscordClick = () => {
    window.open("https://discord.com", "_blank");
  };

  const handleYoutubeClick = () => {
    window.open("https://www.youtube.com", "_blank");
  };

  const handleTwitterClick = () => {
    window.open("https://twitter.com", "_blank");
  };

  const handleInstagramClick = () => {
    window.open("https://www.instagram.com", "_blank");
  };

  return (
    <footer>
      <div className="footer-sec container">
        <div>
          <p className="branding">
            <img className="img-f" src={Storefront} alt="store_logo" /> NFT Marketplace
          </p>
          <p>NFT marketplace UI created <br />with Anima for Figma.</p>
          <p>Join our community</p>
          <div className="sm-links">
            <a className="discord"><PiDiscordLogo
              size={32}
              onClick={handleDiscordClick}
            /></a>
            <a className="youtube"><PiYoutubeLogo
              size={32}
              onClick={handleYoutubeClick}
            /></a>
            <a className="twitter"><PiTwitterLogo
              size={32}
              onClick={handleTwitterClick}
            /></a>
            <a className="instagram"><PiInstagramLogo
              size={32}
              onClick={handleInstagramClick}
            /></a>
          </div>
        </div>
        <div>
          <p className="explore">Explore</p>
          <ul className="uls">
            <li>
              <a href="#marketplace" id="hl1">Marketplace</a>
            </li>
            <li>
              <a href="#rankings">Rankings</a>
            </li>
            <li>
              <a href="#connect_a_wallet">Connect a Wallet</a>
            </li>
          </ul>
        </div>
        <div>
          <p className="weekly">Join our weekly digest</p>
          <p>Get exclusive promotions & updates<br /> straight to your inbox.</p>
          <div className="inputWithButton-fo">
            <input
              type="email"
              id="email2"
              pattern=".+@example\.com"
              placeholder="Enter your email here"
              className="inputField-fo"
              required
              />
            <Button
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
            />
          </div>
        </div>
      </div>
      <div className="hr-p">
        <p>Ⓒ All rights reserved, SAMI BARAT 2024.</p>
      </div>
    </footer>
  );
};

export { Footer };
