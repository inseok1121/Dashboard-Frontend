import { createStore } from 'vuex';

import accountStore from '@/_store/account';
import commonStore from '@/_store/common'


const store = createStore({
  modules: {
    accountStore,
    commonStore,
  },
});


export default store;