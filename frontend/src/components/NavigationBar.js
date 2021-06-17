import React, { Component } from 'react'
import { Header, Icon, Image, Menu, Segment, Sidebar } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import Divider from '@material-ui/core/Divider';
import http from './http-common'
export default class NavigationBar extends Component {
  state = { activeItem : 'none' }
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  handleLogout = ((e) => 
  {e.preventDefault();
    console.log('disconnected')
    http.get('logout/')
    .then(res => {
    if (res.status === 200) {
      console.log('disconnected')
  
     
    } else {
      const error = new Error(res.error);
      throw error;
    }
  })
  .catch(err => {
    console.error(err);
  });
  }
  )

  render() {
    const { activeItem } = this.state
    const mystyle = {backgroundColor:"#1A244F",color:"white"}
    return (
      
      <Menu icon='labeled' vertical style={{height:"100%"}}>
        <Menu.Item
          name='dashboard'
          active={activeItem === 'dashboard'}
          onClick={this.handleItemClick}
          href="/"
          style={mystyle}
        >
          <Icon name='dashboard' />
          Dashboard
        </Menu.Item>
        <Divider/>
        <Menu.Item
          name='streaming'
          active={activeItem === 'streaming'}
          onClick={this.handleItemClick}
          href="streaming"
          style={mystyle}
        >
          <Icon name='video' />
          Streaming
        </Menu.Item>
        <Divider/>

        <Menu.Item
          name='logout'
          active={activeItem === 'logout'}
          onClick={this.handleLogout}
          
          style={{backgroundColor:"#1A244F",color:"white",height:"100%"}}
        >
          <Icon name='logout'  />
          Log out
        </Menu.Item >
      </Menu>
    )
  }
}
