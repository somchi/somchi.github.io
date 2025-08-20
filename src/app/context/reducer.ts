import { Action, AppStore } from '../libs/types';

export const SET_RESUME_MODAL_OPEN = 'SET_RESUME_MODAL_OPEN';

export const reducer = (state: AppStore, action: Action): AppStore => {
  switch (action.type) {
    case SET_RESUME_MODAL_OPEN:
      return {
        ...state,
        isResumeModalOpen: action.payload.isResumeModalOpen ?? false,
      };

    default:
      return state;
  }
};
