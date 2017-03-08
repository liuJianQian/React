import React, {Component} from 'react';
import List from './list';
import Search from './search';

export default class App extends Component {

    constructor (props){
        super(props)
        this.state = {
            searchName: null
        }
    }

    setSearchName = (searchName) => {
        this.setState({searchName});
    }

    render(){
        return(
            <div className="container">
                <section className="jumbotron">
                    <h3 className="jumbotron-heading">Search Github Users</h3>
                    <Search setSearchName={this.setSearchName}/>
                </section>
                <List searchName={this.state.searchName}/>
            </div>
        )
    }
}