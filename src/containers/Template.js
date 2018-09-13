import React, {Component} from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'
import NavDrawer from '../components/NavDrawer'
import {Header, Main} from '../styled/Template'

import Relay from 'react-relay'

injectTapEventPlugin()

class Template extends Component {

  render() {
    return (
      <MuiThemeProvider>
        <div>

          <NavDrawer/>

          <Header>
            TicTacTuring
          </Header>
          
          {/* 
          
          things in here are styled by styled/template
          which is wrapped by Container styled.div
          */}
          <Main>
            
            {this.props.children}
          </Main>
        </div>
      </MuiThemeProvider>
    )
  }
}

// export default Template


export default Relay.createContainer(
  Template, {
    fragments: {
      viewer: () => Relay.QL`
        fragment on Viewer {
          user {
            id
          }
        }
      `,
    }
  }
)