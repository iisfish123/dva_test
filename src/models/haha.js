
export default {

  namespace: 'haha',

  state: {
    num: 1,
  },

  effects: {
    *saveForm1({ payload }, { call, put }) {  // eslint-disable-line
      console.info('come');
      // yield put({ type: 'save' });
    },
    *getHome( { payload },{ select,put } ){
      let obj = yield select(_ => _.haha)
      yield put({ type: "updateState", payload: {num: obj.num+1} })
    }
  },

  reducers: {
    updateState(state, { payload }) {
      return {
        ...state,
        ...payload
      }
    },
    save(state, action) {
      return { ...state, ...action };
    },
  },

  subscriptions: {
    setup({ dispatch, history }) {
      history.listen(location => {
        if (location.pathname === "/xixi" && !location.search) {
          console.info(1111);
        }

      })
    }
  },

};
