  componentDidUpdate(prevProps, prevState) {
      //first get the hight of parents or grandparents height and make it half
    let heightOfLC = $('#learningCard__mainContainer').height() / 2;
    //the element(child) which i make to vertical center. get the height and make it height
    let heightOfMI = $('#multimediaItem').height() / 2;
    // subtract child height(half) from parent height(half); 
    let heightOfLCAndMI = heightOfLC - heightOfMI ;
    // marginTop this value from child element
    $('#multimediaItem').css("margin-top", heightOfLCAndMI);

  }
