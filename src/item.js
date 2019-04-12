import React, { Component } from "react";

export default class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let { item, remove, setCheck, setLike } = this.props;
    return (
      <tr className={(item.selected?"selected":"")+(item.like?" like":"")}>
        <td>
          <input
            type="checkbox"
            checked={item.selected}
            onChange={e => {
              setCheck(e.target.checked, item.id);
            }}
          />
        </td>
        <td>{item.title}</td>
        <td>{item.singer}</td>
        <td>
          <input type="checkbox" checked={item.like} 
          onChange={(e)=>{
              setLike(e.target.checked,item.id)
          }}
          />
        </td>
        <td>
          <a
            onClick={() => {
              remove(item.id);
            }}
          >
            X
          </a>
        </td>
      </tr>
    );
  }
}
