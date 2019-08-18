import React, { Component, Fragment } from 'react';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import Repos from '../repos/Repos';

class User extends Component {
    componentDidMount(){
        this.props.getUser(this.props.match.params.login);
        this.props.getUserRepos(this.props.match.params.login);
    }

    static propTypes ={
        loading: PropTypes.bool,
        user:PropTypes.object.isRequired,
        getUser:PropTypes.func,
        getUserRepos:PropTypes.func.isRequired,
        repos: PropTypes.array.isRequired,
    }
    render() {
        const { name, avatar_url, location, bio, blog, login, html_url, followers, following, public_repos, public_gists, hireable, company } = this.props.user;
        const { loading, repos } = this.props;

        if(loading) return <Spinner/>

        return (
            <Fragment>
                <NavLink to='/' className='btn btn-light' style={{margin:'1rem 0'}}>
                    Back To Search
                </NavLink>
                <hr/>
                Hirable: {''}
                {hireable ? <i className='fas fa-check text-success' /> : <i className='fas fa-times-circle text-danger' /> }
                <br/>
                <div className='col'>
                    <div className='all center'>
                        <img src={avatar_url} className='round-img' alt='' style={{width:'150px'}} />
                        <h1>{name}</h1>
                        <p>Location: {location}</p>
                    </div>
                    <div>
                        {bio && <Fragment>
                            <h3>Bio</h3>
                            <p>{bio}</p>
                        </Fragment>}
                        <a href={html_url} className='btn btn-dark'>Visit Github Profile</a>
                        <div className='list'>
                            <li>
                                {login && <Fragment>
                                    <strong>Username:</strong>{login}
                                </Fragment>}
                            </li>
                            <li>
                                {company && <Fragment>
                                    <strong>Company:</strong>{company}
                                </Fragment>}
                            </li>
                            <li>
                                {blog && <Fragment>
                                    <strong>Blog:</strong>{blog}
                                </Fragment>}
                            </li>
                        </div>
                    </div>
                </div>
                <div className='col'>
                    <div className='badge badge-primary'>Followers: {followers}</div>
                    <div className='badge badge-success'>Following: {following}</div>
                    <div className='badge badge-danger'>Public Repos: {public_repos}</div>
                    <div className='badge badge-dark'>Public Gist: {public_gists}</div>
                </div>
                <Repos repos={repos} />
            </Fragment>
        )
    }
}

export default User
