import React, { Component } from 'react';

export class SingleColumn extends Component {
    render() {
      let className = "completed"
      return (<td className={className}>Value</td>);
    }
}

 export class SingleRow extends Component {
  render() {
    let td = [];
    let column = this.props.column;
    for(let i = 0; i < column; i++) {
      td.push(<SingleColumn />)
    }
    return (
      <tr>
        {td}
      </tr>
    );
  }
}


export default class DynamicTable extends Component {
  render() {
    //here row and column will get from parents 
    let row = this.props.row;
    let column = this.props.column;
    let rows = [];
    for(let i = 0; i < row ; i++) {
      rows.push(<SingleRow column={column} />)
    }
    return (
      <table>
        {rows}
      </table>
    );
  }
}
