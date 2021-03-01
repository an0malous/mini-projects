import React, { useEffect, Fragment } from 'react';
import Modal from '../Modal';
import { deleteStream, fetchStream } from '../../actions/index';
import { connect } from 'react-redux';
import history from '../../history';

const StreamDelete = ({
	deleteStream,
	fetchStream,
	match,
	stream: { title },
}) => {
	useEffect(() => {
		fetchStream(match.params.id);
	}, []);

	const renderContent = () => {
		return !title
			? 'Are you sure you want to delete this stream'
			: `Are you sure you want to delete the stream: ${title}`;
	};

	const actions = (
		<Fragment>
			<button
				onClick={() => {
					deleteStream(match.params.id);
					history.push('/');
				}}
				className="ui button negative"
			>
				Delete
			</button>
			<button onClick={() => history.push('/')} className="ui button">
				Cancel
			</button>
		</Fragment>
	);
	return (
		<Modal
			title="Delete Stream"
			content={renderContent()}
			actions={actions}
			onDismiss={() => history.push('/')}
		/>
	);
};

const mapStateToProps = (state, ownProps) => {
	return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream, deleteStream })(
	StreamDelete
);
