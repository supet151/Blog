//该文件是整个页面的主结构
import React from 'react';
import {Row, Col} from 'antd';
import './style/common.less'

export default class Admin extends React.Component{
    render(){
        return(
            <div>
                <p>这是测试页面</p>
                {this.props.children}
            </div>
        );
    }
}