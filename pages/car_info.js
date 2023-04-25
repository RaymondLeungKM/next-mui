import { useState } from "react";
import {
  Box,
  Card,
  CardMedia,
  Typography,
  Autocomplete,
  TextField,
  FormControl,
  FormLabel,
  Button,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import DeleteIcon from '@mui/icons-material/Delete';

import { DatePicker } from "@mui/x-date-pickers/DatePicker";

function car_info() {
  const [manufacturer, setManufacturer] = useState(null);
  const [yearManufactured, setYearManufactured] = useState(null);
  const [model, setModel] = useState("");

  const manufacturers = [
    { code: "AD", name: "Audi", logo: "audi-logo.png" },
    { code: "BM", name: "BMW", logo: "bmw-logo.png" },
    { code: "MB", name: "Mercedez Benz", logo: "benz-logo.png" },
    { code: "BT", name: "Bentley", logo: "bentley-logo.png" },
  ];

  const manufacturerOptions = manufacturers.map((option) => {
    const firstLetter = option.name[0].toUpperCase();
    return {
      firstLetter: /[0-9]/.test(firstLetter) ? "0-9" : firstLetter,
      ...option,
    };
  });

  const yearList = [
    { name: "2015", value: "2015" },
    { name: "2016", value: "2016" },
  ];

  const modelsMap = [
    { category: "Sedan", manufacturer: "AD", name: "A1" },
    { category: "Sedan", manufacturer: "AD", name: "A2" },
    { category: "Sedan", manufacturer: "AD", name: "A3" },
    { category: "Sedan", manufacturer: "AD", name: "A4" },
    { category: "Sedan", manufacturer: "AD", name: "A5" },
    { category: "Sedan", manufacturer: "AD", name: "A6" },
    { category: "SUV", manufacturer: "AD", name: "Q1" },
    { category: "SUV", manufacturer: "AD", name: "Q2" },
    { category: "SUV", manufacturer: "AD", name: "Q3" },
    { category: "SUV", manufacturer: "AD", name: "Q5" },
    { category: "SUV", manufacturer: "AD", name: "Q7" },
    { category: "Sedan", manufacturer: "BM", name: "Series 3" },
    { category: "Sedan", manufacturer: "BM", name: "Series 5" },
    { category: "Sedan", manufacturer: "BM", name: "Series 7" },
    { category: "SUV", manufacturer: "BM", name: "X1" },
    { category: "SUV", manufacturer: "BM", name: "X3" },
    { category: "SUV", manufacturer: "BM", name: "X5" },
    { category: "Sedan", manufacturer: "BM", name: "C Class" },
    { category: "Sedan", manufacturer: "MB", name: "E Class" },
    { category: "Sedan", manufacturer: "MB", name: "S Class" },
    { category: "SUV", manufacturer: "MB", name: "GLA" },
    { category: "SUV", manufacturer: "MB", name: "GLB" },
    { category: "SUV", manufacturer: "MB", name: "GLC" },
    { category: "SUV", manufacturer: "MB", name: "GLE" },
    { category: "SUV", manufacturer: "MB", name: "GLS" },
    { category: "SUV", manufacturer: "MB", name: "GLG" },
    { category: "SUV", manufacturer: "MB", name: "EQC" },
  ];

  const modelOptions =
    (manufacturer &&
      modelsMap
        .filter((model) => model.manufacturer == manufacturer.code)
        .map((option) => {
          const firstLetter = option.name[0].toUpperCase();
          return {
            firstLetter: /[0-9]/.test(firstLetter) ? "0-9" : firstLetter,
            ...option,
          };
        })) ||
    [];

  return (
    <Card sx={{ display: "flex", flexGrow: 1 }}>
      <CardMedia
        component="img"
        sx={{ width: "30%", objectPosition: "50%" }}
        image="/static/images/car_info_bg.jpg"
        alt="Live from space album cover"
      />
      <Box sx={{ display: "flex", flexGrow: 1, flexDirection: "column", p: 3 }}>
        <Typography variant="h5">
          Fill in the information of your car below:
          <Box sx={{ marginTop: 3, display: "flex", gap: 8 }}>
            <FormControl required={true}>
              <FormLabel>Manufacturer</FormLabel>
              <Autocomplete
                id="manufacturer-select"
                sx={{ width: 300 }}
                options={manufacturerOptions.sort(
                  (a, b) => -b.firstLetter.localeCompare(a.firstLetter)
                )}
                groupBy={(option) => option.firstLetter}
                autoHighlight
                getOptionLabel={(option) => option.name}
                value={manufacturer}
                isOptionEqualToValue={(option, value) => {
                  return option.code === value.code;
                }}
                onChange={(event, newValue) => {
                  setManufacturer(newValue);
                }}
                renderOption={(props, option) => (
                  <Box
                    component="li"
                    sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                    {...props}
                  >
                    {option.logo && (
                      <img
                        loading="lazy"
                        width="20"
                        src={`/static/images/${option.logo}`}
                        alt=""
                      />
                    )}
                    {option.name}
                  </Box>
                )}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    inputProps={{
                      ...params.inputProps,
                    }}
                    placeholder="Select a manufacturer"
                  />
                )}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Year manufactured</FormLabel>
              <DatePicker
                id="year-manufactured"
                views={["year"]}
                value={yearManufactured}
                onChange={(newValue) => setYearManufactured(newValue)}
              />
            </FormControl>
          </Box>
        </Typography>
        <Box sx={{ marginTop: 3, display: "flex", gap: 8 }}>
          <FormControl>
            <FormLabel>Model</FormLabel>
            <Autocomplete
              id="model-select"
              disabled={!manufacturer}
              options={modelOptions.sort(
                (a, b) => -b.firstLetter.localeCompare(a.firstLetter)
              )}
              groupBy={(option) => option.firstLetter}
              getOptionLabel={(option) => option.name}
              sx={{ width: 300 }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  placeholder={
                    !manufacturer
                      ? "Please select a manufacturer!!"
                      : "Select a model"
                  }
                />
              )}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Selling Price</FormLabel>
            <TextField
              id="selling-price"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
              placeholder="in USD"
            />
          </FormControl>
          <FormControl>
            <FormLabel>Mileage</FormLabel>
            <TextField
              id="mileage"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
              placeholder="Mileage"
            />
          </FormControl>
        </Box>
        <Box>
          {/* Some sort of text area or multiselect box for some additional features of the car */}
          {/* Actually I really think the user authenication part is crucial... I really need to build 1 myself to get the hands on experience for that */}
          {/* Java and nodejs, lets do it in both languages... I would need a DB for that, a local 3306 mysql db will do */}
        </Box>
        <Box sx={{ marginTop: 3, display: "flex", gap: 8 }}>
          <Button variant="outlined" startIcon={<DeleteIcon />}>
            Reset
          </Button>
          <Button variant="contained" endIcon={<SendIcon />}>
            Submit
          </Button>
        </Box>
      </Box>
    </Card>
  );
}

export default car_info;
