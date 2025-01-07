import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import { Layout } from './components/layout/layout'
import { Home } from './views/home/home'
import { ProductDetail } from './views/productDetail/productDetail'
import { Login } from './views/login/login'
import { QuienSoy } from './views/quienSoy/quienSoy';
import { Cart } from './views/cart/cart';

export const AppRouter = () => {
    return <>
        <Router>
            <Routes>
                    <Route element={<Login/>} path={'login'}/>
                    <Route element={<Layout />}>
                        <Route element={<Home />} path={`/home`} />
                        {/* <Route element={<ProductList />} path={`/products`} /> */}
                        <Route element={<ProductDetail />} path={`/products/:id`} />
                        <Route element={<QuienSoy />} path={`/quienSoy`} />
                        <Route element={<Cart />} path={`/cart`} />
                    </Route>
                    {/* REDIRECCIONAR A ALGUNA ROUTA POR DEFAULT */}
                    <Route path="*" element={<Navigate to={`/home`} replace />} />
            </Routes>
        </Router>
    </>
};