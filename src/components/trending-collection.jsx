import React from 'react';
import './styles/trendingcollection.css';
import pic1 from "../assets/images/tendingcollection/pic1.png";
import pic2 from "../assets/images/tendingcollection/pic2.png";
import pic3 from "../assets/images/tendingcollection/pic3.png";
import ArtistCard from "../assets/images/tendingcollection/ArtistCard.png";
import ArtistCard2 from "../assets/images/tendingcollection/ArtistCard2.png";
import ArtistCard3 from "../assets/images/tendingcollection/ArtistCard3.png";

const TrendingCollection = () => {
    return (
      <>
        <div>
          <div className="container trending_content">
            <div>
              <p className="title">Trending Collection</p>
              <p className="description">Checkout our weekly updated trending collection.</p>
            </div>
             
            <div className="gallery_row">
              <div>
                <img className="img-g" src={pic1} alt="pic1" />
                <p className="artist_name">DSGN Animals</p>
                <img src={ArtistCard} alt="Artists" className="artist_card"/>
              </div>
              <div>
                <img className="img-g" src={pic2} alt="pic2" />
                <p className="artist_name">DSGN Animals</p>
                <img src={ArtistCard2} alt="Artists" className="artist_card"/>
              </div>
              <div>
                <img className="img-g" src={pic3} alt="pic3" />
                <p className="artist_name">DSGN Animals</p>
                <img src={ArtistCard3} alt="Artists" className="artist_card"/>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
  
export { TrendingCollection };
