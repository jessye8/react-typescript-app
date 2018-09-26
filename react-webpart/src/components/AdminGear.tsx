import * as React from "react";
import './WebPart.css';
import gears from '../img/fa-gears.png';
import PropertiesPane from "./PropertiesPane";
import IPropertiesPaneProps from './IPropertiesPane';

/*function isEditMode()
{
	var boolPageInEditMode = false;
	
	// Check page is in Edit/Design Mode or not.
	if(document.forms[MSOWebPartPageFormName].MSOLayout_InDesignMode != null)
	{
		var inDesignMode = document.forms[MSOWebPartPageFormName].MSOLayout_InDesignMode.value;
	
		if (inDesignMode == "1")
		{
			boolPageInEditMode = true;
		}
	}
	
	if(document.forms[MSOWebPartPageFormName]._wikiPageMode != null)
	{
		var wikiInEditMode = document.forms[MSOWebPartPageFormName]._wikiPageMode.value;
		if (wikiInEditMode == "Edit")
		{
			boolPageInEditMode = true;
		}
	}

	return boolPageInEditMode;
}*/

export default class AdminGear extends React.Component <IPropertiesPaneProps, {}> {
	state = {
	  toggle: this.props.toggle,
	  description: this.props.description,
	  propCallback: this.props.propCallback
	}	
	
	showPropertiesPane = () => {
		this.setState({
			toggle: !this.state.toggle,
			description: this.props.description
		})
	} 

    render() {       
		return (
			<div>
				<img src={ gears } className="adminGear" onClick={this.showPropertiesPane}/>
				{!this.state.toggle && <PropertiesPane propCallback={this.state.propCallback.bind(this)} toggle={!this.state.toggle} description={this.state.description} />}
			</div>
		);
    }
}
