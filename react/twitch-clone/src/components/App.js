import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import StreamList from './streams/StreamList';
import StreamCreate from './streams/StreamCreate';
import StreamEdit from './streams/StreamEdit';
import StreamDelete from './streams/StreamDelete';
import StreamShow from './streams/StreamShow';
import Header from './Header.js';

const App = () => {
	return (
		<div className="ui container">
			<BrowserRouter>
				<div>
					<Header />
					<Route path="/" exact render={()=><StreamList />} />
					<Route path="/streams/new" exact render={()=><StreamCreate  />} />
					<Route path="/streams/edit" exact component={StreamEdit} />
					<Route
						path="/streams/delete"
						exact
						component={StreamDelete}
					/>
					<Route path="/streams/show" exact component={StreamShow} />
				</div>
			</BrowserRouter>
		</div>
		
	);
};

export default App;