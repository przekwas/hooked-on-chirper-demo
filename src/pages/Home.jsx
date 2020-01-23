import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import ChirpForm from '../components/forms/ChirpForm';
import ChirpCard from '../components/cards/ChirpCard';

const Home = props => {
	const [username, setUsername] = useState('');
	const [chirps, setChirps] = useState([]);

	useEffect(() => {
		let username = localStorage.getItem('username');
		if (!username) {
			props.history.push('/login');
		} else {
			let data = localStorage.getItem('chirps');
			let oldChirps = JSON.parse(data);
			if(oldChirps !== null) {
				setChirps(oldChirps);
			}
			setUsername(username);
		}
	}, []);

	const postChirps = message => {
		let newChirps = [{ username, message, created_at: Date.now() }, ...chirps]
		localStorage.setItem('chirps', JSON.stringify(newChirps));
		setChirps(newChirps);
	}

	return (
		<Row className="justify-content-center my-3">
			<Col md={5}>
				<ChirpForm postChirps={postChirps} />
			</Col>
			<Col md={7}>
				{chirps.map((chirp, i) => (
					<ChirpCard key={`chirp-${i}`} chirp={chirp} />
				))}
			</Col>
		</Row>
	);
};

export default Home;
