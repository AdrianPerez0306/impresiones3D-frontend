import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import { Layout } from './components/layout/layout'
import { Home } from './views/home/home'
import { ProductDetail } from './views/productDetail/productDetail'
import { Login } from './views/login/login'
import { Cart } from './views/cart/cart';
import { QuienSoy } from './views/quienSoy/quienSoy';

export const AppRouter = () => {
    return <>
        <Router>
            <Routes>
                    <Route element={<Login/>} path={'login'}/>
                    <Route element={<Layout />}>
                        <Route element={<Home />} path={`/productos`} />
                        {/* <Route element={<ProductList />} path={`/products`} /> */}
                        <Route element={<ProductDetail />} path={`/productos/:id`} />
                        <Route element={<QuienSoy />} path={`/quienSoy`} />
                        <Route element={<Cart />} path={`/carrito`}/>
                    </Route>
                    {/* REDIRECCIONAR A ALGUNA ROUTA POR DEFAULT */}
                    <Route path="*" element={<Navigate to={`/productos`} replace />} />
            </Routes>
        </Router>
    </>
};