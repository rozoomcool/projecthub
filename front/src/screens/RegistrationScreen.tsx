import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box, Alert } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import AuthService from '../service/AuthService';
import Header from '../components/Header';

const RegistrationScreen: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        if (password !== confirmPassword) {
            setError("Passwords do not match");
            return;
        }

        try {
            const regResult = await AuthService.register(username, password);
            if (regResult) {
                navigate('/login');
            } else {
                setError('Registration failed: ');
            }
        } catch (error) {
            setError('Registration failed: ');
        }
    };

    return (
        <>
            <Header></Header>
            <Container maxWidth="sm">
                <Box mt={8} textAlign={'center'}>
                    <Typography variant="h4" gutterBottom>
                        Регистрация
                    </Typography>
                    {error && <Alert severity="error">{error}</Alert>}
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
                        <TextField
                            fullWidth
                            label="Confirm Password"
                            type="password"
                            margin="normal"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                        <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
                            Зарегистрироваться
                        </Button>
                    </form>
                    <Button sx={{ m: 2 }} component={Link} to={'/login'}>Уже есть аккаунт? Войти</Button>
                </Box>
            </Container>
        </>
    );
};

export default RegistrationScreen;
