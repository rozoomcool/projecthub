import Typography from "@mui/material/Typography";
import { FC } from "react";
import Header from "../components/Header";
 
const AboutScreen: FC = () => {
    return ( 
        <>
            <Header></Header>
            <Typography variant="h3">About Us</Typography>
        </>
     );
}
 
export default AboutScreen;