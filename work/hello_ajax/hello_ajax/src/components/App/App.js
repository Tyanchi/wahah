import React from 'react';

import Search from '../Search/Search';
import UserList from '../UserList/UserList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={
        searchName :''
    }
  }
  search=(searchName)=>{
      this.setState({searchName})
  };

  render () {
    return (
      <div className="container">
        <Search search={this.search}/>
        <UserList searchName={this.setState.searchName}/>
      </div>
    );
  }
}

export default App;