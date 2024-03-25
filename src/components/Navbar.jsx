import React, { useState, useEffect } from "react";
import logo from "../assets/images/logo.png";
import "./styles/navbar.css";
import { LuUser2 } from "react-icons/lu";
import { RiMenu4Fill } from "react-icons/ri";
import { FaRegWindowClose } from "react-icons/fa";

import { Button } from "./button";

const Navbar = () => {
  const headerLinksFromStorage = [
    {
      id: "hl1",
      to: "market_place",
      text: "Marketplace",
      active: true,
    },
    {
      id: "hl2",
      to: "rankings",
      text: "Rankings",
      active: false,
    },
    {
      id: "hl3",
      to: "connect_a_wallet",
      text: "Connect a wallet",
      active: false,
    },
  ];

  const [headerLinks, setHeaderLinks] = useState(headerLinksFromStorage);
  const [activeLinkId, setActiveLinkId] = useState(headerLinks[0].id);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const newHeaderLinks = headerLinks.map((item) => {
      return {
        ...item,
        active: item.id === activeLinkId, 
      };
    });
    setHeaderLinks(newHeaderLinks);
  }, [activeLinkId]);

  return (
    <header className="header">
      <nav>
        <div className="nav_container">
          <a href="/">
            <img src={logo} alt="home" />
          </a>
          <button className="sidebar_toggle" onClick={() => setSidebarOpen(!sidebarOpen)}>
          <RiMenu4Fill />
          </button>
          <ul className={`link_list ${sidebarOpen ? "sidebar_open" : ""}`}>
            {headerLinks.map((link) => (
              <li
                className={`link_list_item ${link.active ? "active_link" : ""}`}
                key={link.id}
              >
                <a href="#" onClick={(e) => { e.preventDefault(); setActiveLinkId(link.id); }}>{link.text}</a>
              </li>
            ))}
            <Button
              w={152}
              h={60}
              color="#FFFFFF"
              bcolor="#A259FF"
              text="Sign Up"
              ff={"'Work Sans', sans-serif"}
              alignItems
              fw={600}
              b="2px solid #A259FF"
              fz="16px"
              brs={20}
              icon={<LuUser2 size={20} color="#FFFFFF" />}
            />
            {sidebarOpen && (
              <button className="close_sidebar" onClick={() => setSidebarOpen(false)}>
                <FaRegWindowClose size={30}/>
              </button>
            )}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export { Navbar };
