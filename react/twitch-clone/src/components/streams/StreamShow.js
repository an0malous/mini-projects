import React, { useEffect, useRef, Fragment } from 'react';
import { connect } from 'react-redux';
import { fetchStream } from '../../actions/index';
import flv from 'flv.js';

const StreamShow = ({ match, stream, fetchStream }) => {
	useEffect(() => {
      const { id } = match.params;
		fetchStream(match.params.id);
      //this.player = flv.createPlayer({
         //type: 'flv',
        // url: `http://localhost:8000/live/${id}`
      //})
      //this.player.attachMediaElement(videoRef.current);
      //this.player.load();
	}, []);
	const videoRef = useRef(null);
	return (
		<div>
			<video ref={videoRef} style={{width: `100%`}} controls={ true }/>
			{stream ? (
				<Fragment>
					<h1>{stream.title}</h1>
					<h5>{stream.description}</h5>
				</Fragment>
			) : (
				'...Loading'
			)}
		</div>
	);
};

const mapStateToProps = (state, ownProps) => ({
	stream: state.streams[ownProps.match.params.id],
});
export default connect(mapStateToProps, { fetchStream })(StreamShow);
