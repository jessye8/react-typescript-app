import * as React from "react";

let Logo ="./img/ComingSoon.jpg";

export default class BodyComponent extends React.Component <{}> {
        
        render() {
                return (
                        <div>  
                            <img src={Logo}/> I am a component which shows a logo. For more information see the Readme.md at <a href='https://github.com/jessye8/react-typescript-app'>React-TypeScript-App</a>
                        </div>
                );
        }
}
