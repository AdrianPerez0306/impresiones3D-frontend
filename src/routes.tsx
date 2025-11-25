import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import { Layout } from './components/layout/layout'
import { Home } from './views/home/home'
import { ProductDetail } from './views/productDetail/productDetail'
import { QuienSoy } from './views/quienSoy/quienSoy';
import CartComponent from './views/cart/cart';

export const AppRouter = () => {
    return <>
        <Router>
            <Routes>
                <Route element={<Layout />}>
                    <Route element={<Home />} path={`/productos`} />
                    <Route element={<ProductDetail/>} path={`/productos/:id`} />
                    <Route element={<QuienSoy />} path={`/quienSoy`} />
                    <Route element={<CartComponent/>} path={`/carrito`} />
                </Route>
                {/* REDIRECCIONAR A ALGUNA ROUTA POR DEFAULT */}
                <Route path="*" element={<Navigate to={`/productos`} replace />} />
            </Routes>
        </Router>
    </>
};