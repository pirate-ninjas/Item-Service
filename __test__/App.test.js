/* global describe, test, expect */
/* eslint-disable comma-dangle */
/* eslint-disable arrow-body-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
import React from 'react';

import { rest } from 'msw';
import { setupServer } from 'msw/node';

// eslint-disable-next-line object-curly-newline
import { render, waitFor, screen } from '@testing-library/react';
// import { StateMock } from '@react-mock/state';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
// import 'core-js/stable';
// import 'regenerator-runtime/runtime';
import '@babel/polyfill';
import App from '../client/src/components/App';
import PhotoGal from '../client/src/components/PhotoGal';
import PhotoNav from '../client/src/components/PhotoNav';

describe('App', () => {
  const server = setupServer(

    rest.get('/api/items/0', (req, res, ctx) => {
      return res.name(ctx.json({
        brand: {
          name: 'Yeti',
          html_url: 'https://yeti.com',
        },
        options_selector: {
          thumbnails: {
            html_url: [
              'https://source.unsplash.com/enDaxoMxqEw/104x78',
              'https://source.unsplash.com/a3Y8K0-DI8M/104x78',
              'https://source.unsplash.com/FtZ0qrRnuS0/104x78',
              'https://source.unsplash.com/UQfdObKFl4Q/104x78',
              'https://source.unsplash.com/sFXJnueBNDo/104x78',
              'https://source.unsplash.com/3BDtb6DEXFk/104x78',
              'https://source.unsplash.com/mYn4bfLh2ic/104x78',
              'https://source.unsplash.com/8S7ZoRyYOTY/104x78',
            ],
          },
          color: [
            'navy',
            'white',
            'tan',
            'pink',
            'blue',
            'olive',
            'salmon',
            'mint green',
            'sky blue',
            'yellow',
            'red',
          ],
          size: 65,
          pieces_count: 1,
          item_kind: 'Roto-Molded',
        },
        photos: [
          'https://source.unsplash.com/enDaxoMxqEw/764x554',
          'https://source.unsplash.com/a3Y8K0-DI8M/764x554',
          'https://source.unsplash.com/FtZ0qrRnuS0/764x554',
          'https://source.unsplash.com/UQfdObKFl4Q/764x554',
          'https://source.unsplash.com/sFXJnueBNDo/764x554',
          'https://source.unsplash.com/3BDtb6DEXFk/764x554',
          'https://source.unsplash.com/mYn4bfLh2ic/764x554',
          'https://source.unsplash.com/8S7ZoRyYOTY/764x554',
        ],
        cart: {
          quantity_selector: 3,
        },
        _id: '6009c607675ce07cc5b6b3bd',
        itemId: 0,
        product_id: 90166,
        name: 'Yeti Tundra 65qt Cooler',
        model: 'Tundra 65',
        product_rating: 3.6,
        price: '$349.98',
        features: 'Keeps beer cold.',
        about_brand: 'We got here first.',
        __v: 0,
      }));
    }),

  );

  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  test('loads and displays react message', () => {
    render(<App />);

    expect(screen.getByText('If you can see this, React is working.')).toBeInTheDocument();
  });

  test('loads and displays image on click', async () => {
    render(
      <App url="/api/items/0">
        <PhotoGal />
        <PhotoNav />
      </App>
    );

    userEvent.click(screen.getByAltText('navImg0'));

    await waitFor(() => screen.getByAltText('galImg0'));

    expect(screen.getByAltText('galImg0')).toHaveAttribute('src');
  });

  test('handlers server error', async () => {
    server.use(
      rest.get('/api/items', (req, res, ctx) => {
        return res(ctx.status(500));
      }),
    );

    render(
      <App url="/api/items/0">
        <PhotoGal />
        <PhotoNav />
      </App>
    );

    userEvent.click(screen.getByAltText('navImg0'));

    await waitFor(() => screen.getByAltText('galImg0'));

    expect(screen.getByAltText('galImg0')).not.toHaveAttribute('style');
  });

  test('zoom window appears when moused over', async () => {
    render(
      <App url="/api/items/0">
        <PhotoGal />
        <PhotoNav />
      </App>
    );

    userEvent.hover(screen.getByAltText('galImg0'));
    expect(await screen.findByTestId('zoom-result')).toBeInTheDocument();
  });

  // test('state is updated after GET', async () => {
  //   render(<App />);

  //   expect(await screen.findByText('6009c607675ce07cc5b6b3bd')).toBeInTheDocument();
  // });
});
