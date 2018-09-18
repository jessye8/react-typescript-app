import * as React from "react";
import FooterInterface from './IFooter'

export default class UserComponent extends React.Component<FooterInterface, {}> {

constructor (props: FooterInterface){
super(props);
}
  render() {
    return (  <div>
                <hr/>
                <footer style={{textAlign: 'right'}}>
                   {this.props.company} | {this.props.address} | {this.props.date.toDateString()}
                <footer>
               </div>
           );
   }
}
