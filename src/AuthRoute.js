import React from 'react';
import { Navigate } from 'react-router-dom';

// 쿠키에서 값을 가져오는 함수
const getToken = () => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; token=`);
  if (parts.length === 2) {
    return parts.pop().split(';').shift();
  }
};

export default function AuthRoute({ component: Component }) {
  return getToken() ? Component : <Navigate to='/auth/login' />;
}
