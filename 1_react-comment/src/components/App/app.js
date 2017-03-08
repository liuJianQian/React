import React, {Component} from 'react';

import Add from '../Add/add';
import List from '../List/list';


export default class App extends Component{
    render(){
        return (
            <div>
                <header class="site-header jumbotron">
                    <div class="container">
                        <div class="row">
                            <div class="col-xs-12">
                                <h1>请发表对React的评论</h1>
                            </div>
                        </div>
                    </div>
                </header>
                <div class="container">

                    <div class="col-md-8">
                        <h3 class="reply">评论回复：</h3>
                        <h2 style='display: none'>暂无评论，点击左侧添加评论！！！</h2>
                        <ul class="list-group">
                            <li class="list-group-item">
                                <div class="handle">
                                    <a href="javascript:;">删除</a>
                                </div>
                                <p class="user"><span >xxx</span><span>说:</span></p>
                                <p class="centence">React不错!</p>
                            </li>
                            <li class="list-group-item">
                                <div class="handle">
                                    <a href="javascript:;">删除</a>
                                </div>
                                <p class="user"><span >yyy</span><span>说:</span></p>
                                <p class="centence">React有点难!</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}