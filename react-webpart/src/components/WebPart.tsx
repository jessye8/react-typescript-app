import * as React from "react";
import IWebPartProps from "./IWebPartProps";
import { PrimaryButton } from 'office-ui-fabric-react';
import "./WebPart.css";

export default class WebPart extends React.Component<IWebPartProps,{}> {
    public render(): JSX.Element {
    return (
        <div>
          <div className="ms-Grid-row ms-bgColor-teal ms-fontColor-white row">
            <div className="ms-Grid-col ms-u-lg10 ms-u-xl8 ms-u-xlPush2 ms-u-lgPush1">
              <span className="ms-font-xl ms-fontColor-white">
                Welcome to SharePoint!
              </span>
              <p className="ms-font-l ms-fontColor-white">
                Building experiences with web stack and modern tooling
              </p>
              <p className="ms-font-l ms-fontColor-white">
                {this.props.description}
              </p>
              <PrimaryButton className="button" href="https://dev.office.com/sharepoint">
                Learn more
              </PrimaryButton>
            </div>
          </div>
        </div>
    );
  }
}