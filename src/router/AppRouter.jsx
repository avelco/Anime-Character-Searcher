
import { Routes, Route } from 'react-router-dom';
import { SearchPage } from '../anime/pages/SearchPage';
import { RecomendationPage } from '../anime/pages/RecomendationPage';
import { Login } from '../auth/pages/Login';

export const AppRouter = () => {
  return (
    <>
        <Routes>
            <Route path="/search" element={<SearchPage />} />
            <Route path="/recomendations" element={<RecomendationPage />} />

            <Route path="/login" element={<Login />} />

            <Route path="*" element={<SearchPage />} />
        </Routes>
    </>
  )
}
