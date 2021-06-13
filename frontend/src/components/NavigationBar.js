import React, { Component } from 'react'
import { Icon, Menu } from 'semantic-ui-react'
import axios from "axios"
export default class NavigationBar extends Component {
  state = { activeItem : 'none' }
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state
    const mystyle = {color: "#00CC66" , backgroundColor: "#000066" }
    //axios.get("http://localhost:3001").then((response)=>{console.log(response.data);})
    return (
      <Menu icon='labeled' vertical>
        <Menu.Item
          name='dashboard'
          active={activeItem === 'dashboard'}
          onClick={this.handleItemClick}
          href="dashboard"
          style={mystyle}
        >
          <Icon name='dashboard' />
          Dashboard
        </Menu.Item>
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

        <Menu.Item
          name='logout'
          active={activeItem === 'logout'}
          onClick={this.handleItemClick}
          href="home"
          style={mystyle}
        >
          <Icon name='logout' />
          Log out
        </Menu.Item>
      </Menu>
    )
  }
}
