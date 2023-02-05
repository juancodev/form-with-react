import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { Layout } from './containers/Layout';
import { HomePage } from './components/HomePage';
import { Register } from './components/Register';
import { Login } from './components/Login';
import { NoFound } from './components/NoFound';
import { ProtectedRoute } from './components/ProtectedRoute';

function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <Layout>
            <Routes>
              <Route path='/' element={
                <ProtectedRoute>
                  <HomePage />
                </ProtectedRoute>
              } />
              <Route
                path='/login'
                element={<Login />}
              />
              <Route
                path='/signup'
                element={<Register />}
              />
              <Route path='*' element={<NoFound />} />
            </Routes>
          </Layout>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
