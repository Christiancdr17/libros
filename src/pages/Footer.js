import React from "react";
import Calibre from "./img/calibre-logo.png";
import Sigil from "./img/sigil.png";
import "./Footer.css"

export default function () {
    return (
        <div className="footerContainer">
            <img className="imgContainer" src={Calibre} alt="Calibre" />
            <img className="imgContainer" src={Sigil} alt="Sigil" />

        </div>
    );
}
