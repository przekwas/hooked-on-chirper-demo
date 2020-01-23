import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';

const ChirpForm = props => {
	const [message, setMessage] = useState('');

	const handleClick = e => {
		e.preventDefault();
		props.postChirps(message);
		setMessage('');
	};

	return (
		<Form className="p-3 border rounded shadow text-center">
			<Form.Group controlId="Message">
				<Form.Label>Message</Form.Label>
				<Form.Control
					value={message}
					onChange={e => setMessage(e.target.value)}
					rows={5}
					placeholder="What're your thoughts?"
					as="textarea"
				/>
			</Form.Group>
			<Button onClick={handleClick} className="shadow-sm w-75 mx-auto" block>
				Chirp It!
			</Button>
			<Form.Text className="text-muted">
				Pretend{' '}
				<Link to="/login" onClick={() => localStorage.removeItem('username')}>
					Logout Link
				</Link>
			</Form.Text>
		</Form>
	);
};

export default ChirpForm;
