export interface AppStore {
  isResumeModalOpen: boolean;
}

export interface Action {
  type: string;
  payload: Partial<AppStore>;
}
