import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Footer extends Component {
  render() {
    let {
      length,
      selectLength,
      likeLength,
      removeSelect,
      likeSelect,
      cancelLink,
      pathName
    } = this.props;
    return (
      <footer
        style={{
          display: length ? "block" : "none"
        }}
      >
        <div className="info">
          <span
            className="align-right"
            style={{
              display: selectLength ? "block" : "none"
            }}
          >
            当前选中 {selectLength}
            首歌曲
          </span>
          <span>
            共 {length}
            首歌曲
          </span>
        </div>
        <input
          type="button"
          value="删除选中歌曲"
          style={{
            display: selectLength ? "inline-block" : "none"
          }}
          onClick={() => {
            removeSelect();
          }}
        />
        <input
          type="button"
          value="收藏选中歌曲"
          style={{
            display: selectLength ? "inline-block" : "none"
          }}
          onClick={() => {
            likeSelect();
          }}
        />
        <input
          type="button"
          value="取消收藏选中歌曲"
          style={{
            display: selectLength ? "inline-block" : "none"
          }}
          onClick={() => {
            cancelLink();
          }}
        />
        <div style={{ display: pathName ? "inline-block" : "none" }}>
             <Link to="/">查看所有清单</Link>
        </div>
       

        <div style={{ display: likeLength && !pathName ? "inline-block" : "none" }}>
          <span>|</span>
          <Link to="/like">查看收藏清单</Link>
        </div>
      </footer>
    );
  }
}
