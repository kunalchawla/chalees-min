import React from 'react';
import ReactDOM from 'react-dom';
import pify from 'pify';
import 'babel-polyfill';
import * as uploader from './uploader.js';
import * as auth from './auth.js';
import ImageResponse from './image-response.js';
import TextResponse from './text-response.js';
import VideoInstruction from './video-instruction.js';
import Header from './header.js';
import '../scss/styles.scss';
import * as data from './data.js';

// const signInWithGoogle = () => {
//   const rootRef = new Firebase("https://learning-prototype.firebaseio.com");
//   rootRef.authWithOAuthPopup("google", function(error, authData) {
//     if (error) {
//       console.log("Login Failed!", error);
//     } else {
//       console.log("Authenticated successfully with payload:", authData);
//     }
//   });
// }

const Application = React.createClass({
  componentDidMount: async function () {
    data.onUpdate((data) => {
      console.log('updated data');
      this.setState({data});
    });
    await auth.whenLoggedIn();
    this.setState({loggedIn: true});
  },
  getInitialState: function () {
    return {
      data: {}
    };
  },
  render: function () {
    return (
      <div>
        <Header lock={this.lock} authProfile={this.state.authProfile} loggedIn={this.state.loggedIn} />
        <main id="main" className="content">
          <div className="pure-g">
            <div className="pure-u-1">
              <h3>Learn</h3>
              <p>Why do plants produce flowers? Watch this video to find out.</p>
              <VideoInstruction />
            </div>
            <div className="pure-u-1">
              <h3>Reflect</h3>
              <p>Take a picture and drop it here</p>
              <ImageResponse itemId="step-1" loggedIn={this.state.loggedIn} response={this.state.data['step-1']} />
            </div>
            <div className="pure-u-1 row-gap-medium">
              <TextResponse itemId="step-2" loggedIn={this.state.loggedIn} response={this.state.data['step-2']} />
            </div>
          </div>
        </main>
      </div>
    );
  }
})

ReactDOM.render(<Application />, document.getElementById('application'));
