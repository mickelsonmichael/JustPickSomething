import React from "react";
import { Link } from "react-router-dom";

import "./Footer.css";
import FooterItem from "./FooterLink";

const Footer = () => (
    <footer>
        <ul>
            <FooterItem to="/">Custom</FooterItem>
            <FooterItem to="/apex">Apex</FooterItem>
        </ul>
    </footer>
);

export default Footer;
