import React, { Component } from "react";
import "./style/index.css";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import {Redirect} from "react-router"
import Home from "./home";
import Add from "./add";

class App extends Component {
  constructor(props) {
    super(props);
    this.now = 4;
    this.state = {
      data: [
        {
            title: "空白格",
            singer: "菜键雅",
            selected: false,
            like: false,
            id: 0
          },
          {
            title: "稻花香",
            singer: "周杰伦",
            selected: true,
            like: false,
            id: 1
          },
          {
            title: "黄昏",
            singer: "吴其隆",
            selected: false,
            like: false,
            id: 2
          },
          {
            title: "喜刷刷",
            singer: "张伟",
            selected: false,
            like: true,
            id: 3
          }
      ]
    };
  }
  render() {
    let { data } = this.state;
    return (
      <BrowserRouter>
        <div id="musicApp">
          <Switch>
            <Route
              path="/add"
              render={e => {
                return <Add add={this.add} router={e} data={data}/>;
              }}
            />
            <Route
              path="/"
              render={({location}) => {
                if(!this.state.data.length){
                    return <Redirect  to="/add"/>
                }
                return (
                  <Home
                    data={data}
                    isCheckAll={this.isCheckAll()}
                    setCheckAll={this.setCheckAll}
                    setCheck={this.setCheck}
                    setLike={this.setLike}
                    remove={this.remove}
                    pathName={location.pathname.substring(1)}
                    listState={this.state.listState}
                    length={data.length}
                    removeSelect={this.removeSelect}
                    likeSelect={this.likeSelect}
                    cancelLink={this.cancelLink}
                  />
                );
              }}
            />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
  shouldComponentUpdate(nextProps, nextState) {
    let { listState, data } = nextState;
    let length = data.filter(item => {
      return item.like;
    }).length;
    if (!listState && !length) {
      this.setState({
        listState: true
      });
      return false;
    }
    return true;
  }

  add = (title, singer) => {
    let { data } = this.state;
    data.push({
      title,
      singer,
      selected: false,
      like: false,
      id: this.now++
    });
    this.setState({
      data
    });
  };

  isCheckAll = () => {
    let { data } = this.state;
    for (let i = 0; i < data.length; i++) {
      if (!data[i].selected) {
        return false;
      }
    }
    return true;
  };

  setCheckAll = checked => {
    let { data } = this.state;
    let newData = data.map((item, index) => {
      item.selected = checked;
      return item;
    });
    this.setState({ data: newData });
  };

  setCheck = (checked, id) => {
    let { data } = this.state;
    let newData = data.map(item => {
      if (item.id === id) {
        item.selected = checked;
      }
      return item;
    });
    this.setState({
      data: newData
    });
  };

  setLike = (checked, id) => {
    let { data } = this.state;
    let newData = data.map(item => {
      if (item.id === id) {
        item.like = checked;
      }
      return item;
    });
    this.setState({
      data: newData
    });
  };

  remove = id => {
    let { data } = this.state;
    let newData = data.filter(item => {
      return id !== item.id;
    });
    this.setState({
      data: newData
    });
  };

  removeSelect = () => {
    let { data } = this.state;
    let newData = data.filter((item, index) => {
      return !item.selected;
    });
    this.setState({
      data: newData
    });
  };

  likeSelect = () => {
    let { data } = this.state;
    let newData = data.map((item, index) => {
      if (item.selected) {
        item.like = true;
      }
      return item;
    });
    this.setState({
      data: newData
    });
  };
  cancelLink = () => {
    let { data } = this.state;
    let newData = data.map((item, index) => {
      if (item.selected) {
        item.like = false;
      }
      return item;
    });
    this.setState({
      data: newData
    });
  };
}

export default App;
