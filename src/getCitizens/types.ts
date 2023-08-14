export interface hierarchy {
  name?: string;
  data?: hierarchy[];
  cityData?: city;
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
export interface city {
  id: number;
  name: string;
  data: string;
}
