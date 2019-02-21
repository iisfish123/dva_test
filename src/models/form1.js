
export default {

  namespace: 'form1',

  state: {
    username: '1',
    password: '2',
  },

  effects: {
    *saveForm1({ payload }, { call, put }) {  // eslint-disable-line
      console.info('come');
      // yield put({ type: 'save' });
    },
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action };
    },
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

};
