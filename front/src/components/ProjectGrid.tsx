import { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import Grid from "@mui/material/Grid";
import { Project, ProjectStatus } from "../models/Project";
import PostCard from "./ProjectCard";
import ProjectService from "../http/ProjectService";

const PostGrid: React.FC = () => {
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
  
    useEffect(() => {
      const fetchPosts = async () => {
        try {
          const projects = await ProjectService.getProjects();
          setProjects(projects ?? []);
          setLoading(false);
        } catch (error) {
          console.error('Error fetching posts:', error);
          setLoading(false);
        }
      };
  
      fetchPosts();
    }, []);
  
    return (
      <Container maxWidth="lg">
        {loading ? (
          <Box display="flex" justifyContent="center" alignItems="center" minHeight="800vh">
            <CircularProgress />
          </Box>
        ) : (

            <>
            {/* <PostDetails
                title={"Title"}
                team={[{name: "kdsfjkdsl", role: "fdskjfk"}]}
                description={"dsjkfljdskljfkjdsklfjklsdjlfkjdskjfsd"}
                images={["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjajxYZkB612LPP8JjV9daxIhxlntbjp7FUg&s"]}
                detailedDescription={"# kdsjfkdsjkfj"}
                ></PostDetails> */}
          <Grid container spacing={3} justifyContent="left">
            {projects.map((project) => (
                <Grid item key={project.id} xs={12} sm={6} md={4} lg={4}>
                <PostCard name={project.name} description={project.description} id={0} status={ProjectStatus.NEW} ownerId={0} createdAt={new Date()}  />
              </Grid>
            ))}
          </Grid>
            </>
        )}
      </Container>
    );
  };
  
  export default PostGrid;