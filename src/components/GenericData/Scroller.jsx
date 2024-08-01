
// "use client"
import React from 'react';
import { Link } from "react-scroll/modules";

export const Scroll = ({ to, children , setSidebarOpen }) => (
    <Link
        to={to}
        onClick={() => setSidebarOpen(false)}
        smooth={true}
        duration={1500}
        offset={-30} // adjust offset as needed to account for fixed headers or other elements
    >
        {children}
    </Link>
);



export const ScrollWeb = ({ to, children  }) => (
    <Link
        to={to}
        smooth={true}
        duration={1500}
        offset={-30} // adjust offset as needed to account for fixed headers or other elements
    >
        {children}
    </Link>
);


