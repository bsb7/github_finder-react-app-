// -- all of the actions gonna go
// -- in here is gonna be the initial state 
// -- basically our actions


import React, { useReducer } from 'react';
import axios from 'axios';
import GithubContext from './githubContext';
import GithubReducer from './githubReducer';


import { SEARCH_USERS,SET_LOADING, GET_REPOS, CLEAR_USERS, GET_USER } from '../types';

// -- global state 
const GithubState = props => {
    const initialState={
        users:[],
        user: {},
        repos: [],
        loading: false
    }

    const [ state, dispatch ] = useReducer(GithubReducer, initialState);

    // -- actions below

    // Search Users

    const searchUsers = async text =>{
        setLoading();
        const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=$
        {process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=$
        {process.env.REACT_APP_GITHUB_CLIENT_ID}`);
        // -- instead of setUsers(res.data.items); we dispatch type of the action and the payload which is the res.data

        dispatch({
            type: SEARCH_USERS,
            payload: res.data.items 
        })
        
      }
    
    // Get User
    const getUser = async (username) =>{
        setLoading();
        const res = await axios.get(`https://api.github.com/users/${username}?client_id=$
        {process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=$
        {process.env.REACT_APP_GITHUB_CLIENT_ID}`);
        
        dispatch({
            type: GET_USER,
            payload: res.data
        })
    }
    // Get Repos
    const getUserRepos = async username =>{
        setLoading();
        const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=$
        {process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=$
        {process.env.REACT_APP_GITHUB_CLIENT_ID}`);
        dispatch({
            type: GET_REPOS,
            payload: res.data
        })
      }
    
    // Clear Users
    const clearUsers= () => dispatch({
        type: CLEAR_USERS
    })
    
    // Set Loading

    const setLoading = ()=> dispatch({type: SET_LOADING});

    return <GithubContext.Provider 
        value ={{
            users: state.users,
            user: state.user,
            repos: state.repos,
            loading: state.loading,
            searchUsers,
            clearUsers,
            getUser,
            getUserRepos 
        }}
    >
        {props.children}
    </GithubContext.Provider>   

}


export default GithubState;