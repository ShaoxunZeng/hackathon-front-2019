import {PureComponent} from "react";
import React from "react";
import styles from "./index.module.less";
import {NavLink} from "react-router-dom";
import WithHeaderFooter from "../../components/WithHeaderFooter";
import Board from "../../components/Board";

const maps = [
  {
    id: 100,
    positions: [{
      x: 5,
      y: 7
    },{
      x: 8,
      y: 6
    },{
      x: 4,
      y: 6
    },{
      x: 4,
      y: 7
    },{
      x: 5,
      y: 9
    },{
      x: 6,
      y: 7
    },{
      x: 0,
      y: 7
    }]
  },
  {
    id: 102,
    positions: [{
      x: 6,
      y: 7
    },{
      x: 5,
      y: 9
    },{
      x: 6,
      y: 6
    },{
      x: 6,
      y: 7
    },{
      x: 7,
      y: 6
    }]
  }
];

class Onplay extends PureComponent {
  render() {
    return (
        <div className={styles.whole}>
          <Board maps={maps}/>
        </div>
    )
  };
}

export default WithHeaderFooter(Onplay);
