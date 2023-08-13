export interface hierarchy {
  name: string;
  data: hierarchy[] | string[];
}
export interface group {
  type: string;
  name: string;
}
export interface citizens {
  name: string;
  groups: group[];
  city_id: number;
}
