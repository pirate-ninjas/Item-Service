import React from 'react';
import PhotoGal from './PhotoGal';
import PhotoNav from './PhotoNav';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        If you can see this, React is working.
        <div className="media-wrapper">
          <div className="inner-wrapper">
            <PhotoGal />
            <PhotoNav />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
