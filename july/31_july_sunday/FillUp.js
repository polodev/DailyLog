import React, { Component } from 'react';
//text and answer will come From  api call
var text = "The militants involved in the | at Holey | of Gulshan, Sholakia in Kishoreganj and the Kalyanpur raid, share an unusual similarity; seven of | were affluent young adults from privileged backgrounds. They were | of private, English | schools and universities. The question haunting everyone is why and how these youths are | out to be militants."
var answer = [ "attacks",  "Artisan", "them", "students" , "medium", "turning"  ]

export default class FillUp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      gaps : {

      }
    }
  }
  componentDidMount() {
    var numberOfGap = answer.length ;
    var gaps = {};
    for(var i = 0; i < numberOfGap; i++ ) {
      gaps['gap_' + i] = 'hello';
    }
    this.setState({gaps : gaps});
  }
  changedText (string) {
    var words = string.split(/\s/);
    var indexOfPipe = 0;
    var NewText = "";
    words.forEach(function(word, index){
      if(word === '|') {
        NewText += " " + '<input placeholder="Enter Answer" type="text" name="" id=gap_'+ indexOfPipe +'>' + " ";
        indexOfPipe++;
      }else {
        NewText += " " +  word + " " ;
      }
    });
    return NewText;
  }
  render() {
    console.log("all state", this.state);
    var textWithInputField = this.changedText(text);
    return <div dangerouslySetInnerHTML={{__html: textWithInputField}} />
  }
}
