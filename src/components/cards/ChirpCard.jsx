import React from 'react';
import ReactMarkdown from 'react-markdown';
import moment from 'moment';
import { Card } from 'react-bootstrap';

const ChirpCard = props => {
	return (
		<Card className="mb-2 shadow-sm">
			<Card.Body>
				<Card.Title>{props.chirp.username} chirped:</Card.Title>
				<Card.Text as="div">
					<ReactMarkdown source={props.chirp.message} />
				</Card.Text>
				<blockquote className="blockquote mb-0">
					<footer className="blockquote-footer">
						chirped at <cite title="Source Title">{moment(props.chirp.created_at).format('MMM Do YYYY')}</cite>
					</footer>
				</blockquote>
			</Card.Body>
		</Card>
	);
};

export default ChirpCard;
