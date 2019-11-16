import React from 'react';
import { Menu, Icon } from 'antd';

const { SubMenu } = Menu;

export default class HeaderV4h extends React.Component {
    state = {
        current: 'home',
    };
    
    handleClick = e => {
        console.log('click ', e);
        this.setState({
        current: e.key,
        });
    };
    
    render() {
        return (
            <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal" theme="light">
                <Menu.Item key="home">
                    <Icon type="home" />
                    Home
                </Menu.Item>
                <Menu.Item key="playStream">
                    <Icon type="play-circle" />
                    Sessões
                </Menu.Item>
                <Menu.Item key="schedule">
                    <Icon type="schedule" />
                    Agenda
                </Menu.Item>                
            </Menu>
        );
    }
}