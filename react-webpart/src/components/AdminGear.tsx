import * as React from "react";
import './WebPart.css';
import gears from '../img/fa-gears.png';
import PropertiesPane from "./PropertiesPane";

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

export default class AdminGear extends React.Component {
	state = {
	  isHidden: true
	}	
	
	showPropertiesPane = () => {
		this.setState({
			isHidden: !this.state.isHidden
		})
	} 

    render() {       
		return (
			<div>
				<img src={ gears } className="adminGear" onClick={this.showPropertiesPane.bind(this)} />
				{!this.state.isHidden && <PropertiesPane toggle={!this.state.isHidden} />}
			</div>
		);
    }
}
