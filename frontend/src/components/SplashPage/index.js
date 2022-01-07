import React from "react";
import SignupFormModal from "../SignupFormModal";
import Footer from "../Footer";

import './SplashPage.css';

function SplashPage() {
    return (
        <>
            <div className="body-text">
                <h1>Find your inspiration.</h1>

                <h3>Join the Inkr community, home to tattoo artists and enthusiasts.</h3>

                <h4>"Tattoos have a power and magic all their own. They decorate the body but they also enhance the soul." - Michele Delio</h4>

            </div>

            <ul className="cb-slideshow">
                <li><span>Image 01</span></li>
                <li><span>Image 02</span></li>
                <li><span>Image 03</span></li>
            </ul>
            <Footer />
        </>
    )
}

export default SplashPage;
