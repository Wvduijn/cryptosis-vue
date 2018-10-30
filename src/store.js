import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    coins: [],
    metadata: [],
    totalMarketCap: 0,
    total24HrVolume: 0,
    totalBTCDominance: 0,
    loading: false,
  },
  mutations: {
    UPDATE_COINS(state, payload) {
      const {data} = payload;
      const coinsArray = Object.keys(data).map(key => {
        return data[key];
      });
      state.coins = coinsArray.sort((a, b) => a.rank - b.rank)
    },
    UPDATE_MARKETDATA(state, payload) {
      const {data} = payload;
      const {quotes} = data;

      state.totalMarketCap = quotes.EUR.total_market_cap;
      state.total24HrVolume = quotes.EUR.total_volume_24h;
      state.totalBTCDominance = data.bitcoin_percentage_of_market_cap;
    },
    UPDATE_COINMETADATA(state, payload) {
      const {Data} = payload;
      const metaDataArray = Object.keys(Data).map(key => {
        return Data[key];
      });
      state.metadata = Data;
    },
    SET_LOADING(state, payload) {
      state.loading = payload;
    }
  },
  actions: {
    getCoins({commit}){
      commit('SET_LOADING', true);
      axios.get('/api/coins').then((response) => {
        commit('UPDATE_COINS', response.data)
        commit('SET_LOADING', false);
      });
    },
    getMarketData({commit}){
      axios.get('/api/market_data').then((response) => {
        commit('UPDATE_MARKETDATA', response.data)
      });
    },
    getCoinMetaData({commit}){
      axios.get('/api/coin_metadata').then((response) => {
        commit('UPDATE_COINMETADATA', response.data)
      });
    }
  },
  getters: {
    coins: state => state.coins,
    metadata: state => state.metadata,
    totalMarketCap: state => state.totalMarketCap,
    total24HrVolume: state => state.total24HrVolume,
    totalBTCDominance: state => state.totalBTCDominance,
    loading: state => state.loading,
    coinDataFromSlug: (state) => (websiteSlug) => {
      return state.coins.find(coin => coin.website_slug === websiteSlug);
    }
  }
})
