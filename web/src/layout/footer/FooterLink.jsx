import React from "react";
import { Link } from "react-router-dom";

const FooterItem = ({ to, children }) => (
    <li>
        <Link to={to}>{children}</Link>
    </li>
);

export default FooterItem;
