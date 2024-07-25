import React from 'react';
import { Container, Typography, Box, Grid, Card, CardMedia, Avatar, List, ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import ReactMarkdown from 'react-markdown';

interface TeamMember {
  name: string;
  role: string;
}

interface PostDetailProps {
  title: string;
  team: TeamMember[];
  description: string;
  images: string[];
  detailedDescription: string;
}

const PostDetails: React.FC<PostDetailProps> = ({ title, team, description, images, detailedDescription }) => {
  return (
    <Container maxWidth="md">
      <Box mt={4}>
        <Typography variant="h3" component="h1" gutterBottom>
          {title}
        </Typography>
        <Typography variant="h6" component="h2" gutterBottom>
          Team
        </Typography>
        <List>
          {team.map((member, index) => (
            <ListItem key={index}>
              <ListItemAvatar>
                <Avatar>{member.name.charAt(0)}</Avatar>
              </ListItemAvatar>
              <ListItemText primary={member.name} secondary={member.role} />
            </ListItem>
          ))}
        </List>
        <Typography variant="body1" paragraph>
          {description}
        </Typography>
        <Grid container spacing={2}>
          {images.map((image, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card>
                <CardMedia
                  component="img"
                  height="140"
                  image={image}
                  alt={`image-${index}`}
                />
              </Card>
            </Grid>
          ))}
        </Grid>
        <Box mt={4}>
          <ReactMarkdown>{detailedDescription}</ReactMarkdown>
        </Box>
      </Box>
    </Container>
  );
};

export default PostDetails;