import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../components/APIS/Youtube';
import VideoList from '../components/videoList';
import VideoDetail from './videoDetail';

const KEY = 'AIzaSyDoD3mWgGwHbHjWnx4AkXT2a8bd64Govxk';
class App extends React.Component {
	state = { videos: [], selectedVideo: null };
	onTermSubmit = async (term) => {
		try {
			const response = await youtube.get('/search', {
				params: {
					q: term,
					part: 'snippet',
					type: 'video',
					maxResults: 5,
					key: KEY,
				},
			});

			this.setState({ videos: response.data.items,
            selectedVideo: response.data.items[0] });
		} catch (err) {
			console.log(err);
		}
	};
	onVideoSelect = (video) => {
		this.setState({ selectedVideo: video });
	};
	render() {
		return (
			<div className="ui container">
				<SearchBar onFormSubmit={this.onTermSubmit} />
				<div className="ui grid">
					<div className="ui row">
						<div className="eleven wide column">
							
								<VideoDetail video={this.state.selectedVideo} />
							</div>
							<div className="five wide column">
								<VideoList
									onVideoSelect={this.onVideoSelect}
									videos={this.state.videos}
								/>
							</div>
                          
						
					</div>
				</div>
			</div>
		);
	}
}

export default App;
