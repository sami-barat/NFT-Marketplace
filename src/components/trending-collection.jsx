import React from 'react';
import './styles/trendingcollection.css';
import pic1 from "../assets/images/tendingcollection/pic1.png";
import pic2 from "../assets/images/tendingcollection/pic2.png";
import pic3 from "../assets/images/tendingcollection/pic3.png";
import ArtistCard from "../assets/images/tendingcollection/ArtistCard.png";
import ArtistCard2 from "../assets/images/tendingcollection/ArtistCard2.png";
import ArtistCard3 from "../assets/images/tendingcollection/ArtistCard3.png";
import NumberNFTs from "../assets/images/tendingcollection/NumberNFTs.png";
import animalsmain from "../assets/images/tendingcollection/animalsmain.png";
import animalsub1 from "../assets/images/tendingcollection/animalsub1.png";
import animalsub2 from "../assets/images/tendingcollection/animalsub2.png";
import mushroommain from "../assets/images/tendingcollection/mushroommain.png";
import mushroomsub1 from "../assets/images/tendingcollection/mushroomsub1.png";
import mushroomsub2 from "../assets/images/tendingcollection/mushroomsub2.png";
import robotmain from "../assets/images/tendingcollection/robotmain.png";
import robotsub1 from "../assets/images/tendingcollection/robotsub1.png";
import robotsub2 from "../assets/images/tendingcollection/robotsub2.png";






const TrendingCollection = () => {
    return (
      <>
        <div>
          <div className="container trending_content">
            <div>
              <p className="title">Trending Collection</p>
              <p className="description">Checkout our weekly updated trending collection.</p>
            </div>

            <div class="row-container">
              <div class="image-container">
                <img class="placeholder" src={animalsmain} alt="Your Image" />
                <div class="image-sub">
                  <img class="img1" src={animalsub1} alt="Image"/>
                  <img class="img2" src={animalsub2} alt="Image"/>
                  <img class="img3" src={NumberNFTs} alt="NFT Count" />
                </div>
                <div className='ar-text'>
                  <p className="artist_name">DSGN Animals</p>
                  <img src={ArtistCard} alt="Artists" className="artist_card"/>
                </div>
              </div>
              <div class="image-container">
                <img class="placeholder-SUE7x0" src={mushroommain} alt="Your Image" />
                <div class="image-sub">
                  <img class="img1" src={mushroomsub1} alt="Image"/>
                  <img class="img2" src={mushroomsub2} alt="Image"/>
                  <img class="img3" src={NumberNFTs} alt="NFT Count" />
                </div>
                <div className='ar-text'>
                  <p className="artist_name">DSGN Animals</p>
                  <img src={ArtistCard2} alt="Artists" className="artist_card"/>
                </div>
              </div>
              <div class="image-container">
                <img class="placeholder-SUE7x0" src={robotmain} alt="Your Image" />
                <div class="image-sub">
                  <img class="img1" src={robotsub1} alt="Image"/>
                  <img class="img2" src={robotsub2} alt="Image"/>
                  <img class="img3" src={NumberNFTs} alt="NFT Count" />
                </div>
                <div>
                  <p className="artist_name">DSGN Animals</p>
                  <img src={ArtistCard3} alt="Artists" className="artist_card"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
  
export { TrendingCollection };
