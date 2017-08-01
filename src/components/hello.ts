import Vue from 'vue';
import Vuex from 'vuex';
import { Component, Watch } from "vue-property-decorator";

import { IAppState } from '../store';
import { CART_INCREMENT } from '../store/mutation-types';

import Dropdown from "./dropdown.vue";

@Component(
  {
    components: {
      Dropdown
    }
  },
)
export default class Hello extends Vue {
  selectedStatus: string = "";
  msg = 'Welcome to Your Vue.js App';
  store: Vuex.Store<IAppState> = this['$store'];
  statusFilters: any =
  JSON.parse(`[
    {
      "parentCodeValue": {
        "codeType": "StatusGrouping",
        "codeValue": "0001",
        "codeValueStartDate": "2017-01-06T00:00:00",
        "codeValueEndDate": null,
        "rank": 1,
        "isDefault": false,
        "translation": "",
        "translationStartDate": "2017-01-06T00:00:00"
      },
      "childCodeValues": [
        {
          "codeType": "Status",
          "codeValue": "0000",
          "codeValueStartDate": "2017-01-06T00:00:00",
          "codeValueEndDate": null,
          "rank": 1,
          "isDefault": false,
          "translation": "",
          "translationStartDate": "2017-01-06T00:00:00"
        },
        {
          "codeType": "Status",
          "codeValue": "0001",
          "codeValueStartDate": "2017-01-06T00:00:00",
          "codeValueEndDate": null,
          "rank": 2,
          "isDefault": true,
          "translation": "Open",
          "translationStartDate": "2017-01-06T00:00:00"
        }
      ]
    },
    {
      "parentCodeValue": {
        "codeType": "StatusGrouping",
        "codeValue": "0002",
        "codeValueStartDate": "2017-01-06T00:00:00",
        "codeValueEndDate": null,
        "rank": 2,
        "isDefault": false,
        "translation": "In progress",
        "translationStartDate": "2017-01-06T00:00:00"
      },
      "childCodeValues": [
        {
          "codeType": "Status",
          "codeValue": "0002",
          "codeValueStartDate": "2017-01-06T00:00:00",
          "codeValueEndDate": null,
          "rank": 3,
          "isDefault": false,
          "translation": "No immediate action",
          "translationStartDate": "2017-01-06T00:00:00"
        },
        {
          "codeType": "Status",
          "codeValue": "0003",
          "codeValueStartDate": "2017-01-06T00:00:00",
          "codeValueEndDate": null,
          "rank": 4,
          "isDefault": false,
          "translation": "Watchlist",
          "translationStartDate": "2017-01-06T00:00:00"
        },
        {
          "codeType": "Status",
          "codeValue": "0004",
          "codeValueStartDate": "2017-01-06T00:00:00",
          "codeValueEndDate": null,
          "rank": 5,
          "isDefault": false,
          "translation": "Suspicious",
          "translationStartDate": "2017-01-06T00:00:00"
        }
      ]
    },
    {
      "parentCodeValue": {
        "codeType": "StatusGrouping",
        "codeValue": "0003",
        "codeValueStartDate": "2017-01-06T00:00:00",
        "codeValueEndDate": null,
        "rank": 3,
        "isDefault": false,
        "translation": "Closed",
        "translationStartDate": "2017-01-06T00:00:00"
      },
      "childCodeValues": [
        {
          "codeType": "Status",
          "codeValue": "0005",
          "codeValueStartDate": "2017-01-06T00:00:00",
          "codeValueEndDate": null,
          "rank": 6,
          "isDefault": false,
          "translation": "Attention Required",
          "translationStartDate": "2017-01-06T00:00:00"
        },
        {
          "codeType": "Status",
          "codeValue": "0006",
          "codeValueStartDate": "2017-01-06T00:00:00",
          "codeValueEndDate": null,
          "rank": 7,
          "isDefault": false,
          "translation": "No Attention Required",
          "translationStartDate": "2017-01-06T00:00:00"
        },
        {
          "codeType": "Status",
          "codeValue": "0007",
          "codeValueStartDate": "2017-01-06T00:00:00",
          "codeValueEndDate": null,
          "rank": 8,
          "isDefault": false,
          "translation": "Closed",
          "translationStartDate": "2017-01-06T00:00:00"
        }
      ]
    }    
  ]`);


  constructor() {
    super();
    console.log(this.statusFilters)
    this.store.commit(CART_INCREMENT, 1);
  }

  changeStatusFilter(id, value) {
    this.selectedStatus = value;
    // console.log('changed!')
  }
}
