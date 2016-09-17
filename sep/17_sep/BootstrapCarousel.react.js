import React, { Component } from 'react';
class CarouselIndicator extends Component {
  render () {
    const {items} = this.props;
    var carouselIndicator = items.map(function(item, index) {
      var className = index === 0 ? 'active' : "";
      console.log("className", className);
      return <li data-target="#myCarousel" key={index} data-slide-to={index} class={className}></li>
    })
    return (
            <ol className="carousel-indicators">{carouselIndicator}</ol>
      );
  }
}
class CarouselItem extends Component {
  render () {
    const {item, index} = this.props;
    var itemClassName = index == 0 ? "item active" : "item";
    var slideClassName  = "slideImage slideImage_" + index;
    return (
          <div className={itemClassName}>
          { //now instead of using dynamic image going to use background image. If I want to use image in this case it need to be like following
            //  <img className="img-responsive" src={item.image} alt="Slide"/>
          }
            <div className={slideClassName}></div>
              <div className="carousel-caption">
                  <h3>{item.title}</h3>
                  <h4>{item.date}</h4>
              </div>
          </div>

      )
  }
}

class CarouselInner extends Component {
  render () {
    const {items} = this.props;
    var carouselInner = items.map(function(item, index) {
      return <CarouselItem key={index} index={index} item={item} />
    })
    return (
          <div className="carousel-inner">
            {carouselInner}
          </div>
      )
  }
}

export default class ITMCarousel extends Component {
  render() {
    var carouselIndicator = <CarouselIndicator items={this.props.items} />
    var carouselInner = <CarouselInner items={this.props.items} />
    return (
        <div id="myCarousel" className="carousel slide">
            {carouselIndicator}
            {carouselInner}
             <a className="carousel-control left" href="#myCarousel" data-slide="prev">&lsaquo;</a>
             <a className="carousel-control right" href="#myCarousel" data-slide="next">&rsaquo;</a>
        </div>
    );
  }
}

//json object will be look like this
var items = [
{
	title : "some dummy title",
	date : "some date",
	image : "http://image_link.com/..."
	content : "some html content for setting by dangerously set inner html"
},
{
	title : "some dummy title",
	date : "some date",
	image : "http://image_link.com/..."
	content : "some html content for setting by dangerously set inner html"
},
{
	title : "some dummy title",
	date : "some date",
	image : "http://image_link.com/...",
	content : "some html content for setting by dangerously set inner html"
},

] 
