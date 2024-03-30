// eslint-disable-next-line no-unused-vars
import React from 'react';
import './styles/browsecategories.css';
import Image1 from '../assets/images/browsecategories/Image1.png';
import Image2 from '../assets/images/browsecategories/Image2.png';
import Image3 from '../assets/images/browsecategories/Image3.png';
import Image4 from '../assets/images/browsecategories/Image4.png';
import Image5 from '../assets/images/browsecategories/Image5.png';
import Image6 from '../assets/images/browsecategories/Image6.png';
import Image7 from '../assets/images/browsecategories/Image7.png';
import Image8 from '../assets/images/browsecategories/Image8.png';
import { 
    PiPaintBrush,
    PiSwatches,
    PiMusicNotes,
    PiCamera,
    PiVideoCamera,
    PiMagicWand,
    PiBasketball,
    PiPlanet,
 } from "react-icons/pi";

const BrowseCategories = () => {
    const categoriesData = [
        {
            id: 1,
            name: "Art",
            image: Image1,
            icon: <PiPaintBrush size={100} />
        },
        {
            id: 2,
            name: "Music",
            image: Image2,
            icon: <PiSwatches size={100} />
        },
        {
            id: 3,
            name: "Photography",
            image: Image3,
            icon: <PiMusicNotes size={100} />
        },
        {
            id: 4,
            name: "Design",
            image: Image4,
            icon: <PiCamera size={100} />
        },
        {
            id: 5,
            name: "Fashion",
            image: Image5,
            icon: <PiVideoCamera size={100} />
        },
        {
            id: 6,
            name: "Crafts",
            image: Image6,
            icon: <PiMagicWand size={100} />
        },
        {
            id: 7,
            name: "Cooking",
            image: Image7,
            icon: <PiBasketball size={100} />
        },
        {
            id: 8,
            name: "Literature",
            image: Image8,
            icon: <PiPlanet size={100} />
        },
    ];

    return (
        <div style={{marginTop: '90px'}}>
            <div className='category_section container'>
                <div>
                    <p className='b-title'>Browse Categories</p>
                </div>
                <div className='Category_cards'>
                    {categoriesData.map(category => (
                        <div key={category.id} className="category-card">
                            <div className="icon-overlay">{category.icon}</div>
                            <img src={category.image} alt={category.name} />
                            <p>{category.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export { BrowseCategories };
