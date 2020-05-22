import axios from 'axios'
import {Modal} from 'antd'
export default class Axios{
    static ajax(options) {
        let baseAPI = "http://rap2.taobao.org:38080/app/mock/255244/app/mock/2393288";
        return new Promise((resolve, reject) => {
            axios({
                url: options.url,
                method: 'get',
                baseURL: baseAPI,
                timeout: 5000,
                params: (options.data && options.data.params) || ''
            }).then((response) => {
                if (response.status = "200") {
                    let res = response.data;
                    if (res.code == "0") {
                        resolve(res);
                    } else {
                        Modal.info({
                            title: '提示',
                            content: res.data.msg,
                        })
                    }
                }
                else {
                    reject(response.data);
                }
            })
        })
    }
    
}

