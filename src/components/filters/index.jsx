import React, { useState, useEffect } from "react";
import FiltersController from "../../utilities/filters";
import {
  FilterData,
  FilterDataCount,
  FilterDataName,
  FilterList,
  FilterType,
  FilterWrapper,
  ShowText,
} from "./styles";

const Filter = () => {
  const [filters, addFilterData] = useState({});
  const [filterTypeState, setFilters] = useState([]);

  const getFilterData = () => {
    const data = FiltersController();
    addFilterData(data);
    const filterTypes = Object.keys(data).map((ele) => ({
      key: ele,
      count: 10,
      expanded: false,
    }));
    setFilters(filterTypes);
  };

  useEffect(() => {
    getFilterData();
  }, []);

  const setFiltersData = (index, count) => {
    const data = [...filterTypeState];

    if (count > -1) {
      data[index].count = 10;
      data[index].expanded = false;
      setFilters(data);
    } else {
      data[index].count = filters[data[index].key].length;
      data[index].expanded = true;
      setFilters(data);
    }
  };

  return (
    <FilterList>
      {filterTypeState.map(({ key, expanded, count }, index) => (
        <>
          <FilterWrapper>
            <FilterType>{key.split("_")}</FilterType>
            {filters[key].slice(0, count).map((filterData) => (
              <FilterData>
                <FilterDataName>{filterData.key}</FilterDataName>
                <FilterDataCount>{filterData.doc_count}</FilterDataCount>
              </FilterData>
            ))}
            {filters[key].length >= count &&
              (expanded ? (
                <ShowText onMouseDown={() => setFiltersData(index, 10)}>
                  Show less
                </ShowText>
              ) : (
                <ShowText onMouseDown={() => setFiltersData(index, -1)}>
                  Show more
                </ShowText>
              ))}
          </FilterWrapper>
        </>
      ))}
    </FilterList>
  );
};

export default Filter;
