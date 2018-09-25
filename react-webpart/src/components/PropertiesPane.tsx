import * as React from "react";
import IPropertiesPaneProps from "./IPropertiesPane";
import './WebPart.css';

export default class PropertiesPane extends React.Component <IPropertiesPaneProps, {}> {       
        state = {
                isHidden: this.props.toggle
        }

        showPropertiesPane = () => {
                this.setState({
                        isHidden: !this.state.isHidden
                })
        } 

        render() {
                if(this.state.isHidden){
                        return (                      
                                <div className="pane">  
                                        <h3>Hello, Welcome to the properties pane.</h3>
                                        <hr />
                                        <button className="button" onClick={this.showPropertiesPane.bind(this)}>Close</button>                                               
                                </div>
                        );  
                }else{
                        return (
                                <div></div>
                        )
                }
                             
                
        }
}