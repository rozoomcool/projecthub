import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import AuthService from '../service/AuthService';
import Header from '../components/Header';

const LoginScreen: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        try {
            await AuthService.login(username, password);
            navigate('/');
        } catch (error) {
            console.error('Login failed:', error);
        }
    };

    return (
        <>
            <Header></Header>
            <Container maxWidth="sm">
                <Box mt={8} textAlign={'center'}>
                    <Typography variant="h4" gutterBottom>
                        Войти
                    </Typography>
                    <form onSubmit={handleSubmit}>
                        <TextField
                            fullWidth
                            label="Email"
                            margin="normal"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <TextField
                            fullWidth
                            label="Password"
                            type="password"
                            margin="normal"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <Button type="submit" variant="contained" color="primary" fullWidth>
                            Войти
                        </Button>
                    </form>
                    <Button sx={{ m: 2 }} component={Link} to={'/register'}>Еще нет аккаунта? Зарегистрироваться</Button>
                </Box>
            </Container>
        </>
    );
};

export default LoginScreen;
