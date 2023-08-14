export interface hierarchy {
  name?: string;
  data?: hierarchy[];
  cityData?: any;
}
export interface group {
  type: string;
  name: string;
}
export interface citizens {
  id: number;
  name: string;
  groups: group[];
  city_id: number;
}
