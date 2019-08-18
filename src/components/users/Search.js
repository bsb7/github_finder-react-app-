import React, { useState } from 'react';
import PropTypes from 'prop-types';


const Search=({searchUsers, showClear, clearUsers, setAlert})=> {
    const [text, setText] = useState('');

    const onChange = e =>{
        setText(e.target.value)
    }

    const onSubmit = e =>{
        e.preventDefault();
        if(text ===''){
            setAlert('Please enter something', 'light');
        } else {
            // console.log(this.state.text);
            searchUsers(text);
            setText({text:''});
        }
    }

    return (
        <div>
            <form className='form' onSubmit={onSubmit} style={{margin:'1rem auto'}}>
                <input type='text' name='text' placeholder='Search Users...' onChange={onChange} style={{width:'100%',margin:'1rem auto'}}/>
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

Search.propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
    setAlert: PropTypes.func.isRequired,
}


export default Search
 