import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import HomeImg from "../images/home-img.webp";
import Side from "./Side";
import AnimatedCursor from "react-animated-cursor";
function Home() {
  return (
    <>
      <AnimatedCursor
        innerSize={10}
        outerSize={15}
        color="0,0,0"
        outerAlpha={0.1}
        innerScale={0.8}
        outerScale={5}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
        ]}
      />
      <Header left="anmol." leftLink="/" right="say hi." rightLink="/contact" />
      <div className="home-body">
        <h3 className="home-info">
          Hi, I am Anmol Bajpai, a guy who loves data, finance, sometimes
          designs.
        </h3>
        <div className="hero-img">
          <img src={HomeImg} alt="" />
        </div>
        <Side
          first="gith."
          firstPath="https://github.com/alfaPegasis"
          second="medi."
          secondPath="https://anmolbajpai2001.medium.com/"
          third="inst."
          thirdPath="https://www.instagram.com/anmol.qwe/"
          forth="link"
          forthPath="https://www.linkedin.com/in/anmolbajpai2001/"
        />
      </div>
      <Footer
        left="data science"
        leftLink="/ds"
        right="design and finance."
        rightLink="/contact"
      />
    </>
  );
}

export default Home;
