import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './containers/Layout';
import { HomePage } from './components/HomePage';
import { Register } from './components/Register';
import { Login } from './components/Login';
import { NoFound } from './components/NoFound';

function App() {
  return (
    <>
      <HashRouter>
        <Layout>
          <Routes>
            <Route path='/' element={<HomePage />} />
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
      </HashRouter>
    </>
  );
}

export default App;
