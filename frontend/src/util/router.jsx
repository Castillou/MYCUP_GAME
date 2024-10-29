import { createBrowserRouter } from 'react-router-dom';
import RootLayout from '../pages/Root';
import HomePage from '../pages/Home';
import ListPage from '../pages/List';
import GamePage from '../pages/Game';
import MakePage from '../pages/Make';
import ErrorPage from '../pages/Error';
import AuthenticationPage from '../pages/Authentication';
import authAction from './authAction';
import { action as logoutAction } from '../pages/Logout';
import { tokenLoader, checkAuthLoader } from './auth';

const router = createBrowserRouter([
	{
		path: '/',
		element: <RootLayout />,
		errorElement: <ErrorPage />,
		id: 'root',
		loader: tokenLoader,
		children: [
			{
				index: true,
				element: <HomePage />,
			},
			{
				path: 'auth',
				element: <AuthenticationPage />,
				action: authAction,
			},
			{
				path: 'list',
				element: <ListPage />,
			},
			{
				path: 'game',
				element: <GamePage />,
			},
			{
				path: 'make',
				element: <MakePage />,
				loader: checkAuthLoader,
			},
			{
				path: 'logout',
				action: logoutAction,
			},
		],
	},
]);

export default router;
