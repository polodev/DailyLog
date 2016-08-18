var profilesObject = [
  
  {
    name: 'name 1',
    image: 'http://placehold.it/200/200',
    description: "lorem ipsum dolor sit amet, consectetur adipisicing elit. natus, nemo!"
  },

  {
    name: 'name 2',
    image: 'http://placehold.it/200/200',
    description: "lorem ipsum dolor sit amet, consectetur adipisicing elit. natus, nemo!"
  },
  
  {
    name: 'name 3',
    image: 'http://placehold.it/200/200',
    description: "lorem ipsum dolor sit amet, consectetur adipisicing elit. natus, nemo!"
  }
  
]
var Row = React.createClass({
  getInitialState() {
    return {
      selectedProfile: {},
      toggleDescription: false
    };
  },
  handleShowDescription: function(profile){
    let toggleDescription = profile === this.state.selectedProfile ? !this.state.toggleDescription : true;
    this.setState({
      selectedProfile: profile,
      toggleDescription: toggleDescription
    });
    this.props.setActiveRow(this.props.index);
  },
  handleCloseDescription: function(){
    this.setState({
      selectedProfile: {},
      toggleDescription: false
    });    
  },
  render: function(){
    let profiles = this.props.profiles.map(function(item, index){
      
      let isSelected = 
        this.props.isActive && (item.name===this.state.selectedProfile.name);
      
      // console.log('isSelected',isSelected, item, this.state.selectedProfile);
      return(
        <Profile 
        key={index}
        profile={item}
        imageBaseURL={this.props.imageBaseURL}
        profilesPerRow={this.props.profiles.length}
        selected={isSelected}
        index={index+1}
        eventHandler = {this.props.eventHandler}
        toggleDescription = {this.state.toggleDescription}
        handleShowDescription={this.handleShowDescription}/>
        );
    },this);

    let description =   
    this.props.isActive && this.state.toggleDescription ?     
    <div className="row">
      <div className="col-md-12">
        <div className="sections">
          <div className="section well">
            <i className="fa fa-times closebutton pull-right"
            onClick={this.handleCloseDescription}
            ></i>
              <h4 className='text-center'>{this.state.selectedProfile.name}</h4>
              <hr className='center-block'/>

              <p dangerouslySetInnerHTML={{__html : this.state.selectedProfile.description}}></p>
          </div>
        </div>
      </div>
    </div> : null;
    return(
    <div>
      <div className='row'>
      <div className="col-md-12 hexagons">  
      {profiles}
      </div>
      </div>
      {description}
    </div>
    );
  }
});
          // <div style={{backgroundImage: 'url('+imgPath+')', width: '150px', height: '150px'}}></div>
var Profile = React.createClass({
  handleShowDescription: function(){
    this.props.handleShowDescription(this.props.profile);
  },
  render: function(){
  var imgPath = 'https://s3-ap-southeast-1.amazonaws.com/misc-host/ibgroup/images/team/profiles/'+this.props.profile.image;
  

  var className = this.props.selected ? 'hexagon active text-center' :  
  'hexagon text-center';
  var icon = this.props.selected && this.props.toggleDescription ? 
  <i className="fa fa-caret-up arrow-pointer animated fadeInUp 
  newJoiners-icon active" style={this.props.profile.college ? {bottom: '-36px'} : {bottom: '-36px'}}></i> :
  null;
  var college = null;
  // college = this.props.profile.college ? ' | '+this.props.profile.college : '';  
    return(
        <div className="col-md-3 col-sm-4 mb30" onClick={ this.props.eventHandler === "active" ? "" : this.handleShowDescription}>
            <img alt={this.props.profile.name} className="mb12 center-block img-responsive" src={imgPath} />
            <h6 className={this.props.eventHandler === "active" ? "hidden" : "uppercase mb0"}>
            {this.props.profile.name} 
            <span>{college}</span></h6>
            {icon}
        </div>

    );
  }

});

var ProfilesContainer = React.createClass({

  getInitialState() {
    return { 
      activeRow : -1, 
      numberOfProfile : 16,
      profilePerRow: window.innerWidth<768 ? 1 : window.innerWidth<992 ? 3 : 4,
      showLoadMore : true
    };
  },

  componentDidMount: function() {
    window.addEventListener('resize', this.handleResize);
  },

  setActiveRow: function(activeRow){
    this.setState({
      activeRow: activeRow,
    });
  },
  handleResize: function(){

    var profilesPerRow = window.innerWidth<768 ? 1 : window.innerWidth<992 ? 3 : 4;
    // console.log('handleResize', this.state.profilesPerRow) 
    this.setState({
      profilePerRow: profilesPerRow
    });
  },
  loadMoreHandler : function() {
    this.setState({
      numberOfProfile : this.state.numberOfProfile + 12 
    }, function(){
      if(this.state.numberOfProfile > this.props.profiles.length){
        this.setState({
          showLoadMore : false
        });
      }
    }.bind(this));
  },
  render: function() {
    let initialProfiles = this.props.profiles.slice(0, this.state.numberOfProfile);
    let profilesArray=[],rowProfiles=[],tempProfiles = [];
    let rows = [];
    let breakPoint = (Math.floor(initialProfiles.length/this.state.profilePerRow))*this.state.profilePerRow;
    profilesArray = initialProfiles.slice(0,breakPoint);

    let allRowsExceptLastRow = profilesArray.map(function(profile, index){
      tempProfiles.push(profile);
      if(tempProfiles.length%this.state.profilePerRow===0){
        rowProfiles = tempProfiles;
        tempProfiles = [];
        return(
        <div>
      <Row 
        profiles={rowProfiles}
        key={index}
        imageBaseURL={this.props.imageBaseURL}
        index={index}
        isActive={index===this.state.activeRow}
        setActiveRow={this.setActiveRow}/>
        </div>
        );
      }
    },this);

  profilesArray = initialProfiles.slice(breakPoint, initialProfiles.length);
  tempProfiles = [], rowProfiles = [];
  let rowIndex= (breakPoint/this.state.profilePerRow)+1;
  let lastRow = profilesArray.map(function(profile, index){
    tempProfiles.push(profile);
    if(index===profilesArray.length-1){
          return(
          <div>
        <Row 
          key={index}
          profiles={tempProfiles}
          imageBaseURL={this.props.imageBaseURL}
          index={rowIndex}
          isActive={rowIndex===this.state.activeRow}
          setActiveRow={this.setActiveRow}/>
          </div>
          );
    }
  },this);
  console.log("last row", lastRow);
  /*for fade out profile row*/
  let profilesForPreviewRow = this.props.profiles.slice(this.state.numberOfProfile, (this.state.numberOfProfile+ this.state.profilePerRow));
  let previewRow;
  if(profilesForPreviewRow.length >= this.state.profilePerRow ) {
     previewRow = profilesForPreviewRow.map(function(profile, index){
      tempProfiles.push(profile);
      if(tempProfiles.length%this.state.profilePerRow===0){
        rowProfiles = tempProfiles;
        tempProfiles = [];
        return(
        <div>
      <Row 
        profiles={rowProfiles}
        key={index}
        imageBaseURL={this.props.imageBaseURL}
        index={index}
        isActive={index===this.state.activeRow}
        eventHandler = {"active"}
        setActiveRow={this.setActiveRow}/>
        </div>
        );
      }
    },this);
  }
  if(profilesForPreviewRow.length < this.state.profilePerRow) {
     previewRow = profilesForPreviewRow.map(function(profile, index){
      tempProfiles.push(profile);
      if(index===profilesForPreviewRow.length-1){
            return(
            <div>
          <Row 
            profiles={tempProfiles}
            key={index}
            imageBaseURL={this.props.imageBaseURL}
            index={rowIndex}
            eventHandler = {"active"}
            isActive={rowIndex===this.state.activeRow}
            setActiveRow={this.setActiveRow}/>
            </div>
            );
      }
    },this);
  }

  let profiles = allRowsExceptLastRow.concat(lastRow);
    return(
      <div>
        {profiles}
        <div className={this.state.showLoadMore ? 'previewRowWrapper hexagons' : 'hidden'}>
          {previewRow}
          <div className="text-center previewRow">
            <button onClick={this.loadMoreHandler} className="btn btn-default">Load More ({this.props.profiles.length - this.state.numberOfProfile})</button>
          </div>
        </div>
      </div>
    );
  }
});

const IMAGE_BASE_URL = 'someLink';

ReactDOM.render(
  <ProfilesContainer profiles={profilesObject}
  imageBaseURL={IMAGE_BASE_URL}/>,
  document.getElementById('core-team-react')
);