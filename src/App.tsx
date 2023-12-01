import { useContext } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthContext } from './contexts/AuthContext.tsx';
import GlobalStyle from './globalStyles/globalStyles.ts';
import Login from './pages/Login/Login.tsx';
import Home from './pages/Home/index.tsx';
import Transactions from './pages/Transactions/index.tsx';
import ProductManagement from './pages/ProductManagement/index.tsx';
import Perfil from './pages/Perfil/index.tsx';

const App = () => {
  const authCtx = useContext(AuthContext);
  const isAuth = Boolean(authCtx?.auth.token);
  const isLoading = authCtx?.loading;

  if(isLoading) {
    return (
      <h1>Carregando suas informações...</h1>
    )
  }

  return (
    <>
      <BrowserRouter>
        <GlobalStyle/>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/home" element={isAuth ? <Home/> : <Navigate to="/"/>}/>
          <Route path="/transactions" element={isAuth ? <Transactions/> : <Navigate to="/"/>}/>
          <Route path="/addproduct" element={isAuth ? <ProductManagement/> : <Navigate to="/"/>}/>
          <Route path="/perfil" element={isAuth ? <Perfil/> : <Navigate to="/"/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App