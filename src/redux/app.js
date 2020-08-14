const DEFAULT_STATE = {
  title: '',
};

export const setAll = async (title) => ({
  type: 'APP_SET_TITLE',
  payload: title,
});

const reducer = (state = DEFAULT_STATE, { type, payload }) => {
  if (type === 'APP_SET_TITLE') {
    return { ...state, title: payload };
  }

  return state;
};

export default reducer;
