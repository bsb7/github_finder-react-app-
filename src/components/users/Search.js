import React, { useState, useContext } from 'react';
import GithubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/alertContext';

const Search=()=> {
    // -- initialize githubContext 
    const githubContext = useContext(GithubContext)
    const alertContext = useContext(AlertContext)


    const [text, setText] = useState('');

    const onChange = e =>{
        setText(e.target.value)
    }

    const onSubmit = e =>{
        e.preventDefault();
        if(text ===''){
            alertContext.setAlert('Please enter something', 'light');
        } else {
            // console.log(this.state.text);
            githubContext.searchUsers(text);
            setText({text:''});
        }
    }

    return (
        <div>
            <form className='form' onSubmit={onSubmit} style={{margin:'1rem auto'}}>
                <input type='text' name='text' placeholder='Search Users...' onChange={onChange} style={{width:'100%',margin:'1rem auto'}}/>
                <input type='submit' value='Search' className='btn btn-dark btn-block' />
            </form>
            {githubContext.users.length > 0 && (
                <button className='btn btn-light btn-block' onClick={githubContext.clearUsers}>
                    Clear
                </button>
            )}
        </div>
    )
    
}


export default Search
 