import { createBrowserRouter } from 'react-router-dom';
import RootLayout from '../pages/Root';
import HomePage from '../pages/Home';
import LostRootLayout from '../pages/ListRoot';
import ListPage from '../pages/List';
import GamePage from '../pages/Game';
import MakePage from '../pages/Make';
import ErrorPage from '../pages/Error';
import AuthenticationPage from '../pages/Authentication';
import authAction from './authAction';
import { action as logoutAction } from '../pages/Logout';
import { tokenLoader, checkAuthLoader } from './auth';
import { action as uploadAction } from './NewUploadAction';
import { loader as eventsLoader } from './eventsLoader';

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
				id: 'list-root',
				element: <LostRootLayout />,
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
