import * as React from "react";
import IPropertiesPaneProps from "./IPropertiesPane";
import { DialogFooter, Label, TextField } from 'office-ui-fabric-react';
import './WebPart.css';

export default class PropertiesPane extends React.Component <IPropertiesPaneProps, {}> {       
        state = {
                toggle: this.props.toggle,
                description: this.props.description,
                propCallback: this.props.propCallback
        }

        showPropertiesPane = () => {
                this.setState({
                        toggle: !this.state.toggle
                })
        } 

        render() {
                if(this.state.toggle){
                        return (                      
                                <div className="pane">  
                                        <h4>Properties Pane</h4>
                                        <hr />
                                        <Label>Description:</Label>
                                        <TextField 
                                           placeholder="Enter a description" 
                                           onChange={(event, value) => { this.setState({ description: value });}}
                                        />
                                        <DialogFooter>
                                                <button className="button" onClick={this.state.propCallback.bind(this, this.state.description)}>Apply</button>                                               
                                                <button className="button" onClick={this.showPropertiesPane.bind(this)}>Close</button>                                            
                                        </DialogFooter>
                                </div>
                        );  
                }else{
                        return (
                                <div></div>
                        )
                }
                             
                
        }
}