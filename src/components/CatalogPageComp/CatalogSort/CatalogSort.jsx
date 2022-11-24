import { TextField } from "@mui/material";
import React from "react";
import MySelect from "../../UI/MySelect/MySelect";
import "./CatalogSort.css";

const CatalogSort = ({searchQuery, setSearchQuery, selectedSort, setSelectedSort}) => {
  
  const options = [
    { value: "price", name: "price By Decsending", descending: true },
    { value: "price", name: "price By Ecsending", descending: false },
    { value: "dateOfAdd", name: "dateOfAdd By Decsending", descending: true },
    { value: "dateOfAdd", name: "dateOfAdd By Eecsending", descending: false },
    { value: "rating", name: "rating By Decsending", descending: true },
    { value: "rating", name: "rating By Ecsending", descending: false },
  ];

  return (
    <div className="sort-block">
      <div className="sort-block__search">
        <TextField
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          id="standard-basic"
          label="Search"
          variant="standard"
        />
      </div>
      <MySelect
        value={selectedSort}
        onChange={(sort) => setSelectedSort(sort)}
        defaultValue={"Choose sort type"}
        options={options}
      />
    </div>
  );
};

export default CatalogSort;