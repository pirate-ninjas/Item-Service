/* eslint-disable comma-dangle */
/* eslint-disable react/jsx-filename-extension */
/* global describe, test, expect */
import React from 'react';

// eslint-disable-next-line object-curly-newline
import { render, screen } from '@testing-library/react';

import '@testing-library/jest-dom/extend-expect';
// import 'core-js/stable';
// import 'regenerator-runtime/runtime';
import '@babel/polyfill';
import App from '../client/src/components/App';
import PhotoGal from '../client/src/components/PhotoGal';

describe('PhotoGal', () => {
  // test('debug', () => {
  //   render(
  //     <App>
  //       <PhotoGal />
  //     </App>
  //   );
  //   screen.logTestingPlaygroundURL();
  // });

  test('loads and displays main image', () => {
    render(
      <App>
        <PhotoGal />
      </App>
    );

    expect(screen.getByAltText('galImg0')).toBeInTheDocument();
  });
});
