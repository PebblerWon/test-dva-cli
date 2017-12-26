import {fakeTest,fakeTest2} from '../services/example'

export default {

  namespace: 'example',

  state: {
    test1:'',
    test2:''
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'save' });
    },
    *test({payload},{call,put}){
      console.log(payload);
      const data = yield call(fakeTest,payload);
      console.log(data);
      yield put({
        type:'setTest1',
        payload:data
      })
    },
    *test2({payload},{call,put}){
      console.log(payload);
      const data = yield call(fakeTest2,payload);
      yield put({
        type:'setTest2',
        payload:data
      })
    }
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
    setTest1(state,{payload}){
      return {
        ...state,
        //方法一的request方法将返回的数据放在了data里，没有进一步解构
        test1:payload.data.value
      }
    },
    setTest2(state,{payload}){
      return {
        ...state,
        test2:payload.value
      }
    }
  },

};
