import { BusinessCenter, Email, LocationOn, School, Telegram } from "@mui/icons-material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import { FC } from "react";

interface UserInfoCardProps {

}

const UserInfoCard: FC<UserInfoCardProps> = () => {
    return (
        <>
            <Card elevation={0} sx={{ height: '100%' }}>
                <CardContent>
                    <Stack direction="column" gap={2}>

                        <Stack alignItems="center" direction="row" gap={1}>
                            <BusinessCenter />
                            <Typography variant="body1" color="text.secondary">Программист</Typography>
                        </Stack>
                        <Stack alignItems="center" direction="row" gap={1}>
                            <LocationOn />
                            <Typography variant="body1" color="text.secondary">Москва</Typography>
                        </Stack>
                        <Stack alignItems="center" direction="row" gap={1}>
                            <School />
                            <Typography variant="body1" color="text.secondary">ЧГУ</Typography>
                        </Stack>
                        <Stack alignItems="center" direction="row" gap={1}>
                            <Email />
                            <Typography variant="body1" color="text.secondary">rosul.um@gmail.com</Typography>
                        </Stack>
                        <Stack alignItems="center" direction="row" gap={1}>
                            <Telegram />
                            <Typography variant="body1" color="text.secondary">@milkynigga</Typography>
                        </Stack>
                    </Stack>
                </CardContent>
            </Card>
        </>
    );
}

export default UserInfoCard;