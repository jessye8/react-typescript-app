import * as React from 'react';
import styles from './Banner.module.scss';
import { IBannerProps } from './IBannerProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class Banner extends React.Component<IBannerProps, {}> {
  public render(): React.ReactElement<IBannerProps> {
    return (
      <div className={ styles.bannerWebPart }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
              <span className={ styles.title }>Welcome to this SharePoint Site!</span>
              <p className={ styles.subTitle }>Customize the SharePoint experiences using Web Parts.</p>
              <p className={ styles.description }>{escape(this.props.description)}</p>
              <a href="https://github.com/jessye8/starter-apps/tree/master/react-spfx-app" className={ styles.button }>
                <span className={ styles.label }>Learn more</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
