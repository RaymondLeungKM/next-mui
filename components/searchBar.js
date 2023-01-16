import {
  Box,
  Typography,
  Stack,
  Paper,
  InputBase,
  IconButton,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

function SearchBar({ name, handleNameChange, brand, handleBrandChange, year, handleYearChange, mileage, handleMileageChange }) {
  const brandList = [
    { name: "Audi", value: "Audi" },
    { name: "BMW", value: "BMW" },
  ];
  const yearList = [
    { name: "2015", value: "2015" },
    { name: "2016", value: "2016" },
  ];
  const mileageList = [
    { name: "100", value: "100" },
    { name: "200", value: "200" },
  ];

  return (
    <Box my={2}>
      <Paper sx={{ px: 4, py: 2 }}>
        <Typography variant="h6">Search Bar</Typography>
        <FormControl
          sx={{ display: "flex", flex: 1, my: 2, borderBottom: "1px groove" }}
        >
          <Box flex="1" display="flex" px={2} py={1}>
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Enter car model here..."
              inputProps={{ "aria-label": "search google maps" }}
              value={name}
              onChange={handleNameChange}
            />
            <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
              <SearchIcon />
            </IconButton>
          </Box>
        </FormControl>
        <Stack direction="row" justifyContent="space-evenly">
          <Box flex="1">
            <FormControl sx={{ m: 1, width: "80%" }}>
              <InputLabel id="brand-simple-select-autowidth-label">
                Brand
              </InputLabel>
              <Select
                labelId="brand-simple-select-autowidth-label"
                id="brand-simple-select-autowidth"
                value={brand}
                onChange={handleBrandChange}
                autoWidth
                label="Brand"
              >
                {brandList.map((brand, index) => (
                  <MenuItem key={index} value={brand.value}>
                    {brand.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
          <Box flex="1">
            <FormControl sx={{ m: 1, width: "80%" }}>
              <InputLabel id="year-simple-select-autowidth-label">
                Year
              </InputLabel>
              <Select
                labelId="year-simple-select-autowidth-label"
                id="year-simple-select-autowidth"
                value={year}
                onChange={handleYearChange}
                autoWidth
                label="Year"
              >
                {yearList.map((year, index) => (
                  <MenuItem key={index} value={year.value}>
                    {year.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
          <Box flex="1">
            <FormControl sx={{ m: 1, width: "80%" }}>
              <InputLabel id="mileage-simple-select-autowidth-label">
                Mileage
              </InputLabel>
              <Select
                labelId="mileage-simple-select-autowidth-label"
                id="mileage-simple-select-autowidth"
                value={mileage}
                onChange={handleMileageChange}
                autoWidth
                label="Mileage"
              >
                {mileageList.map((mileage, index) => (
                  <MenuItem key={index} value={mileage.value}>
                    {mileage.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
        </Stack>
      </Paper>
    </Box>
  );
}

export default SearchBar;