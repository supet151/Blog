import React from 'react'
import {NavLink} from 'react-router-dom';
import { Menu, Icon } from 'antd'
import './index.less'
import MenuItem from 'antd/lib/menu/MenuItem';
import {connect} from 'react-redux'
import {switchMenu} from './../../redux/action'
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;


class Navleft extends React.Component {
    state={
        currentKey:''
    }
    handleOnClick=({item,key})=>{
        const {dispatch} =this.props;
        dispatch(switchMenu(item.props.title))
        this.setState({
            currentKey:key
        })
    }
    componentWillMount(){
        const menuTreeNode=this.renderMenu(MenuConfig);
        let currentKey=window.location.hash.replace(/#|\?.*$/g,'')
        this.setState({
            currentKey,
            menuTreeNode
        })
    }
    //菜单渲染
    renderMenu=(data)=>{
        return data.map((item)=>{
            if(item.children){
                return (
                    <SubMenu title={item.title} key={item.key}>
                       { this.renderMenu(item.children)}
                    </SubMenu>
                )
            }
            //最后一级
            return <Menu.Item title={item.title} key={item.key}>
                <NavLink to={item.key}>{item.title}</NavLink>
            </Menu.Item>
        })
    }
    render() {
        return (
            <div>
                <div className="logo">
                    <img src="logo.svg" alt=""></img>
                    <h1>React</h1>
                </div>
                <Menu 
                onClick={this.handleOnClick}
                selectedKeys={[this.state.currentKey]}
                theme="dark">
                    
                    {this.state.menuTreeNode}
                </Menu>
            </div>
        );
    }
}
export default connect()(Navleft)