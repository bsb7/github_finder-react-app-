import React, { Component } from 'react'
import PropTypes from 'prop-types';


class Search extends Component {
    state={
        text:''
    }

    static propTypes = {
        searchUsers: PropTypes.func.isRequired,
        clearUsers: PropTypes.func.isRequired,
        showClear: PropTypes.bool.isRequired,
        setAlert: PropTypes.func.isRequired,
    }

    onChange = e =>{
        this.setState({[e.target.name]:e.target.value})
    }

    onSubmit = e =>{
        e.preventDefault();
        if(this.state.text === ''){
            //-- method setAlert - takes in 2 parameter. 1. Text 2. type - danger,light
            this.props.setAlert('Please enter something', 'light');
        } else {
            // console.log(this.state.text);
            this.props.searchUsers(this.state.text);
            this.setState({text:''});
        }
    }

    render() {

        const {showClear, clearUsers} = this.props;

        return (
            <div>
                <form className='form' onSubmit={this.onSubmit} style={{margin:'0.5rem auto'}}>
                    <input type='text' name='text' placeholder='Search Users...' onChange={this.onChange} style={{width:'100%',margin:'0.5rem auto'}}/>
                    <input type='submit' value='Search' className='btn btn-dark btn-block' />
                </form>
                {showClear && (

                    <button className='btn btn-light btn-block' onClick={clearUsers}>
                        Clear
                    </button>
                )}
            </div>
        )
    }
}

export default Search
 