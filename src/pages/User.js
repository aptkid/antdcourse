import React from 'react';
import UserInfo from './UserInfo.js';

class User extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            value: '未点击按钮'
        }
    }

    render() {

        const Picture = (props) => {
            return(
                <div>
                    <img src={props.src} />
                    {props.children}
                </div>
            );
        }
        return(
            <div>
                <Picture src="http://t.cn/EP1mVaI">
                    <ul>
                        <li>我是子内容，来自props.children</li>
                        <li><button onClick={() => {this.setState({value: '已点击'})}}>点我</button></li>
                        {this.state.value}
                    </ul>
                </Picture>
                <UserInfo name="小明"/>

            </div>
            
        );
    }
}

export default User;