import React, {useEffect, useState} from "react";
import '../styles/Home.scss';
import Newsletter from "./Newsletter.jsx";

function Home() {

    const [expanded, setExpanded] = useState(false);

    const handleExpand = () => {
        setExpanded(true);
    };

    const pageTtile = "CrystaLite";
    const catchPhrase = "Your favorite crystal detection software...";
    const getToKnow = "Click here to start your journey"
    const infoPoints = [
        "Snap. Identify. Shine.",
        "Know Your Crystals — In a Flash!",
        "Turn Photos into Crystal Clarity."
    ]

    useEffect(() => {
        if (expanded){
            const timeout = setTimeout(() => {
                const section = document.getElementById('section-to-scroll');
                if (section) {
                    section.scrollIntoView({behavior: 'smooth'});
                }
            }, 200);
            return () => clearTimeout(timeout);
        }
    }, [expanded]);

    return(
        <div className="background">

            <img className="amethyst" src="/amethyst.png" alt="amethyst" />

            <div className="stars-animation">
                <div id='stars'></div>
                <div id='stars2'></div>
                <div id='stars3'></div>
                <div id='stars4'></div>
            </div>


            <div className="top">
                <div className="pagetitle">{pageTtile}</div>
            <div className="catchphrase">{catchPhrase}</div>
                <div className="getToKnow" onClick={handleExpand}>{getToKnow}</div>
            </div>

            { expanded? <div className="main-page" id="section-to-scroll">
                <div className="info-points">
                    <div className="point-right">
                        <img className="point-img1" src="/infopointimg1.png"></img>
                        <div className="point-text">{infoPoints[0]}</div>
                    </div>
                    <div className="point-left">
                        <div className="point-text">{infoPoints[1]}</div>
                        <img className="point-img2" src="/infopointimg2.png"></img>
                    </div>
                    <div className="point-right">
                        <img className="point-img3" src="/infopointimg3.png"></img>
                        <div className="point-text">{infoPoints[2]}</div>
                    </div>
                </div>
                <Newsletter/>


            </div> : null}


        </div>
    );
}

export default Home;