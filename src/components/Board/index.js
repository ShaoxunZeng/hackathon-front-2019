import {PureComponent} from "react";
import React from "react";
import styles from "./index.module.less";
import Square from "./square";
import Chess from "./Chess";

const LENGTH_PERCENTAGE = 100/14;
const calculate = (x, y) => {
  return {top: x * LENGTH_PERCENTAGE, left: y * LENGTH_PERCENTAGE}
};

class Board extends PureComponent {
  render() {
    const {maps} = this.props;
    const rows = new Array(14).fill(0);
    const columns = new Array(14).fill(0);
    return (
        <div className={styles.whole}>
          <div className={styles.column}>
            {columns.map(() => {
              return (
                  <div className={styles.row}>
                    {rows.map(() => {
                      return <Square/>
                    })}
                  </div>
              )
            })}
          </div>
          {maps[0].positions.map((position) => {
            const {left, top} = calculate(position.x, position.y);
            return (
                <div key={position.x + "_" + position.y}
                     style={{position: "absolute", top: `${top}%`, left: `${left}%`}}>
                  <Chess type="green"/>
                </div>
            )
          })}
          {maps[1].positions.map((position) => {
            const {left, top} = calculate(position.x, position.y);
            return (
                <div key={position.x + "_" + position.y}
                     style={{position: "absolute", top: `${top}%`, left: `${left}%`}}>
                  <Chess type="blue"/>
                </div>
            )
          })}
        </div>
    )
  };
}

export default Board;
