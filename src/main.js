import Vue from 'vue'
import App from './App.vue'
import {Button, Config, Field, Input, Table, Pagination} from '@oruga-ui/oruga';

import "nes.css/css/nes.min.css";
import '@oruga-ui/oruga/dist/oruga.css'

Vue.config.productionTip = false

Vue.use(Button)
Vue.use(Field)
Vue.use(Input)
Vue.use(Table)
Vue.use(Pagination)
Vue.use(Config, {
  button: {
    override: true,
    rootClass: 'nes-btn',
    disabledClass: 'is-disabled'
  },
  field: {
    rootClass: "nes-field",
    messageClass: "nes-text",
    variantClass: (suffix) => {
      return `is-${suffix}`
    }
  },
  input: {
    inputClass: "nes-input",
    variantClass: (suffix) => {
      return `is-${suffix}`
    }
  },
  pagination: {
    linkClass: 'nes-btn'
  },
  table: {
    tableClass: "nes-table is-bordered"
  }
})

new Vue({
  render: h => h(App),
}).$mount('#app')
