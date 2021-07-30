import React, { Component } from 'react';
import './Form.css'
class Form extends Component {

    constructor(props){
        super(props)

        this.state = {
            username: '',
            comments: '',
            topic: ''
        }
    }

    handleUsernameChange = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    handleCommentsChange = (event) => {
        this.setState({
            comments: event.target.value
        }) 
    }

    handleTopicChange = (event) => {
        this.setState({
            topic: event.target.value
        })
    }

    handleSubmit = (event) => {
        alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`);
        event.preventDefault();
    }

    render() { 
        return ( 
            <form className="myform" onSubmit={ this.handleSubmit}>
                <div className="field">
                    <label>Username</label>
                    <input className="form-control" type="text" value={ this.state.username} onChange={ this.handleUsernameChange} />
                </div>
                <div className="field">
                    <label>Comments</label>
                    <textarea className="form-control" value={ this.state.comments} onChange={this.handleCommentsChange}></textarea>
                </div>
                <div className="field">
                    <label>Topic</label>
                    <select className="form-control" value={ this.state.topic } onChange={ this.handleTopicChange }>
                        <option value="">Select Topic</option>
                        <option value="react">React</option>
                        <option value="angular">Angular</option>
                        <option value="vue">Vue</option>
                    </select>
                </div>
                <div className="submit--button">
                    <input type="submit" className="btn btn-submit" value="Submit" />
                </div>
            </form>
         );
    }
}
 
export default Form;