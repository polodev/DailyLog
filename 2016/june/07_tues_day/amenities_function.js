some amenities function I wrote which will be needed in future

  categorizedAmenities(facilities, amenitiesList) {
    let splitFacilities = facilities.split(',');
    let categorizedAmenities = {};
    splitFacilities.forEach((facility) => {
      if(facility) {
        let amenity = this.getAmenityById(amenitiesList, facility);
        let category = amenity.category;
        if(!categorizedAmenities.hasOwnProperty(category)){
          categorizedAmenities[category] = [];
        }
        categorizedAmenities[category].push(amenity.name)
      }
    })
    return categorizedAmenities;
  }

  getAmenityById (amenitiesList, amenityId) {
    let filteredList = amenitiesList.filter( amenity => amenity.id == amenityId);
    let name = filteredList.length > 0 ? filteredList[0].name : -1;
    let category = filteredList.length > 0 ? filteredList[0].category : -1;
    let nameAndCategory = {
      name : name,
      category : category
    }
    // return nameAndCategory;
    return filteredList[0];
  }
  categorizedAmenitiesDom(categorizedAmenities) {
    let categorizedAmenitiesDom = [];
    for(let categories in categorizedAmenities){
      let categoriesDom =
              <h4>{categories}</h4>
              <div className='row food-beverage-types'>

      categorizedAmenitiesDom.push(categoriesDom);
      categorizedAmenities[categories].forEach((category) => {
        let facilityDom =
              <div className='col-md-4'>
                <i className="material-icons md-18">done</i>
                {category}
              </div>
        categorizedAmenitiesDom.push(facilityDom);
      })
        categorizedAmenitiesDom.push(</div>);
    }
  }
