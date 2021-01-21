/* eslint-disable react/destructuring-assignment */
import axios from 'axios';
import React from 'react';
import PhotoGal from './PhotoGal';
import PhotoNav from './PhotoNav';
import Zoom from './Zoom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
    this.getItems = this.getItems.bind(this);
  }

  getItems() {
    axios.get('/api/items')
      .then(({ data }) => {
        this.setState({ items: data });
      });
  }

  render() {
    return (
      <div>
        If you can see this, React is working.
        <div id="media-wrapper">
          <div className="inner-wrapper">
            <PhotoGal items={this.state.items} />
            {/* <Zoom /> */}
            <PhotoNav items={this.state.items} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
