import React, { useEffect } from "react";
import Main from "../../components/HomePageComp/Main/Main";
import IPhone from "../../components/HomePageComp/IPhone/IPhone";
import AppleWatch from "../../components/HomePageComp/AppleWatch/AppleWatch";
import MacBook from "../../components/HomePageComp/MacBook/MacBook";
import OfferTextBlocks from "../../components/HomePageComp/OfferTextBlocks/OfferTextBlocks";

export default function HomePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
