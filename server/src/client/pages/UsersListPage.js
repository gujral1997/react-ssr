import 'babel-polyfill';
import React from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../actions'
import { Helmet } from 'react-helmet'

class UsersList extends React.Component {
    componentDidMount() {
        this.props.fetchUsers();
    }

    renderUsers() {
        return this.props.users.map(user => {
            return <li key={user.id}>{user.name}</li>
        })
    }

    head() {
        return (
            <Helmet>
                <title> {`${this.props.users.length} users loaded`}</title>
                <meta property="og:title" content="Users App" />
            </Helmet>
        )
    }

    render() {
        return (
            <div>
                {this.head()}
                User List
                <ul>
                    {this.renderUsers()}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    users: state.users
})

function loadData(store) {
    return store.dispatch(fetchUsers())
}


export default {
    component: connect(mapStateToProps, { fetchUsers })(UsersList),
    loadData
}