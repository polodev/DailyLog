  componentDidUpdate(prevProps, prevState) {
    if(this.props.questionsInfo.currentQuestionIndex != prevProps.questionsInfo.currentQuestionIndex) {
      let differenceBetweenTwoDiv = document.querySelector('.questionNumber__self').offsetTop - document.querySelector('.questionNumberWrapper').offsetTop
      if(differenceBetweenTwoDiv > 100) {
       $('.questionNumberWrapper').animate({scrollTop : (differenceBetweenTwoDiv - 50)}, 1000)
      }
    }
  }

//without jquery animation pure js
// let differenceBetweenTwoDiv = document.querySelector('.questionNumber__self').offsetTop - document.querySelector('.questionNumberWrapper').offsetTop
// if(differenceBetweenTwoDiv > 100) {
//   document.querySelector('.questionNumberWrapper').scrollTop = differenceBetweenTwoDiv - 50;
// }