import Modal from 'react-modal';
import logo from '../images/chalees-min-logo-icon.svg';
import * as auth from './auth.js';

const LoginGate = React.createClass({
  getInitialState: function () {
    return {
      isModalOpen: false
    }
  },
  onLoginGateClick: function () {
    if (!this.state.isSignedIn) {
      this.setState({isModalOpen: true});
    }
  },
  closeModal: function () {
    this.setState({isModalOpen: false});
  },
  componentDidMount: async function () {
    // Only enable the buttons if the user is logged in
    await auth.authorize();
    this.setState({isSignedIn: true});
  },
  render: function() {
    // TODO: change close modal X button to glyph
    return (
      <div>
        <div style={{position: 'relative'}}>
          {!this.state.isSignedIn ? <div className="login-gate-overlay" onClick={this.onLoginGateClick}>
                                      <div style={{position: 'absolute', top: '50%', left: '50%', transform: 'translateX(-50%) translateY(-50%)'}}>Please Sign In</div>
                                    </div> : null}
          {this.props.children}
        </div>
        <Modal isOpen={this.state.isModalOpen} onRequestClose={this.closeModal} className="modal" overlayClassName="modal-overlay" contentLabel="login-gate">
          <div style={{textAlign: 'center'}}>
            <div className='modal-header'>
              <button className='close-button' aria-hidden='true' onClick={this.closeModal}>X</button>
              <h1><img src={logo}/> Please Sign In</h1>
            </div>
            <p>This lets us save your thoughts so you can come back to them.</p>
            <p style={{marginTop: '2em'}}><button style={{width: '100%', maxWidth: '15em'}}className="pure-button" onClick={auth.showGoogleLoginPrompt}>Sign in with GMail (Google)</button></p>
            <p><button style={{width: '100%', maxWidth: '15em'}}className="pure-button" onClick={auth.showFacebookLoginPrompt}>Sign in with Facebook</button></p>
            <p>
              <button onClick={this.closeModal} style={{width: '100%', maxWidth: '15em'}} className="pure-button button-secondary">Not Yet</button>
            </p>
          </div>
        </Modal>
      </div>
    );
  }
});

export default LoginGate;