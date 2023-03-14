import { useState } from "react";
import {
  Box,
  Card,
  CardMedia,
  Typography,
  Autocomplete,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  ListSubheader,
} from "@mui/material";

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
                  label="Manufacturer"
                  inputProps={{
                    ...params.inputProps,
                    autoComplete: "new-password", // disable autocomplete and autofill
                  }}
                />
              )}
            />
            <DatePicker
              label={"Year manufactured"}
              views={["year"]}
              value={yearManufactured}
              onChange={(newValue) => setYearManufactured(newValue)}
            />
          </Box>
        </Typography>
        <Autocomplete
          id="grouped-demo"
          disabled={!manufacturer}
          options={modelOptions.sort(
            (a, b) => -b.firstLetter.localeCompare(a.firstLetter)
          )}
          groupBy={(option) => option.firstLetter}
          getOptionLabel={(option) => option.name}
          sx={{ mt: 4, width: 300 }}
          renderInput={(params) => <TextField {...params} label="Model" />}
        />
      </Box>
    </Card>
  );
}

export default car_info;
