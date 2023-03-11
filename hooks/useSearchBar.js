import { useState } from "react";

const initialState = {
  initialName: "",
  initialBrand: "",
  initialYear: "",
  initialMileage: "",
};

// Things to Imporve for this hook:
// 1. The availabe fields in this hook should be accepted in as parameters instead of being hardcoded
// 2. State Management
// 3. Filtering logic
// 4. Maybe change to fetching data from api using GraphQL + axios
// 5. Need to have a simple backend for storing the data used in here... maybe a simple headless CMS kind of thing... or even a full-fledged admin portal
// 6. GSAP animations
// 7. User Authentication
// 8. Accepts multiple images in the car list, maybe add a swiper for that
// 9. UI for display the car info in the car list.
// 10. Add some basic tags for enhancing the searching capabilities
// 11. Add comment system?
// 12. Optimize mobile layout
function useSearchBar(
  nameValue = initialState.initialName,
  brandValue = initialState.initialBrand,
  yearValue = initialState.initialYear,
  mileageValue = initialState.initialMileage
) {
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

  const resetFilter = () => {
    setName("");
    setBrand("");
    setYear("");
    setMileage("");
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
    resetFilter,
  };
}

export default useSearchBar;
