  boxPlot : {
    selectedTrainee: {},
    data: []
  }

export default function traineeDetailsInfoReducer (state = traineeDetailsInfo, action) {
  switch (action.type) {
    case TraineeDetailsConstants.SET_BOX_PLOT_RESPONSE:
      // let boxPlot = state.boxPlot;
      //   boxPlot.data = action.response;
      return Object.assign({},
        state,
        {
          boxPlot : {
	  //this is the new syntax instead of mutating we will do this way
            ...state.boxPlot,
            data: action.response
          }
        }
      );

    }
}
