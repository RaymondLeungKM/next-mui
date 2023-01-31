import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import CarList from "../components/carList";
import SearchBar from "../components/searchBar";
import useSearchBar from "../hooks/useSearchBar";

import { useQuery } from "@tanstack/react-query";
import { getBuyList } from "./firebase/cars";
import { database } from "../config/firebaseConfig";
import { ref, child, get, set } from "firebase/database";

// let buyCarList = [];

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

  const {
    status,
    error,
    data: buyCarList = [],
  } = useQuery({ queryKey: ["buyList"], queryFn: getBuyList });
  // const buyCarList = [
  //   { id: 1, name: "Audi A6", year: "2015", mileage: 100, price: 100000 },
  //   { id: 2, name: "BMW M3", year: "2016", mileage: 200, price: 200000 },
  // ];

  const dbRef = ref(database);

  const [filteredBuyCarList, setFilteredBuyCarList] = useState([]);

  useEffect(() => {
    setFilteredBuyCarList([...buyCarList]);
  }, [buyCarList]);

  // useEffect(() => {
  //   get(child(dbRef, 'cars/buy')).then((snapshot) => {
  //     // console.log("in here");
  //     // we can actually try to change it to tanstack query as well!!!
  //     if (snapshot.exists()) {
  //       setFilteredBuyCarList(snapshot.val());
  //       buyCarList = snapshot.val();
  //     } else {
  //       console.log("No data available");
  //     }
  //   }).catch((error) => {
  //     console.error(error);
  //   });
  // }, [])

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
      {status === "error" && (
        <Typography variant="h2">
          Error occurred, error={JSON.stringify(error)}
        </Typography>
      )}
      {status === "success" && <CarList allCars={filteredBuyCarList} />}
    </Box>
  );
}

export default Buy;
