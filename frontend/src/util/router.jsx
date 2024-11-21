import { createBrowserRouter } from 'react-router-dom';
import RootLayout from '../pages/Root';
import HomePage from '../pages/Home';
import SubRootLayout from '../pages/SubRoot';
import ListPage from '../pages/List';
import GamePage from '../pages/Game';
import ErrorPage from '../UI/Error';
import LoginPage from '../pages/Login';
import MakePage from '../pages/Make';
import EditPage from '../pages/Edit';
import ProfilePage from '../pages/Profile';
import { tokenLoader } from './loader/tokenLoader';
import { checkAuthLoader } from './loader/checkAuthLoader';
import { action as logoutAction } from '../pages/Logout';
import authAction from './actions/authAction';
import { action as uploadAction } from './actions/NewUploadAction';
import { action as editAction } from './actions/editAction';

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
				id: 'user-root',
				element: <SubRootLayout />,
				loader: checkAuthLoader,
				children: [
					{
						path: 'make',
						element: <MakePage />,
						action: uploadAction,
					},
					{
						path: 'edit/:gameId',
						element: <EditPage />,
						action: editAction,
					},
					{
						path: 'profile',
						element: <ProfilePage />,
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
