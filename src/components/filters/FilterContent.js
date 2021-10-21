import React, { useContext } from "react";
import HeaderOnFilter from "./HeaderOnFilter";
import GridView from "./GridView";
import ListView from "./ListView";
import { FilterContext } from "../../contexts/FilterContext";

const FilterContent = (props) => {
  const { gridView } = useContext(FilterContext);
  return (
    <>
      <HeaderOnFilter />
      {gridView ? <GridView /> : <ListView />}
    </>
  );
};

export default FilterContent;
