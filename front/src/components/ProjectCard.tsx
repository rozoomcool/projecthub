import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Project } from "../models/Project";

const PostCard: React.FC<Project> = (project: Project) => {
  return (
    <Card sx={{ maxWidth: 345, margin: 2 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://opengraph.githubassets.com/2aa9ef6a2a2cd7ce9614c9c29becd71896af9ee20acaec86d8eea49d869b5722/happycindy26/Ecommerce-1"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {project.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {project.description}
          </Typography>
          <Typography variant="inherit" color="text.secondary">
            {project.createdAt.toDateString()}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default PostCard;