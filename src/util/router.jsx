import { createBrowserRouter } from 'react-router-dom';
import Layout from '../compnents/Layout';
import Home from '../routes/Home';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				path: '',
				element: <Home />,
			},
		],
	},
]);

export default router;
