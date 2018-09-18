import * as React from "react";
import FooterInterface from './IFooter'

export default class UserComponent extends React.Component<FooterInterface, {}> {

constructor (props: FooterInterface){
super(props);
}
  render() {
    return (  <div>
                <hr/>
                {this.props.company}
                <br/>
                Address: {this.props.address}
                <br/>
                Date: {this.props.date.toDateString()}
            </div>

                );
  }
}