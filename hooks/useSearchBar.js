import { useState } from "react";

const initialState = {
    initialName: "",
    initialBrand: "",
    initialYear: "",
    initialMileage: ""
}

function useSearchBar(nameValue=initialState.initialName, brandValue=initialState.initialBrand, yearValue=initialState.initialYear, mileageValue=initialState.initialMileage) {
  const [name, setName] = useState(nameValue);
  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  // Brand
  const [brand, setBrand] = useState(brandValue);
  const handleBrandChange = (event) => {
    setBrand(event.target.value);
  };

  // Year
  const [year, setYear] = useState(yearValue);
  const handleYearChange = (event) => {
    setYear(event.target.value);
  };

  // Mileage
  const [mileage, setMileage] = useState(mileageValue);
  const handleMileageChange = (event) => {
    setMileage(event.target.value);
  };

  return {
    name,
    handleNameChange,
    brand,
    handleBrandChange,
    year,
    handleYearChange,
    mileage,
    handleMileageChange,
  };
}

export default useSearchBar;
