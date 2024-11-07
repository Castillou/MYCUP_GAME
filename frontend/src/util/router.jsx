import { createBrowserRouter } from 'react-router-dom';
import RootLayout from '../pages/Root';
import HomePage from '../pages/Home';
import SubRootLayout from '../pages/SubRoot';
import ListPage from '../pages/List';
import GamePage from '../pages/Game';
import ErrorPage from '../pages/Error';
import LoginPage from '../pages/Login';
import MakePage from '../pages/Make';
import ProfilePage from '../pages/Profile';
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
				element: <SubRootLayout />,
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
				path: ':username',
				element: <SubRootLayout />,
				loader: checkAuthLoader,
				children: [
					{
						path: 'make',
						element: <MakePage />,
						action: uploadAction,
					},
					{
						path: 'profile',
						element: <ProfilePage />,
						loader: eventsLoader,
					},
				],
			},
			{
				path: 'logout',
				action: logoutAction,
			},
		],
	},
]);

export default router;
