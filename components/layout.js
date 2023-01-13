import Navbar from "./navBar";
import { Box } from "@mui/material";
// import Footer from './footer'

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <Box sx={{ mx: 4, my: 4, display: "flex", flexDirection: "column", flex: 1 }}>
        <main>{children}</main>
      </Box>
    </>
  );
}
