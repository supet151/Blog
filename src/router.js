import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import App from './App.js'
import Axios from './axios'
import MdPage from './pages/home/hooks/md_to_com/md_to_com'
import Admin from './Admin';
import Home from './pages/home/index'

export default class IRouter extends React.Component {
    state = {
        data: [
            {
                path: "/page1",
                url: "http://techo000.oss-cn-hangzhou.aliyuncs.com/%E5%89%8D%E7%AB%AF%E4%B8%96%E7%95%8C%E5%85%A5%E5%9C%BA%E5%88%B8.md"
            },
            {
                path:"/page2",
                url:"http://techo000.oss-cn-hangzhou.aliyuncs.com/%E5%89%8D%E7%AB%AF%E6%99%BA%E8%83%BD%E5%8C%96.md"
            }
        ],
        RouteList: []
    }
    
    componentWillMount() {
        // Axios.ajax({
        //     url: '/list'
        // }).then((res) => {
        //     if(res){
        //         this.setState({
        //             data:res
        //         })
        //         console.log(res)
        //     }
        // })
        const RouteList = this.renderRouter(this.state.data);
        this.setState({
            RouteList
        })
    }
    
    
    renderRouter = (data) => {
        return data.map((item) => {
            return <Route path={item.path}
                component={
                   ()=>{
                       return <MdPage url={item.url}/>
                   }
                }
            />
        })
    }
    
    
    render() {
        return (
            <HashRouter>
                <App>
                    <Switch>
                        <Route path="/" render={() =>
                            <Admin>
                                <Switch>
                                    {this.state.RouteList}
                                </Switch>
                            </Admin>
                        } />
                    </Switch>
                </App>
            </HashRouter>

        );
    }
}

