import React from "react";
import Mobile from "../components/Mobile";
import Computer from "../components/computer";
import MenWear from "../components/MemWear";
import WomanWear from "../components/WomanWear";
import Speaker from "../components/Speakers";
import Furniture from "../components/Furnitre";
import Watch from "../components/Watch";
import Fridge from "../components/Fridge";
import Ac from "../components/Ac";
import Tv from "../components/Tv";
import Book from "../components/Book";
import Kitchen from "../components/Kitchen";

const LandingPage = () => {
  return (
    <div className="pagecontainer">
      <Mobile />
      <Computer />
      <MenWear />
      <WomanWear />
      <Speaker />
      <Furniture />
      <Watch />
      <Fridge />
      <Ac />
      <Tv />
      <Book />
      <Kitchen />
    </div>
  );
};

export default LandingPage;
