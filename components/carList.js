import {
  Box,
  Card,
  CardMedia,
  Container,
  Stack,
  Typography,
} from "@mui/material";

function CarList({ allCars }) {
  return (
    <Box my={2}>
      <Typography variant="h6">CarList:</Typography>
      <Stack gap={3}>
        {allCars.map((car) => (
          <Card sx={{ display: "flex", flexDirection: "row" }} key={car.id}>
            <Box>
              <CardMedia
                component="img"
                height="240"
                image="/static/images/buy.jpg"
                alt="car-image"
              />
            </Box>
            <Stack direction="row" justifyContent="space-evenly" flex="1" padding={3}>
              <Typography variant="p" flex="1">
                Name: {car.name}
              </Typography>
              <Typography variant="p" flex="1">
                Manufactured Year: {car.year}
              </Typography>
              <Typography variant="p" flex="1">
                Mileage: {car.mileage}
              </Typography>
              <Typography variant="p" flex="1">
                Price: {car.price}
              </Typography>
            </Stack>
          </Card>
        ))}
      </Stack>
    </Box>
  );
}

export default CarList;
