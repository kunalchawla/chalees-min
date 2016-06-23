import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {Provider} from 'react-redux';
import * as auth from './auth.js';
import * as data from './data.js';
import * as reactions from './reactions/reactions.js';
import getStore from './get-store.js';
// import {DevTools, DebugPanel, LogMonitor} from 'redux-devtools';

import Header from './header.js';
import Footer from './footer.js';
import LoadingOverlay from './loading-overlay.js';


// Create the store
const store = getStore();

// Authorize them to all services if they're signed in

const Application = React.createClass({
  componentDidMount: async function () {
    const handleReady = () => this.setState({isReady: true});
    auth.whenReady()
      .then(handleReady, handleReady);

    try {
      const user = await auth.authorize();
      this.setState({isLoggedIn: true});

      // data.onUpdate((data) => {
      //   console.log('updated data');
      //   this.setState({data: data || {}});
      // });
      console.log(user);
      reactions.initialize();
    } catch (error) {
      this.setState({isLoggedIn: false});
    }
  },
  getInitialState: function () {
    return {
      data: {}
    };
  },
  render: function () {
    return (
      <div>
        <Provider store={store}>
          <div>
            <LoadingOverlay shouldShow={!this.state.isReady} />
            <Header />
            <ReactCSSTransitionGroup component="div" transitionName="page" transitionEnterTimeout={500} transitionLeaveTimeout={500}>
              {React.cloneElement(this.props.children, { key: location.pathname, loggedIn: this.state.isLoggedIn, data: this.state.data })}
            </ReactCSSTransitionGroup>
            { /* <Footer /> */ }
          </div>
        </Provider>
      </div>
    );
  }
});

        // <DebugPanel top right bottom>
        //   <DevTools store={store} monitor={LogMonitor} />
        // </DebugPanel>
export default Application;