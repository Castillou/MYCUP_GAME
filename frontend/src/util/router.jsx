import { createBrowserRouter } from 'react-router-dom';
import RootLayout from '../pages/Root';
import HomePage from '../pages/Home';
import ListRootLayout from '../pages/ListRoot';
import ListPage from '../pages/List';
import GamePage from '../pages/Game';
import MakePage from '../pages/Make';
import ErrorPage from '../pages/Error';
import LoginPage from '../pages/Login';
import { tokenLoader, checkAuthLoader } from './auth';
import { action as logoutAction } from '../pages/Logout';
import authAction from './actions/authAction';
import { action as uploadAction } from './actions/NewUploadAction';
import { loader as eventsLoader } from './loader/eventsLoader';

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
				element: <LoginPage />,
				action: authAction,
			},
			{
				path: 'list',
				id: 'list-root',
				element: <ListRootLayout />,
				loader: eventsLoader,
				children: [
					{
						index: true,
						element: <ListPage />,
					},
					{
						path: ':gameId',
						element: <GamePage />,
					},
				],
			},

			{
				path: 'make',
				element: <MakePage />,
				loader: checkAuthLoader,
				action: uploadAction,
			},
			{
				path: 'logout',
				action: logoutAction,
			},
		],
	},
]);

export default router;
