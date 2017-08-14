import React from 'react';
import axios from 'axios';

class UserList extends React.Component {
    constructor(props) {
        super(props);
        //初始化状态
        this.state = {
            firstView : true,
            loading : false,
            users : null,
            error : null
        }
    }

    componentWillReceiveProps(nextProps){
        //修改状态为loading
        this.setState({
            firstView : false,
            loading : true
        });

        console.log('当前组件马上要接收props数据');
        console.log(nextProps);
        //发送请求
        let url = `https://api.github.com/search/users?q=${nextProps.searchName}`;
        axios.get(url)
            .then((response) => {
                console.log(response);
                //修改状态users
                this.setState({
                    loading : false,
                    users : response.data.items
                })
            })
            .catch((error) => {
                console.log(error);
                //修改状态  error
                this.setState({
                    loading : false,
                    error : '暂时没有匹配成功的用户'
                })
            })
    }

    render () {
        let {firstView, loading, users, error} = this.state;
        if(firstView){
            return <p>Enter name to search</p>
        }else if(loading){
            return <p>loading......</p>
        }else if(users){
            return (
                <div className="row">
                    {
                        users.map((user, index) => {
                            return (
                                <div key={index} className="card">
                                  <a href={user.html_url} target="_blank">
                                    <img src={user.avatar_url} style={{width : '100px'}}/>
                                  </a>
                                  <p className="card-text">{user.login}</p>
                                </div>
                            )
                        })
                    }
                </div>
            );
        }else{
            return <p>{error}</p>
        }

    }
}

export default UserList;