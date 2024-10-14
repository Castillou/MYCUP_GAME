import GlobalStyles from './util/GlobalStyles';
import { RouterProvider } from 'react-router-dom';
import router from './util/router';

function App() {
	return (
		<>
			<GlobalStyles />
			<RouterProvider router={router} />
		</>
	);
}

export default App;
