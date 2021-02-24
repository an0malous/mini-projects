import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions/index'

class GoogleAuth extends React.Component {
	

	componentDidMount() {
		window.gapi.load('client:auth2', async () => {
         try{
			window.gapi.client.init({
				clientId:
					'298422459676-ir9ij710uqfnsrl1meaeoqlpag6d0ggu.apps.googleusercontent.com',
				scope: 'email',
			});
			this.auth = await window.gapi.auth2.getAuthInstance();
			this.onAuthChange(this.auth.isSignedIn.get())
			this.auth.isSignedIn.listen(this.onAuthChange);
      } catch (err) {
         console.log(err)

      }
		});
	}

	onAuthChange = (isSignedIn) => {
		if(isSignedIn){
			this.props.signIn(this.auth.currentUser.get().getId());
		} else{
			this.props.signOut();
		}
	};

	onSignInClick = () => {
		this.auth.signIn();
	};

	onSignOutClick = () => {
		this.auth.signOut();
	};

	renderAuthButton() {
		if (this.props.isSignedIn === null) {
			return null;
		} else if (this.props.isSignedIn) {
			return (
				<button
					onClick={this.onSignOutClick}
					className="ui red google button"
				>
					<i className="google icon" />
					Sign Out
				</button>
			);
		} else {
			return (
				<button
					onClick={this.onSignInClick}
					className="ui red google button"
				>
					<i className="google icon" />
					Sign In with Google
				</button>
			);
		}
	}

	render() {
		return <div>{this.renderAuthButton()}</div>;
	}
}

const mapStateToProps = state =>({
	isSignedIn: state.auth.isSignedIn
});

const dispatchStateToProps = dispatch =>({
	signIn: ()=>dispatch(signIn()),
	signOut: ()=>dispatch(signOut())
})

export default connect(mapStateToProps, dispatchStateToProps)(GoogleAuth);
