import React, { Component } from "react";
export default class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      singer: ""
    };
  }
  render() {
    let { title, singer } = this.state;
    let { add, router } = this.props;
    return (
      <header style={{ position: "relative" }}>
        <h2 className="title">添加歌曲</h2>
       {
           this.getBack()
       }
        <input
          type="text"
          placeholder="输入歌曲名字"
          value={title}
          onChange={e => {
            this.setState({
              title: e.target.value
            });
          }}
        />
        <input
          type="text"
          placeholder="输入歌手名字"
          value={singer}
          onChange={e => {
            this.setState({
              singer: e.target.value
            });
          }}
        />
        <input
          type="button"
          value="添加音乐"
          onClick={() => {
            add(this.state.title, this.state.singer);
            router.history.push("/");
          }}
        />
      </header>
    );
  }

  getBack=()=>{
    let { data, router } = this.props;
      if(!data.length){
        return null;
      }
      return(
        <a
        className="backLink"
        onClick={() => {
          router.history.goBack();
        }}
      >
        返回
      </a>
      )
  }
}
