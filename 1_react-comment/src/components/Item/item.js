import React, {Component, PropTypes} from 'react';
import PubSub from 'pubsub-js';

export default class Item extends Component{

    removeComment = () => {
        // const {comment, remove, index} = this.props;

        const {comment, index} = this.props;

        if(confirm(`确定删除${comment.username}的评论么?`)){
            // remove(index);


            //发布消息(触发自定义事件)
            PubSub.publish('delete', index);
        }
    }

    render (){
        const {comment} = this.props;

        return (
        <li className="list-group-item">
            <div className="handle">
                <a href="javascript:;" onClick={this.removeComment}>删除</a>
            </div>
            <p className="user"><span >{comment.username}</span><span>说:</span></p>
            <p className="centence">{comment.content}</p>
        </li>
        )
    }
}
