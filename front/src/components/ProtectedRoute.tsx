import React from 'react';
import { Navigate } from 'react-router-dom';
import AuthService from '../service/AuthService';

interface ProtectedRouteProps {
  children: JSX.Element;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const token = AuthService.checkAuthStatusFast();
  if (!token) {
    return <Navigate to="/login" />;
  }
  return children;
};

export default ProtectedRoute;
