first view >
// delete GLOBAL.XMLHttpRequest;
let components = [];
components.push(<OneView key="0" store={this.props.courseStore}/>);
components.push(<SecondView key="1" store={this.props.kontestStore}/>);
return(
  <SegmentedControlWrapper
    segments = {segments}
    components = {components}/>
)
//SegmentedControlWrapper 
//for swiper
<Swiper
  ref="swiper"
  loop={false}
  onMomentumScrollEnd={this._onMomentumScrollEnd} //it will change the state so that I can change the segment menu.
  onTouchEnd = {this.onTouchEnd} //no use of this. I will delete it 
  width = {this.state.width}
  height = {this.state.height-80}
  next={()=>{}}
  prev={()=>{}}
  showsPagination={false}>
  {this.props.components}
</Swiper>

  _onMomentumScrollEnd(e, state, context) {
    let pageIndex = this.state.index;
    let swiperIndex = state.index;
    if(pageIndex !== swiperIndex) {
      this.setState({
        index : swiperIndex
      });
    }
  }
  //in order to change swiper based on menu index following code
  functionForChangingSwiperComponent(index){
    if(this.state.index < index){
      this.refs.swiper.scrollBy(1);
    }else{
      this.refs.swiper.scrollBy(-1);
    }
    this.setState({
      index: index
    });
  }
