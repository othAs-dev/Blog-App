import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [largeur, setLargeur] = useState(window.innerWidth);
  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };

  useEffect(() => {
    const changeWidth = () => {
      setLargeur(window.innerWidth);
    };

    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  return (
    <nav>
      {(toggleMenu || largeur > 800) && (
        <ul className="liste">
          <li className="items">
            <Link to="/">Acceuil</Link>
          </li>
          <li className="items">
            <Link to="/ecrire">Ecrire</Link>
          </li>
          <li className="items">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      )}
      <button onClick={toggleNav} className="btn">
        <FontAwesomeIcon icon={faBars} />
      </button>
    </nav>
  );
}
