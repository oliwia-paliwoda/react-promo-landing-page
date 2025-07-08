import React, {useEffect, useState} from "react";
import '../styles/Home.scss';

function Home() {

    const [expanded, setExpanded] = useState(false);

    const handleExpand = () => {
        setExpanded(true);
    };

    const pageTtile = "CrystaLite";
    const catchPhrase = "Your favorite crystal detection software...";
    const getToKnow = "Click here to start your journey"

    useEffect(() => {
        if (expanded){
            const timeout = setTimeout(() => {
                const section = document.getElementById('section-to-scroll');
                if (section) {
                    section.scrollIntoView({behavior: 'smooth'});
                }
            }, 50);
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
            <div className="getToKnow">{getToKnow}</div>
            </div>



        </div>
    );
}

export default Home;