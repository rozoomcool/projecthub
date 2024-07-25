import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { FC } from "react";

interface UserProfileCardProps {
    username: string;
    profession: string;
    avatarUrl: string;
}

const UserProfileCard: FC<UserProfileCardProps> = (props: UserProfileCardProps) => {
    return (
        <>
            <Card elevation={0} sx={{ height: '100%' }}>
                <CardMedia
                    component="img"
                    sx={{ height: 140 }}
                    image="https://imgv3.fotor.com/images/share/Free-blue-gradient-pattern-background-from-Fotor.jpg"
                />
                <CardContent>
                    <Stack direction='row' alignItems='center'>

                        <Avatar sx={{ width: 84, height: 84 }} src={props.avatarUrl}></Avatar>
                        <Box sx={{ ml: 3 }}>
                            <Typography gutterBottom variant="h5" component="div">{props.username}</Typography>
                            <Typography variant="body2" color="text.secondary">{props.profession}</Typography>
                        </Box>
                    </Stack>
                    <CardActions sx={{ mt: 3 }}>
                        <Button>Подписаться</Button>
                        <Button>Написать</Button>
                    </CardActions>
                </CardContent>
            </Card>
        </>
    );
}

export default UserProfileCard;