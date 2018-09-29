import React from 'react';

class UserInfo extends React.Component {

    render() {
        return (
            <div className='UserInfo'>
                <h1>User info for {this.props.name}</h1>
                {console.log(this.props)}
                <ul>
                    <li>male: man</li>
                    <li>age : 20</li>
                    <li>profession: coder</li>
                </ul>
            </div>
        );
    }
}

export default UserInfo;