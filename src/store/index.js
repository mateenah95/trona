import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    countryList: [],
    selectedCountry: null,
    selectedCountryDetails: null,
    selectedCountryGraphData: {
      confirmedData: null,
      deathsData: null,
      recoveredData: null
    },
    globalDetails: null,
    globalGraphData: {
      confirmedData: null,
      deathsData: null,
      recoveredData: null
    }
  },
  mutations: {
    updateSelectedMain: function(state, newSelected) {
      state.selectedCountry = newSelected;
      axios.get(`https://api.covid19api.com/total/country/${state.selectedCountry}`)
        .then(resp => {
          const dataLen = resp.data.length;
          state.selectedCountryDetails = resp.data[dataLen - 1];

          const tempConfirmed = [];
          const tempDeaths = [];
          const tempRecovered = [];

          resp.data.forEach(el => {
            tempConfirmed.push(el.Confirmed);
            tempDeaths.push(el.Deaths);
            tempRecovered.push(el.Recovered);
          });

          state.selectedCountryGraphData.confirmedData = tempConfirmed;
          state.selectedCountryGraphData.deathsData = tempDeaths;
          state.selectedCountryGraphData.recoveredData = tempRecovered;

          alert('Details Updated For Selected Location!');
        })
        .catch(error => {
          console.log(error);
          alert('Could Not Upadate Details For Selected Location!');
        })
    },
    updateCountryList: function(state) {
      axios.get(`https://api.covid19api.com/countries`)
            .then(res => state.countryList = res.data)
            .catch(err => {
              console.log(err);
              alert('Could Not Populate Country List!');
            })
    },
    autoDetect: function (state) {
      axios.get('http://ip-api.com/json/')
                .then(res => {
                  state.selectedCountry = res.data.country.toLowerCase();
                  axios.get(`https://api.covid19api.com/total/country/${state.selectedCountry}`)
                    .then(resp => {
                      const dataLen = resp.data.length;
                      state.selectedCountryDetails = resp.data[dataLen - 1];

                      const tempConfirmed = [];
                      const tempDeaths = [];
                      const tempRecovered = [];

                      resp.data.forEach(el => {
                        tempConfirmed.push(el.Confirmed);
                        tempDeaths.push(el.Deaths);
                        tempRecovered.push(el.Recovered);
                      });

                      state.selectedCountryGraphData.confirmedData = tempConfirmed;
                      state.selectedCountryGraphData.deathsData = tempDeaths;
                      state.selectedCountryGraphData.recoveredData = tempRecovered;

                      alert('Details Updated For Auto Detected Location!')
                    })
                    .catch(error => {
                      console.log(error);
                      alert('Could Not Update Details For Auto Detected Location!')
                    })
                })
                .catch(err => {
                  console.log(err);
                  alert('Could Not Auto Detect Location!')
                })
    },
    updateGlobalDetails: function (state) {
      axios.get('https://api.covid19api.com/summary')
        .then(res => {
          state.globalDetails = res.data.Global;

          console.log('TGD > ', state.globalDetails);

          const tempConfirmed = [];
          const tempDeaths = [];
          const tempRecovered = [];

          tempConfirmed.push(state.globalDetails.TotalConfirmed);
          tempDeaths.push(state.globalDetails.TotalDeaths);
          tempRecovered.push(state.globalDetails.TotalRecovered);

          state.globalGraphData.confirmedData = tempConfirmed;
          state.globalGraphData.deathsData = tempDeaths;
          state.globalGraphData.recoveredData = tempRecovered;

          alert('Updated Global Data!')
        })
        .catch(err => {
          console.log(err);
          alert('Could Not Update Global Data!')
        })
    }
  },
  actions: {},
  modules: {}
});
