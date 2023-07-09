import React from "react";
import NavBar from "~/components/NavBar/NavBar";
import Hero from "~/components/Hero/Hero";

function Header() {
    return (
        <div className="bg-primary">
            <NavBar  />
            <Hero />
        </div>
    );
}

export default Header;
