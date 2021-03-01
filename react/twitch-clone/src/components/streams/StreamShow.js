import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchStream } from '../../actions';

const StreamShow = ({ match, stream, fetchStream }) => {
	useEffect(() => {
		fetchStream(match.params.id);
	}, []);

	return <div>{stream ? stream.title : '...Loading'}</div>;
};

const mapStateToProps = (state, ownProps) => ({
	stream: state.streams[ownProps.match.params.id],
});
export default connect(mapStateToProps, { fetchStream })(StreamShow);
