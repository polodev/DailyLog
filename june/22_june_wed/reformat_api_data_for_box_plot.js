var selectedTrainee = 3,
      data = [
      {
        roundName : 'Round 1',
        minimumScore : 0,
        maximumScore : 100,
        traineeScoreDetails: [
          {
            traineeId : 1,
            score : 80
          },
          {
            traineeId : 2,
            score : 30
          },
          {
            traineeId : 3,
            score : 40
          },
          {
            traineeId : 1,
            score : 80
          }
        ],
        lowerRangeScore : 10,
        upperRangeScore : 85
      },{
        roundName : 'Round 2',
        minimumScore : 10,
        maximumScore : 80,
        traineeScoreDetails: [
          {
            traineeId : 1,
            score : 80
          },
          {
            traineeId : 2,
            score : 30
          },
          {
            traineeId : 3,
            score : 40
          },
          {
            traineeId : 1,
            score : 80
          }
        ],
        lowerRangeScore : 15,
        upperRangeScore : 70
      },{
        roundName : 'Round 3',
        minimumScore : 0,
        maximumScore : 100,
        traineeScoreDetails: [
          {
            traineeId : 1,
            score : 80
          },
          {
            traineeId : 2,
            score : 30
          },
          {
            traineeId : 3,
            score : 40
          },
          {
            traineeId : 1,
            score : 80
          }
        ],
        lowerRangeScore : 20,
        upperRangeScore : 80
      },{
        roundName : 'Round 4',
        minimumScore : 10,
        maximumScore : 120,
        traineeScoreDetails: [
          {
            traineeId : 1,
            score : 80
          },
          {
            traineeId : 2,
            score : 30
          },
          {
            traineeId : 3,
            score : 40
          },
          {
            traineeId : 1,
            score : 80
          }
        ],
        lowerRangeScore : 15,
        upperRangeScore : 75
      }

    ]

function filterSelectedTraineeScore(array, traineeId) {
  let filterArray =  array.filter(function (trainee) {
    return trainee.traineeId === selectedTrainee;
  })
  return filterArray[0].score;
}
var newData = data.map(function (round){
  return {
      roundName : round.roundName,
      minimumScore : round.minimumScore,
      maximumScore : round.maximumScore,
      userScore : filterSelectedTraineeScore(round.traineeScoreDetails, selectedTrainee),
      lowerRangeScore : 10,
      upperRangeScore : 85
  }
})
console.log(newData);