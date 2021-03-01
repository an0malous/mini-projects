import React, { useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import { fetchStream, editStream } from '../../actions/index';
import StreamForm from './StreamForm';

const StreamEdit = ({
	match,
	fetchStream, editStream,
	stream: { title, description },
}) => {
	useEffect(() => {
		fetchStream(match.params.id);
	}, []);

	const onSubmit = (formValues) => {
		editStream(match.params.id, formValues);
	};

	return (
		<div>
			{title ? (
				<Fragment>
					<h3>Edit a Stream</h3>
					<StreamForm
						initialValues={{ title, description }}
						onSubmit={onSubmit}
					/>
				</Fragment>
			) : (
				'..loading'
			)}
		</div>
	);
};
const mapStateToProps = (state, ownProps) => {
	return { stream: state.streams[ownProps.match.params.id] };
};
export default connect(mapStateToProps, { fetchStream, editStream })(
	StreamEdit
);
