/* eslint-disable jsx-a11y/mouse-events-have-key-events */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import React from 'react';
// import Zoom from './Zoom';
import rafSchedule from 'raf-schd';
// const throttle = require('lodash.throttle');

class PhotoGal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lensX: 0,
      lensY: 0,
      isVisible: 'hidden',
      currentImgSrc: null,
      galImgWidth: 0,
      galImgHeight: 0,
      // mouseX: 0,
      // mouseY: 0,
    };
    this.handleMagnify = this.handleMagnify.bind(this);
    this.onEnter = this.onEnter.bind(this);
    this.onLeave = this.onLeave.bind(this);
    this.schedule = rafSchedule((update) => this.setState(update));
  }

  handleMagnify(e) {
    const lensX = e.clientX;
    const lensY = e.clientY;
    const galImgWidth = e.target.width;
    const galImgHeight = e.target.height;
    // const mouseX = e.pageX;
    // const mouseY = e.pageY;

    this.schedule({
      lensX, lensY, galImgWidth, galImgHeight,
    });
  }

  onEnter(e) {
    const currentImgSrc = e.target.currentSrc;
    this.setState({ currentImgSrc, isVisible: 'visible' });
  }

  onLeave() {
    this.setState({ isVisible: 'hidden' });
  }

  render() {
    const {
      lensX, lensY, currentImgSrc, galImgWidth, galImgHeight, isVisible,
    } = this.state;
    const { items } = this.props;
    const { photos } = items[0];
    // console.log('lens: ', lensX, lensY);
    // console.log('position :', galImgWidth, galImgHeight);

    return (
      <div className="gallery" data-testid="gallery" onMouseMove={this.handleMagnify} onMouseEnter={this.onEnter} onMouseLeave={this.onLeave}>
        {photos.map((photo, index) => (
          <img
            data-testid={`galImg${index}`}
            key={index}
            id={`image-${index}`}
            className="gallery__img"
            src={photo}
            alt={`galImg${index}`}
          />
        ))}
        <div
          className="zoom-lens"
          data-testid="zoom-lens"
          style={{
            visibility: `${isVisible}`,
            cursor: 'none',
            position: 'absolute',
            border: `${1}px solid #d4d4d4`,
            width: `${153}px`,
            height: `${225}px`,
            left: `${lensX - 350}px`,
            top: `${lensY - 125}px`,
          }}
        />
        <div
          className="zoom-result"
          data-testid="zoom-result"
          style={{
            visibility: `${isVisible}`,
            display: 'block',
            position: 'absolute',
            width: `${400}px`,
            height: `${557}px`,
            top: `${0}px`,
            left: `${780}px`,
            zIndex: 10,
            backgroundImage: `url(${currentImgSrc})`,
            backgroundPosition: `${-lensX + 375}px ${-lensY + 250}px`,
            backgroundSize: `${galImgWidth * 1.5}px ${galImgHeight * 1.5}px`,
            backgroundRepeat: 'no-repeat',
          }}
        />
      </div>
    );
  }
}

// console.log(this.imgEl.height)

export default PhotoGal;
