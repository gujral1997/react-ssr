import 'babel-polyfill';
import React from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../actions'

class UsersList extends React.Component {
    componentDidMount() {
        this.props.fetchUsers();
    }

    renderUsers() {
        return this.props.users.map(user => {
            return <li key={user.id}>{user.name}</li>
        })
    }

    render() {
        console.log(this.props.users);

        return (
            <div>
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

export default connect(mapStateToProps, { fetchUsers })(UsersList)