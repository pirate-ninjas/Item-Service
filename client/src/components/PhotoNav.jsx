/* eslint-disable camelcase */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import React from 'react';
// import App from './App';

const PhotoNav = (props) => {
  const { items } = props;
  const { html_url } = items.options_selector.thumbnails;

  return (
    <nav className="photo-nav">
      {html_url.map((url, index) => (
        <a
          data-testid={`navImg${index} a`}
          key={index}
          href={`#image-${index}`}
        >
          <img
            data-testid={`navImg${index}`}
            className="photo-nav__img"
            src={url}
            alt={`navImg${index}`}
          />
        </a>
      ))}
    </nav>
  );
};

export default PhotoNav;
