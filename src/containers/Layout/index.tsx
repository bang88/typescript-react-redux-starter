import * as React from 'react';
import { Menu, Breadcrumb, Icon } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
class Layout extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
        this.state = {
            collapse: false
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
                        mode={collapse ? 'vertical' : 'inline'}
                        theme="dark"
                        defaultSelectedKeys={['user', '1']}>
                        <SubMenu key="user"
                            title={
                                <span>
                                    <Icon type="mail" />
                                    <span className="nav-text"
                                        title="我是很长的标题"
                                        >导航一
                                    </span>
                                </span>
                            }>
                            <MenuItemGroup title="分组1">
                                <Menu.Item key="1">选项1</Menu.Item>
                                <Menu.Item key="2">选项2</Menu.Item>
                            </MenuItemGroup>
                            <MenuItemGroup title="分组2">
                                <Menu.Item key="3">选项3</Menu.Item>
                                <Menu.Item key="4">选项4</Menu.Item>
                            </MenuItemGroup>
                        </SubMenu>
                        <SubMenu key="sub2"
                            title={
                                <span>
                                    <Icon type="appstore" />
                                    <span className="nav-text"
                                        title="很长很长很长的就不要放到下面了"
                                        >导航二
                                    </span>
                                </span>
                            }>
                            <Menu.Item key="5">选项5</Menu.Item>
                            <Menu.Item key="6">选项6</Menu.Item>
                            <SubMenu key="sub3" title="三级导航">
                                <Menu.Item key="7">选项7</Menu.Item>
                                <Menu.Item key="8">选项8</Menu.Item>
                            </SubMenu>
                        </SubMenu>
                        <SubMenu key="sub4"
                            title={
                                <span>
                                    <Icon type="setting" />
                                    <span className="nav-text"
                                        title="管理菜单要简短"
                                        >导航三
                                    </span>
                                </span>
                            }>
                            <Menu.Item key="9">选项9</Menu.Item>
                            <Menu.Item key="10">选项10</Menu.Item>
                            <Menu.Item key="11">选项11</Menu.Item>
                            <Menu.Item key="12">选项12</Menu.Item>
                        </SubMenu>
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
