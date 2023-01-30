import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import CarList from "../components/carList";
import SearchBar from "../components/searchBar";
import useSearchBar from "../hooks/useSearchBar";

import { useQuery } from "@tanstack/react-query";
import { getBuyList } from "./firebase/cars";

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

  const { status,  error, data: buyCarList = []} = useQuery({ queryKey: ["buyList"], queryFn: getBuyList });

  // const buyCarList = [
  //   { id: 1, name: "Audi A6", year: "2015", mileage: 100, price: 100000 },
  //   { id: 2, name: "BMW M3", year: "2016", mileage: 200, price: 200000 },
  // ];

  const [filteredBuyCarList, setFilteredBuyCarList] = useState([]);

  useEffect(()=>{
    setFilteredBuyCarList([...buyCarList]);
  }, [buyCarList])

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
      {status === "loading" && <Typography variant="h2">Loading</Typography>} 
      {status === "error" && <Typography variant="h2">Error occurred, error={JSON.stringify(error)}</Typography>}
      {status === "success" && <CarList allCars={filteredBuyCarList} />}
    </Box>
  );
}

export default Buy;
