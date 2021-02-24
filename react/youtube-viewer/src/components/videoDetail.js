import React from 'react';

const VideoDetail = ({ video }) => {
	const videoSrc=`https://www.youtube.com/embed/${video ? video.id.videoId : null}`
   return (<div>
   <div className="ui embed">
      <iframe src={video ? videoSrc: null} />
   </div>
		<div className="ui segment">
			<h4 className="ui header">
				{video ? video.snippet.title : null}</h4>
            <p>{video ? video.snippet.description : null}</p>
			
		</div>
	</div>
);
   }

export default VideoDetail;
