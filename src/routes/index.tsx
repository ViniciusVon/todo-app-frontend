import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { Home } from 'pages';

export const RoutesConst = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<Navigate replace to="/" />} />
            </Routes>
        </BrowserRouter>
    );
}
