import React, { useState, useEffect } from 'react';
import { Container, Typography, Box, Avatar, TextField, Button, Grid, Card, CardContent, CardMedia, List, ListItem, ListItemAvatar, ListItemText, Paper, IconButton, CardActions, ButtonGroup } from '@mui/material';
import { Email, LinkedIn, LocationOn, School, Work } from '@mui/icons-material';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';
import $api from '../http/constatns';
import Header from '../components/Header';
import UserProfileCard from '../components/UserProfileCard';
import UserInfoCard from '../components/UserInfoCard';
import UserAboutInfo from '../components/UserAboutInfo';

interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
}

interface UserProfileProps {
    userId: number;
}

const UserProfile: React.FC<UserProfileProps> = ({ userId }) => {
    const [user, setUser] = useState<any>(null);
    const [projects, setProjects] = useState<Project[]>([]);
    const [editMode, setEditMode] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        bio: '',
    });

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const userResponse = await $api.get(`http://localhost:3000/api/v1/users/${userId}`);
                const projectsResponse = await $api.get(`http://localhost:3000/api/v1/projects`);
                setUser(userResponse.data);
                setProjects(projectsResponse.data);
                setFormData({
                    name: userResponse.data.name,
                    email: userResponse.data.email,
                    bio: userResponse.data.bio,
                });
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchUserData();
    }, [userId]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSave = async () => {
        try {
            await axios.put(`http://localhost:3000/api/users/${userId}`, formData);
            setEditMode(false);
            setUser({ ...user, ...formData });
        } catch (error) {
            console.error('Error updating user data:', error);
        }
    };

    if (!user) return <div>Loading...</div>;

    return (
        <>
            <Header></Header>
            <Container maxWidth="lg" sx={{ mt: 2 }}>
                <Grid container spacing={2}>
                    <Grid item md={8} xs={12}>
                        <UserProfileCard username={'khamzeto'} profession={'CEO Hamster'} avatarUrl={'https://cdn.forbes.ru/forbes-static/new/2022/11/Avatar-Legenda-ob-Aange-636e2fcea479a.jpg'} />
                    </Grid>
                    <Grid item md={4} xs={12}>
                        <UserInfoCard></UserInfoCard>
                    </Grid>
                </Grid>
                <Box sx={{ mt: 2 }}>
                    <UserAboutInfo />

                </Box>
            </Container>

            <Container sx={{ mt: 2, justifyContent: 'center'}}>
            <ButtonGroup variant="outlined" aria-label="Basic button group">
                <Button>Проекты</Button>
                <Button>Команды</Button>
                <Button>Three</Button>
            </ButtonGroup>
            </Container>
        </>
    );
};

export default UserProfile;
