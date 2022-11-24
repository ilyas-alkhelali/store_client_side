import React from "react";
import Main from "../../components/HomePageComp/Main/Main";
import IPhone from "../../components/HomePageComp/IPhone/IPhone";
import AppleWatch from "../../components/HomePageComp/AppleWatch/AppleWatch";
import MacBook from "../../components/HomePageComp/MacBook/MacBook";
import OfferTextBlocks from "../../components/HomePageComp/OfferTextBlocks/OfferTextBlocks";

export default function HomePage() {
  return (
    <div>
      <Main />
      <IPhone />
      <AppleWatch />
      <MacBook />
      <OfferTextBlocks />
    </div>
  );
}
