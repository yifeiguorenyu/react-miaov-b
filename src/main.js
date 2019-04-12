import React, { Component } from "react";
import Item from "./item";

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let {
      data,
      isCheckAll,
      remove,
      setCheck,
      setCheckAll,
      setLike
    } = this.props;
    return (
      <table
        className="main"
        style={{ display: data.length ? "table" : "none" }}
      >
        <thead>
          <tr>
            <th>
              <input
                type="checkbox"
                id="checkAll"
                checked={isCheckAll}
                onChange={e => {
                  setCheckAll(e.target.checked);
                }}
              />
              <label htmlFor="checkAll">全选</label>
            </th>
            <th>歌曲</th>
            <th>歌手</th>
            <th>收藏</th>
            <th>删除</th>
          </tr>
        </thead>
        <tbody>
          {data.map(item => {
            return (
              <Item
                key={item.id}
                item={item}
                setCheck={setCheck}
                setLike={setLike}
                remove={remove}
              />
            );
          })}
        </tbody>
      </table>
    );
  }
}
