import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import { Container } from 'react-bootstrap';

const App = () => {
	return (
		<BrowserRouter>
			<Container>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/login" component={Login} />
				</Switch>
			</Container>
		</BrowserRouter>
	);
};

export default App;
