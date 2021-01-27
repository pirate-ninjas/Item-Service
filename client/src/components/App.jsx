/* eslint-disable arrow-body-style */
import axios from 'axios';
import React from 'react';
import PhotoGal from './PhotoGal';
import PhotoNav from './PhotoNav';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [{
        photos: [''],
        options_selector: {
          thumbnails: {
            html_url: [''],
          },
        },
      }],
    };
    this.getItems = this.getItems.bind(this);
  }

  componentDidMount() {
    this.getItems();
  }

  getItems() {
    axios.get('/api/products/0/item')
      .then(({ data }) => {
        this.setState({ items: data });
      })
      .catch((error) => {
        return error;
      });
  }

  render() {
    const { items } = this.state;
    // console.log(items[0]._id);
    return (
      <div>
        {/* If you can see this, React is working. */}
        <div id="media-wrapper">
          <div className="inner-wrapper">
            <PhotoGal items={items} />
            <PhotoNav items={items[0]} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
