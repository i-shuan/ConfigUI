import { uiActions } from './ui-slice';

export const setIsDrawerCollapsed = (flag) => {
  return async (dispatch) => {
    dispatch(uiActions.setIsDrawerCollapsed(flag));
  };
};
