import React, {Component} from 'react'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import Divider from 'material-ui/Divider'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import Menu from 'material-ui/svg-icons/navigation/menu'

class NavDrawer extends Component {

    state = {
        open: false
    }

    render() {
      return (
        <div>
          <FloatingActionButton>
            <Menu/>
          </FloatingActionButton>


          <Drawer
          
            open={this.state.open}
          >


            <Divider/>
            <MenuItem
              primaryText={'Play'}
            />
            <MenuItem
              primaryText={'Profile'}
            />


          </Drawer>
        </div>

        
      )
    }
}

export default NavDrawer