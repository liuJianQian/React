import React, {Component, PropTypes} from 'react';


import Item from '../Item/item';

export default class List extends Component{

    render(){
        // const {comments, remove} = this.props;

        const {comments} = this.props;

        const display = comments.length === 0? 'block' : 'none';
        const lis = comments.map((comment, index) => {
            // return <Item key={index} comment={comment} remove={remove} index={index}/>

            return <Item key={index} comment={comment}/>

        })
        return (
            <div className="col-md-8">
                <h3 className="reply">评论回复：</h3>
                <h2 style={{display: display}}>暂无评论，点击左侧添加评论！！！</h2>
                <ul className="list-group">
                    {lis}
                </ul>
            </div>
        )
    }
}

List.propTypes = {
    comments: PropTypes.array.isRequired,
    remove: PropTypes.func.isRequired
}