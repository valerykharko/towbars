export interface IManufacturer {
  id: number;
  name: string;
  country: string;
  img: [string];
  doc: [string];
  description: string;
}

export interface ManufacturerState {
  manufacturers: Array<IManufacturer>;
  stateToFind: Array<IManufacturer>;
}

export enum ManufacturerActionsTypes {
  FETCH_MANUFACTURERS = "FETCH_MANUFACTURERS",
  SET_INITIAL_STATE = "SET_INITIAL_STATE",
}

interface FetchManufacturers {
  type: ManufacturerActionsTypes.FETCH_MANUFACTURERS;
  payload: Array<IManufacturer>;
}

interface SetManufacturersToSearch {
  type: ManufacturerActionsTypes.SET_INITIAL_STATE;
  payload: IManufacturer;
}

export type ManufacturerAction = FetchManufacturers | SetManufacturersToSearch;
