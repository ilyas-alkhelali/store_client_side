import { Grid } from "@mui/material";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Catalog from "../../components/CatalogPageComp/Catalog";
import CatalogNavBar from "../../components/CatalogPageComp/CatalogNavBar/CatalogNavBar";
import "./CatalogPage.css";

export default function CatalogPage() {
  const param = useParams();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="catalog-block">
      <CatalogNavBar>
        {param.typeName ? param.typeName : "Catalog"}
      </CatalogNavBar>
      <Catalog typeName={param.typeName} />
    </div>
  );
}
