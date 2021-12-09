export interface ITowbar {
  id: number;
  vendor_code: string;
  max_hor: number;
  max_ver: number;
  ball_type: string;
  cutout: string;
  price: number;
  removing_bumper: boolean;
  dismantling_amplifier: boolean;
  drilling: string;
  installation_time: number;
  weight: number;
  with_cap: boolean;
  with_electrical: boolean;
  img: [string];
  doc: [string];
  video_link: [string];
  description: string;
  note: string;
  autoId: number;
  manufacturerId: number;
}

export interface TowbarState {
  towbars: Array<ITowbar>;
  ballTypes: Array<object>;
}

export enum TowbarActionsTypes {
  FETCH_TOWBARS = "FETCH_TOWBARS",
}

interface FetchTowbars {
  type: TowbarActionsTypes.FETCH_TOWBARS;
  payload: Array<ITowbar>;
}

export type TowbarAction = FetchTowbars;
