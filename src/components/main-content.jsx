import "./styles/maincontent.css";
import heroanimation from "../assets/images/mainctn/heroanimation.gif";
import additionalInfo from "../assets/images/mainctn/additionalInfo.png";
import { LuRocket } from "react-icons/lu";
import { Button } from './button';

const MainContent = () => {
  return (
    <div className="main-content-container container">
      <div className="content-wrapper container">
        <div className="text-section">
          <p className="main-heading">
            Discover <br />
            Digital Art &<br />
            Collect NFTs
          </p>
          <p className="sub-heading">
            NFT marketplace UI created with Anima for Figma. Collect, buy and
            sell art from more than 20k NFT artists.
          </p>
          <Button
            w={224}
            h={60}
            color="#FFFFFF"
            bcolor="#A259FF"
            text="Get Started"
            ff="'Work Sans', sans-serif"
            alignItems
            fw={600}
            b="2px solid #A259FF"
            fz="16px"
            brs={20}
            icon={<LuRocket size={20} color="#FFFFFF" />}
          />
          <img className="additional-info-img" src={additionalInfo} alt="Additional_info" />
        </div>
        <div className="image-section">
          <img
            className="hero-image"
            src={heroanimation}
            alt="space-walking"
          />
        </div>
      </div>
    </div>
  );
};

export { MainContent };
