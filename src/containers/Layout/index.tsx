import * as React from 'react';
import { Menu, Breadcrumb, Icon } from 'antd';
const SubMenu = Menu.SubMenu;

class Layout extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
        this.state = {
            collapse: true
        }
    }
    onCollapseChange = () => {
        this.setState({
            collapse: !this.state.collapse,
        })
    }
    render() {
        const collapse = this.state.collapse;

        return (
            <div
                className={
                    collapse ?
                        'ant-layout-aside ant-layout-aside-collapse'
                        : 'ant-layout-aside'
                }>
                <aside className="ant-layout-sider">
                    <div className="ant-layout-logo">
                        😻
                    </div>
                    <Menu
                        mode="inline"
                        theme="dark"
                        defaultSelectedKeys={['user']}>
                        <Menu.Item key="user">
                            <Icon type="user" />
                            <span className="nav-text">导航一</span>
                        </Menu.Item>
                        <Menu.Item key="setting">
                            <Icon type="setting" />
                            <span className="nav-text">导航二</span>
                        </Menu.Item>
                        <Menu.Item key="laptop">
                            <Icon type="laptop" />
                            <span className="nav-text">导航三</span>
                        </Menu.Item>
                        <Menu.Item key="notification">
                            <Icon type="notification" />
                            <span className="nav-text">导航四</span>
                        </Menu.Item>
                        <Menu.Item key="folder">
                            <Icon type="folder" />
                            <span className="nav-text">导航五</span>
                        </Menu.Item>
                    </Menu>
                    <div className="ant-aside-action"
                        onClick={this.onCollapseChange}>
                        {collapse ?
                            <Icon type="right" /> :
                            <Icon type="left" />
                        }
                    </div>
                </aside>
                <div className="ant-layout-main">
                    <div className="ant-layout-header">
                        <Menu mode="horizontal"
                            defaultSelectedKeys={['2']} style={{
                                lineHeight: '62px',
                                float: 'right',
                                borderBottom: 'none'
                            }}>
                            <Menu.Item key="1">导航一</Menu.Item>
                            <Menu.Item key="2">导航二</Menu.Item>
                            <Menu.Item key="3">导航三</Menu.Item>
                        </Menu>
                    </div>
                    <div className="ant-layout-breadcrumb">
                        <Breadcrumb>
                            <Breadcrumb.Item href="#/">首页</Breadcrumb.Item>
                            <Breadcrumb.Item href="#/counter">
                                应用列表
                            </Breadcrumb.Item>
                            <Breadcrumb.Item>某应用</Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                    <div className="ant-layout-container">
                        <div className="ant-layout-content">
                            {
                                this.props.children
                            }
                        </div>
                    </div>
                    <div className="ant-layout-footer">
                        版权所有 © 2016 😻
                    </div>
                </div>
            </div>
        );
    }
}

export default Layout;
