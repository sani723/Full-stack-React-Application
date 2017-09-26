import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import NavDrawer from '../components/NavDrawer';
import {Header, Main} from '../styled/Template2';

injectTapEventPlugin();

class Template extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <NavDrawer />
          <Header>
            <h1>Full-stack React Application</h1>
          </Header>
          <Main>
            {this.props.children}
          </Main>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Template;
