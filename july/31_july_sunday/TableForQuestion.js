var tableData = [
  "hello", "world", "dhaka", "chittagong", "barishal", "khulna", "california", "NY", "florida", "orlando", "mumbai", "delhi", "hyderabad"
]
import React, { Component } from 'react';
var chunk = require('lodash/chunk');

export default class TableForQuestion extends Component {
  render() {
    let {tableData, noOfColumn} = this.props;
    let newTableData = chunk(tableData, noOfColumn)
    let rows = newTableData.map((rowData, index) => {
      return <RenderTr noOfColumn={noOfColumn} rowData={rowData} key={index} />
    });
    return (
        <table className="table table-bordered">
          <tbody>
            {rows}
          </tbody>
        </table>
    );
  }
}


class RenderTr extends Component {
  render() {
    let {rowData, noOfColumn} = this.props;
    let row =  rowData.map((columnData, index) => {
      return <RenderTd columnData={columnData} key={index} />
    });
    for(let i = 0; i < (noOfColumn - row.length) ; i++ ) {
      row.push(<RenderTd columnData="" key={i + 100} />)
    }
    if(row.length != noOfColumn) {
      row.push(<RenderTd columnData="" />)
    }
    return <tr>{row}</tr>
  }
}

class RenderTd extends Component {
  render() {
    let columnData = this.props.columnData;
    return <td>{columnData}</td>
  }
}
