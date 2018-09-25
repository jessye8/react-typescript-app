import * as React from 'react';
import * as ReactDOM from 'react-dom';
import WebPart from '../src/components/WebPart';
import AdminGear from '../src/components/AdminGear';
import registerServiceWorker from './registerServiceWorker';
import "../src/components/WebPart.css";

const description: string = "WebPart Description";

ReactDOM.render(
  <div>
    <div className="container">
      <AdminGear />    
      <WebPart description={description} />      
    </div>   
  </div>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
