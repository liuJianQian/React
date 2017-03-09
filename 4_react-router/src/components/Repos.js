/*
import React, {Component} from 'react';

export default class Repos extends Component {
    render() {
        return (
            <div>Repos组件</div>

        )
    }
}*/



import React, {Component} from 'react';
// import {Link} from 'react-router';
import MyLink from './MyLink';


export default class Repos extends Component{
    constructor(props){
        super(props);
        this.state = {
            repos: [
                {username: 'facebook', repoName:'react'},
                {username: 'facebook', repoName:'react-dom'},
                {username: 'google', repoName:'angular'},
                {username: 'ant', repoName:'antd'}
                ]
        }
    }
    render(){
        const lis = this.state.repos.map((repo, index) => {
            return <li key={index}><MyLink to={`/repos/${repo.username}/${repo.repoName}`}>{repo.repoName}</MyLink></li>
        });
        return (
            <div>
                <h2>Repos 组件</h2>
                <ul>
                    {lis}
                </ul>
                {this.props.children}
            </div>

        )
    }
}
