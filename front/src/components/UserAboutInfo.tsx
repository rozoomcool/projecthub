import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Chip from "@mui/material/Chip";
import Collapse from "@mui/material/Collapse";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { FC } from "react";

interface UserAboutInfoProps {

}

const UserAboutInfo: FC<UserAboutInfoProps> = () => {
    return (
        <>
            <Card elevation={0}>
                <CardHeader
                    title="Обо мне"
                />
                <Divider></Divider>
                <CardContent>
                    <Typography variant="body1">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad ipsa pariatur deleniti. Quibusdam alias, quo est quisquam tenetur dolore inventore officia! Aliquid laudantium qui tempore at ea ducimus unde sapiente!
                    </Typography>
                    <Stack sx={{mt: 2}} direction="row" spacing={1}>
                        <Chip label="Программирование" size="small" />
                        <Chip label="REST" size="small"/>
                        <Chip label="Чижик высокого полета" size="small"/>
                    </Stack>
                </CardContent>
            </Card>
        </>
    );
}

export default UserAboutInfo;