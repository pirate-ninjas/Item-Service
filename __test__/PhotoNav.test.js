/* eslint-disable comma-dangle */
/* global describe, test, expect */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';

// eslint-disable-next-line object-curly-newline
import { render, screen } from '@testing-library/react';

import '@testing-library/jest-dom/extend-expect';
// import 'core-js/stable';
// import 'regenerator-runtime/runtime';
import '@babel/polyfill';
import App from '../client/src/components/App';
import PhotoNav from '../client/src/components/PhotoNav';

describe('PhotoNav', () => {
  // test('debug', () => {
  //   render(
  //     <App>
  //       <PhotoNav />
  //     </App>
  //   );
  //   screen.debug();
  // });

  test('loads and displays main image', () => {
    render(
      <App>
        <PhotoNav />
      </App>
    );

    expect(screen.getByAltText('navImg0')).toBeInTheDocument();
  });
});
