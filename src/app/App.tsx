import 'styles/global.css';
import { queryClient } from './services/index';
import { QueryClientProvider } from 'react-query';
import { Switch, Route } from 'react-router-dom';

//page list
import Home from 'pages/home';
import User from 'pages/user';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App(): JSX.Element {
	return (
		<QueryClientProvider client={queryClient}>
			<Switch>
				<Route path="/user">
					<User />
				</Route>
				<Route exact path="/">
					<Home />
				</Route>
			</Switch>
			<ToastContainer />
		</QueryClientProvider>
	);
}

export default App;
