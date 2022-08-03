import React from "react";
import "./Contact.css";
const Contact = () => {
  return (
    <div className="container-contact">
      <h1>Contactez-nous</h1>
      <p>Par Mail : blogreact@oas.com</p>
      <p>Par Téléphone : 0755384212</p>
      <p>Rejoignez-nous sur les réseaux </p>
      <ul>
        <li>X</li>
        <a href="https://www.linkedin.com/in/othmane-ait-salah-36736423a/?originalSubdomain=fr">
          <li>LinkedIn</li>
        </a>
        <li>X</li>
      </ul>
    </div>
  );
};

export default Contact;
