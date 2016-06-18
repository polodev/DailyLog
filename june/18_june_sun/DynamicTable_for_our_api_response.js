import React, { Component } from 'react';
export class SingleTd extends Component {
  render() {
    let className ;
    switch(this.props.singleTopic.topicStatus) {
      case 'in progress':
        className = "inProgress";
        break;
      case 'completed':
        className = "completed";
        break;
      default:
        className = "notEntered";
        break;
    }
    return (
      <td data-value={this.props.singleTopic.topicStatus} className={className}>
        <div className="tooltip">{this.props.singleTopic.topicStatus}</div>
      </td>);
  }
}

export class SingleTh extends Component {
  render() {
    let subject = this.props.subject ? this.props.subject : "";
    let className = subject ? subject : 'studentNameEmpty';
    return (
      <th className="className">{subject}</th>
    );
  }
}

export class FirstRow extends Component {
  render() {
    let td = [];
    td.push(<SingleTh key={0} />)
    this.props.prepareData.subjectNames.forEach((subject , index) => {
      td.push(<SingleTh key={index + 1} subject={subject} />)
    })
    return (
        <tr className="firstRow">
          {td}
        </tr>
      );
  }
}


export class FirstTd extends Component {
  render() {
    return (<td className="studentName"><i className="material-icons">person</i> <span> {this.props.studentName} </span></td>);
  }
}

export class SingleTr extends Component {
  render() {
    let td = [];
    td.push(<FirstTd key={0} studentName={this.props.prepareData.studentNames[this.props.index]} />);
    this.props.singleStudent.topicDetails.forEach((singleTopic, index) => {
      td.push(<SingleTd singleTopic = {singleTopic} key={index + 1} />)
    });

    return (
      <tr>
        {td}
      </tr>
    );
  }
}
export default class DynamicTable extends Component {
  render() {
    let rows = [];
    //first row will be the name of the subject
    rows.push(<FirstRow key={0} prepareData={this.props.prepareData} />)
    this.props.data.forEach((singleStudent, index) => {
      console.log("index ", index);
      rows.push(<SingleTr key={index + 1} index={index} prepareData={this.props.prepareData} singleStudent={singleStudent} /> )
    }) ;
    return (
        <table>
          <tbody>
            {rows}
          </tbody>
        </table>
    );
  }
}

/**
 * Input of the Dynmic Table
 */
 {
  "data": [
    {
      "traineeName": "student1",
      "topicDetails": [
        {
          "topicName": "Module 1",
          "topicStatus": "not entered"
        },
        {
          "topicName": "Module 2",
          "topicStatus": "not entered"
        },
        {
          "topicName": "Module 3",
          "topicStatus": "in progress"
        },
        {
          "topicName": "Module 4",
          "topicStatus": "completed"
        }
      ]
    },
    {
      "traineeName": "student2",
      "topicDetails": [
        {
          "topicName": "Module 1",
          "topicStatus": "not entered"
        },
        {
          "topicName": "Module 2",
          "topicStatus": "completed"
        },
        {
          "topicName": "Module 3",
          "topicStatus": "in progress"
        },
        {
          "topicName": "Module 4",
          "topicStatus": "completed"
        }
      ]
    }
  ],
  "prepareData": {
    "studentNames": [
      "student1",
      "student2",
    ],
    "subjectNames": [
      "Module 1",
      "Module 2",
      "Module 3",
      "Module 4"
    ],
    "numberOfStudent": 2,
    "numberOfSubjects": 4
  }
}