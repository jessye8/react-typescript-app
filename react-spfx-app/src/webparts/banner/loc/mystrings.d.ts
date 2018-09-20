declare interface IBannerWebPartStrings {
  PropertyPaneDescription: string;
  BasicGroupName: string;
  TitleLabel: string;
  DescriptionLabel: string;
  IncludeTitleLabel: string;
  BgColorLabel: string;
  HideWPLabel: string;
}

declare module 'BannerWebPartStrings' {
  const strings: IBannerWebPartStrings;
  export = strings;
}
