import React, { Component } from 'react'
import { Header, Icon, Image, Menu, Segment, Sidebar } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import Divider from '@material-ui/core/Divider';
export default class NavigationBar extends Component {
  state = { activeItem : 'none' }
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

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
        <Divider style={{width:"70%"}}/>
        <Menu.Item
          name='energy'
          active={activeItem === 'energy'}
          onClick={this.handleItemClick}
          href="energy"
          style={mystyle}
        >
          <Icon name='chart line' />
          Energy
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
          onClick={this.handleItemClick}
          href="home"
          style={{backgroundColor:"#1A244F",color:"white",height:"100%"}}
        >
          <Icon name='logout'  />
          Log out
        </Menu.Item>
      </Menu>
    )
  }
}
