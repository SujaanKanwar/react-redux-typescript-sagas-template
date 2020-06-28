export type ApiResponse = Record<string, any>;

export interface IDataState {
  readonly data: [] | null;
  readonly errors: string | null;
  readonly loading: boolean;
}

export interface ILandingState {
  posts: IDataState;
}
