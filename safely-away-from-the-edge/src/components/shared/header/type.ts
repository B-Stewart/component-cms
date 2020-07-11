export interface IRegionHeader {
  logo: string;
  menuItems: IRegionHeaderMenuItems[];
}

export interface IRegionHeaderMenuItems {
  name?: string;
  iconName?: string;
  link: string;
}
