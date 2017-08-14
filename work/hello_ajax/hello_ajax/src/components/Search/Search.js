import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
  }
  search=()=>{
      //判断用户输入的信息是否为空
      //收集数据
      let searchName=this.refs.searchName.value;
      if(!searchName){
          alert('输入的信息不能为空');
          return;
      }
      //调用App组件传递的方法
      this.props.search(searchName);
  };


  render () {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">Search Github Users</h3>
        <div>
          <input  ref="searchName" type="text" placeholder="enter the name you search"/>
          <button onClick={this.search}>Search</button>
        </div>
      </section>
    );
  }
}

export default Search;