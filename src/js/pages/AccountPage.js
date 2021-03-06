import React, { Component } from 'react'

// Higher order component adds Auth functions
import AuthenticatedComponent from 'quickcommerce-react/components/AuthenticatedComponent.jsx'
import AccountComponent from 'quickcommerce-react/components/AccountComponent.jsx'

export default AuthenticatedComponent(

class AccountPage extends Component {
    render() {       
        return (
            <AccountComponent
                {...this.props}
                />
        )
    }
})