import React, {Component} from 'react';
import PubSub from 'pubsub-js';

import Add from '../Add/add';
import List from '../List/list';


export default class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            comments: []
        }
    }

    add = (comment) => {
        const {comments} = this.state;
        comments.unshift(comment);
        this.setState({comments});
    };
    remove = (index) => {
        const {comments} = this.state;
        comments.splice(index, 1);
        this.setState({comments});
    }

    componentWillMount(){
        //模拟请求获取数据
        const comments = [
            {username: 'liuqian', content: 'haoyong'},
            {username: 'Lily', content: 'goujin'}
        ]
        //更新数据
        this.setState({comments});


        //订阅消息(绑定自定义监听)
        PubSub.subscribe('delete', (message, index) => {
            this.remove(index);
        })
    }
    render(){
        return (
            <div>
                <header className="site-header jumbotron">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12">
                                <h1>请发表对React的评论</h1>
                            </div>
                        </div>
                    </div>
                </header>
                <div className="container">
                <Add add={this.add} />
                <List comments={this.state.comments} remove={this.remove}/>
                </div>
            </div>
        )
    }
}