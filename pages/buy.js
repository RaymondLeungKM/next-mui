import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import CarList from "../components/carList";
import SearchBar from "../components/searchBar";
import useSearchBar from "../hooks/useSearchBar";

function Buy() {
  const {
    name,
    handleNameChange,
    brand,
    handleBrandChange,
    year,
    handleYearChange,
    mileage,
    handleMileageChange,
  } = useSearchBar();

  const buyCarList = [
    { id: 1, name: "Audi A6", year: "2015", mileage: 100 },
    { id: 2, name: "BMW M3", year: "2016", mileage: 200 },
  ];

  const [filteredBuyCarList, setFilteredBuyCarList] = useState([...buyCarList]);

  useEffect(() => {
    let newList = [...buyCarList];
    if (name != "") {
      newList = newList.filter((car) => {
        return car.name.toLowerCase().includes(name);
      });
    }
    if (brand != "") {
      newList = newList.filter((car) => {
        return car.name.includes(brand);
      });
    }
    if (year != "") {
      newList = newList.filter((car) => {
        return car.year.includes(year);
      });
    }
    if (mileage != "") {
      newList = newList.filter((car) => {
        return car.mileage == mileage;
      });
    }
    console.log(newList);
    setFilteredBuyCarList([...newList]);
  }, [name, brand, year, mileage]);

  return (
    <Box>
      <Typography variant="h3">Buy List</Typography>
      <SearchBar
        name={name}
        handleNameChange={handleNameChange}
        brand={brand}
        handleBrandChange={handleBrandChange}
        year={year}
        handleYearChange={handleYearChange}
        mileage={mileage}
        handleMileageChange={handleMileageChange}
      />
      <CarList allCars={filteredBuyCarList} />
    </Box>
  );
}

export default Buy;
