import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField,
  PropertyPaneCheckbox,
  PropertyPaneDropdown,
  PropertyPaneToggle
} from '@microsoft/sp-webpart-base';

import * as strings from 'BannerWebPartStrings';
import Banner from './components/Banner';
import { IBannerProps } from './components/IBannerProps';

export interface IBannerWebPartProps {
  title: string;
  description: string;
  includeTitle: boolean;
  bgColor: string;
  hideWebPart: boolean;
}

export default class BannerWebPart extends BaseClientSideWebPart<IBannerWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IBannerProps > = React.createElement(
      Banner,
      {
        title: this.properties.title,
        description: this.properties.description,
        includeTitle: this.properties.includeTitle,
        bgColor: this.properties.bgColor,
        hideWebPart: this.properties.hideWebPart
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  //enables the apply button in properties pane
  protected get disableReactivePropertyChanges(): boolean {
    return true;
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('title', {
                  label: strings.TitleLabel
                }),
                PropertyPaneTextField('description', {
                  label: strings.DescriptionLabel,
                  multiline: true
                }),
                PropertyPaneCheckbox('includeTitle', {
                  text: strings.IncludeTitleLabel
                }),
                PropertyPaneDropdown('bgColor', {
                  label: strings.BgColorLabel,
                  options: [
                    { key: 'row1', text: 'purple'},
                    { key: 'row2', text: 'orange'},
                    { key: 'row3', text: 'teal'}
                  ]
                }),
                PropertyPaneToggle('hideWP', {
                  label: strings.HideWPLabel,
                  onText: 'On',
                  offText: 'Off'
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
