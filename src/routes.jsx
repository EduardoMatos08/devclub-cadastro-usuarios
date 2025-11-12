import { createBrowserRouter } from 'react-router-dom';

// Importações das páginas:
import Home from './pages/Home';
import UsersList from './pages/UsersList';

// Rotas para acessar diversas páginas
const router = createBrowserRouter([

    // Página inicial:
    {
        path: '/',
        element: <Home />
    },
    // Lista de Usuários:
    {
        path: '/lista-de-usuarios',
        element: <UsersList />
    }

]);

export default router;