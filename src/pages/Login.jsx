import React, { useState } from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';

const Login = props => {
	const [username, setUsername] = useState('');

    const login = e => {
        e.preventDefault();
        localStorage.setItem('username', username);
        props.history.push('/');
    }

	return (
		<Row className="justify-content-center align-items-center" style={{ height: '100vh' }}>
			<Col md={6}>
				<Form className="p-3 border rounded shadow text-center">
					<Form.Group controlId="username">
						<Form.Label>Username</Form.Label>
						<Form.Control value={username} onChange={e => setUsername(e.target.value)} placeholder="Enter a username ... " type="text" />
					</Form.Group>
					<Button onClick={login} className="shadow-sm w-75 mx-auto" block>
						Login
					</Button>
				</Form>
			</Col>
		</Row>
	);
};

export default Login;
