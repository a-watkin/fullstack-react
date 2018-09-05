import React, {Component} from 'react'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import Divider from 'material-ui/Divider'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import Menu from 'material-ui/svg-icons/navigation/menu'
import {Link} from 'react-router'

class NavDrawer extends Component {

    state = {
        open: true
    }
    

    toggle = () => {
        this.setState(( prevState, props ) => {
            return {
                open: !prevState.open
            }
        })
    }

    render() {
      return (
        <div>
          <FloatingActionButton
            onTouchTap={this.toggle}
          >
            <Menu/>
          </FloatingActionButton>


          <Drawer
            open={this.state.open}
          >

          <div
            
            style={{
                height: '200px',
                width: '100%',
                backgroundColor: 'salmon'
            }}
          
          >
            Login Container


          </div>
          <Divider/>

            <Link
                to={'/'}
            >
            
            <MenuItem
                onTouchTap={this.toggle}
                primaryText={'Play'}
            />
            
            </Link>
            

            <Link
                to={'/profile'}
            >
            <MenuItem
                onTouchTap={this.toggle}
                primaryText={'Profile'}
            />
            </Link>

          </Drawer>
        </div>

        
      )
    }
}

export default NavDrawer