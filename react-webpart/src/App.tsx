import * as React from 'react';
import WebPart from '../src/components/WebPart';
import './App.css';

class App extends React.Component {
  state = {
    description: "WebPart Description"
  }

  public render() {
    return (
      <div>
        <div className="container">
          <WebPart description={this.state.description} />      
        </div>   
      </div>  
    );
  }
}

export default App;
