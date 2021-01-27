/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import React from 'react';
// import Zoom from './Zoom';
const throttle = require('lodash.throttle');

class PhotoGal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lensX: 0,
      lensY: 0,
      // showBox: false,
      currentImgSrc: null,
      galImgWidth: 0,
      galImgHeight: 0,
      mouseX: 0,
      mouseY: 0,

    };
    // this.imageZoom = this.imageZoom.bind(this);
    // this.moveLens = this.moveLens.bind(this);
    // this.getCursorPos = this.getCursorPos.bind(this);
    this.magnify = this.magnify.bind(this);
    this.onEnter = this.onEnter.bind(this);
    this.handleSize = this.onEnter.bind(this);
    this.magnifyThrottled = throttle(this.magnify, 40);
    this.onEnterThrottled = throttle(this.onEnter, 40);
    // this.handleSizeThrottled = throttle(this.handleSize, 30);
  }

  componentDidMount() {
  }

  // handleBoxToggle(currentImg) {

  //   const { showBox } = this.state;
  //   this.setState({ showBox: !showBox, currentImgSrc: currentImg });
  // }

  // handleSize(width, height) {
  //   // const { galImgWidth, galImgHeight } = this.state;
  //   this.setState({ galImgWidth: width, galImgHeight: height });
  // }

  onEnter(e) {
    const currentImgSrc = e.target.currentSrc;
    this.setState({ currentImgSrc });
    // this.handleBoxToggle(currentImgSrc);
  }

  // onLeave() {
  //   const { showBox } = this.state;
  //   this.setState({ showBox: !showBox });
  // }

  magnify(e) {
    const lensX = e.clientX;
    const lensY = e.clientY;
    const galImgWidth = e.target.width;
    const galImgHeight = e.target.height;
    // const mouseX = e.pageX;
    // const mouseY = e.pageY;

    throttle(this.setState({
      lensX, lensY, galImgWidth, galImgHeight,
    }), 1000);
    // this.handleSize();
    // mouseX, mouseY
  }

  render() {
    const {
      // eslint-disable-next-line no-unused-vars
      lensX, lensY, currentImgSrc, galImgWidth, galImgHeight, mouseX, mouseY,
    } = this.state;
    const { items } = this.props;
    const { photos } = items[0];
    // console.log(lensX, lensY);
    // if (items.length < 2) {
    //   return null;
    // }
    return (
      <div className="gallery" data-testid="gallery">
        {photos.map((photo, index) => (
          <img
            data-testid={`galImg${index}`}
            key={index}
            id={`image-${index}`}
            className="gallery__img"
            onMouseEnter={this.onEnterThrottled}
            // onMouseLeave={this.handleBoxToggle}
            onMouseMove={this.magnifyThrottled}
            src={photo}
            alt={`galImg${index}`}
          />
        ))}
        <div
          className="zoom-lens"
          data-testid="zoom-lens"
          style={{
            position: 'absolute',
            border: `${1}px solid #d4d4d4`,
            width: `${153}px`,
            height: `${225}px`,
            left: `${lensX - 250}px`,
            top: `${lensY - 30}px`,
            cursor: 'none',
          }}
        />
        <div
          className="zoom-result"
          data-testid="zoom-result"
          style={{
            display: 'block',
            position: 'absolute',
            width: `${400}px`,
            height: `${557}px`,
            top: `${0}px`,
            left: `${780}px`,
            zIndex: 10,
            backgroundImage: `url(${currentImgSrc})`,
            backgroundPosition: `${lensX - 250}px ${lensY - 321}px`,
            backgroundSize: `${galImgWidth}px ${galImgHeight}px`,
            backgroundRepeat: 'no-repeat',
          }}
        />
      </div>
    );
  }
}

// console.log(this.imgEl.height)

export default PhotoGal;
