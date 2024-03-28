// eslint-disable-next-line no-unused-vars
import React from 'react';
import './styles/topcreators.css'; // Import CSS file
import { Button } from './button';
import { LuRocket } from "react-icons/lu";
import './styles/topcreators.css';
import Avatar1 from '../assets/images/topcreators/Avatar1.png';
import Avatar2 from '../assets/images/topcreators/Avatar2.png';
import Avatar3 from '../assets/images/topcreators/Avatar3.png';
import Avatar4 from '../assets/images/topcreators/Avatar4.png';
import Avatar5 from '../assets/images/topcreators/Avatar5.png';
import Avatar6 from '../assets/images/topcreators/Avatar6.png';
import Avatar7 from '../assets/images/topcreators/Avatar7.png';
import Avatar8 from '../assets/images/topcreators/Avatar8.png';
import Avatar9 from '../assets/images/topcreators/Avatar9.png';
import Avatar10 from '../assets/images/topcreators/Avatar10.png';
import Avatar11 from '../assets/images/topcreators/Avatar11.png';
import Avatar12 from '../assets/images/topcreators/Avatar12.png';

const TopCreators = () => {
    const creatorData = [
        {
            id: 1,
            name: "Keepitreal",
            image: Avatar1,
        },
        {
            id: 2,
            name: "DigiLab",
            image: Avatar2,
        },
        {
            id: 3,
            name: "GravityOne",
            image: Avatar3,
        },
        {
            id: 4,
            name: "Juanie",
            image: Avatar4,
        },
        {
            id: 5,
            name: "BlueWhale",
            image: Avatar5,
        },
        {
            id: 6,
            name: "MrFox",
            image: Avatar6,
        },
        {
            id: 7,
            name: "Shroomie",
            image: Avatar7,
        },
        {
            id: 8,
            name: "Robotica",
            image: Avatar8,
        },
        {
            id: 9,
            name: "RustyRobot",
            image: Avatar9,
        },
        {
            id: 10,
            name: "Animakid",
            image: Avatar10,
        },
        {
            id: 11,
            name: "Dotgu",
            image: Avatar11,
        },
        {
            id: 12,
            name: "Ghiblier",
            image: Avatar12,
        },
    ];

    return (
        <>
            <div className='creator_section container'>
                <div className='div-top'>
                    <div className='top-creators-info'>
                        <p className='heading'>Top Creators</p>
                        <p className='sub-head1'>Checkout Top Rated Creators on the NFT Marketplace</p>
                    </div>
                    <Button
                        w={247}
                        h={60}
                        color="#FFFFFF"
                        bcolor="transparent"
                        text="View Rankings"
                        ff="'Work Sans', sans-serif"
                        alignItems
                        fw={600}
                        b="2px solid #A259FF"
                        fz="16px"
                        brs={20}
                        icon={<LuRocket size={20} color="#A259FF" />}
                    />
                </div>
                <div className="creator_cards">
                    {creatorData.map((creator, index) => (
                        <div key={creator.id} className="creator_card">
                            <span className="card_number">{index + 1}</span>
                            <img src={creator.image} alt={creator.name} />
                            <div className='card_content'>
                                <p>{creator.name}</p>
                                <p className='p4'>Total Sales:  <span>34.53 ETH</span></p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export { TopCreators };
