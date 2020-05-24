import 'babel-polyfill';
import React from 'react'
import { connect } from 'react-redux'
import { fetchAdmins } from '../actions'

class AdminsList extends React.Component {
    componentDidMount() {
        this.props.fetchAdmins();
    }

    renderAdmins() {
        return this.props.admins.map(admin => {
            return <li key={admin.id}>{admin.name}</li>
        })
    }

    render() {
        return (
            <div>
                Admin List
                <ul>
                    {this.renderAdmins()}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    admins: state.admins
})

export default {
    component: connect(mapStateToProps, { fetchAdmins })(AdminsList),
    loadData: ({ dispatch }) => dispatch(fetchAdmins())
}