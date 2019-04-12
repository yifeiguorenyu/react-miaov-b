import React, { Component } from "react";
import { Route, Switch, Link, Redirect } from "react-router-dom";
import Main from "./main";
import Footer from "./footer";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let selectData = this.props.data.filter(item => item.selected);
    let likeData = this.props.data.filter(item => item.like);
    let { data, pathName, ...rest } = this.props;
    return (
      <div style={{ position: "relative" }}>
        <header>
          <h2 className="title">{pathName ? "收藏列表" : "播放列表"}</h2>
        </header>

        <Link to="/add" className="addLink">
          添加歌曲
        </Link>

        <Switch>
          <Route
            path="/like"
            render={() => {
              if (!likeData.length) {
                return <Redirect to="/" />;
              }
              return <Main data={likeData} {...rest} />;
            }}
          />
          <Route
            path="/"
            render={() => {
              return <Main {...this.props} />;
            }}
          />
        </Switch>

        <Footer
          length={data.length}
          selectLength={selectData.length}
          removeSelect={this.props.removeSelect}
          likeSelect={this.props.likeSelect}
          cancelLink={this.props.cancelLink}
          likeLength={likeData.length}
          pathName={pathName}
        />
      </div>
    );
  }
}
