import * as React from "react";

let Logo ="./img/ComingSoon.jpg";

export default class FirstComponent extends React.Component <{}> {
        
        render() {
                return (
                        <div>  
                                <img src={Logo} />
                                <h1>Hello, Welcome to the first page</h1>
                        </div>
                );
        }
}