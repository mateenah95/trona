<template>
    <div class="row">
        <div class="col-sm-12 col-md-6 mx-auto my-2 p-2 rounded">
        <h1>Stats</h1>
        <br>
        <div class="row">
            <div class="col-lg-6 col-sm-12 my-1">
                <div class="border border-warning m-0 rounded-left p-3 info-section">
                    <h2>Global</h2>
                    <br>
                    <h5>Confirmed</h5>
                    <h3>{{$store.state.globalDetails ? $store.state.globalDetails.TotalConfirmed : "N/A"}}</h3>
                    <h5>Dead</h5>
                    <h3>{{$store.state.globalDetails ? $store.state.globalDetails.TotalDeaths : "N/A"}}</h3>
                    <h5>Recovered</h5>
                    <h3>{{$store.state.globalDetails ? $store.state.globalDetails.TotalRecovered : "N/A"}}</h3>
                    <br>
                    <button type="button" class="btn btn-primary bg-dark" data-toggle="modal" data-target="#exampleModalCopy" @click="buildGlobalModal" :disabled="!$store.state.globalDetails">
                        Launch Graph
                    </button>
                    <div class="modal fade text-dark overflow-hidden" id="exampleModalCopy" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabelCopy" aria-hidden="true">
                        <ChartModalCopy @closeModals="closeAllModals"  />
                    </div>
                </div>
            </div>
            <div class="col-lg-6 col-sm-12 my-1">
                <div class="border border-success m-0 rounded-right p-3">
                    <h2>Local</h2>
                    <br>
                    <h5>Confirmed</h5>
                    <h3>{{$store.state.selectedCountryDetails ? $store.state.selectedCountryDetails.Confirmed : "N/A"}}</h3>
                    <h5>Dead</h5>
                    <h3>{{$store.state.selectedCountryDetails ? $store.state.selectedCountryDetails.Deaths : "N/A"}}</h3>
                    <h5>Recovered</h5>
                    <h3>{{$store.state.selectedCountryDetails ? $store.state.selectedCountryDetails.Recovered : "N/A"}}</h3>
                    <br>
                    <button type="button" class="btn btn-primary bg-dark" data-toggle="modal" data-target="#exampleModal" @click="buildLocalModal" :disabled="!$store.state.selectedCountryDetails">
                        Launch Graph
                    </button>
                    <div class="modal fade text-dark overflow-hidden" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <ChartModal @closeModals="closeAllModals" />
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
</template>

<style>
    .info-section {
        /* background: linear-gradient(to bottom, #2589BD, #4922F4); */
    }
    .info-section-2 {
        /* background: linear-gradient(to bottom, #03db44, #4922F4); */
    }
</style>

<script>
import ChartModal from './ChartModal.vue';
import ChartModalCopy from './ChartModalCopy.vue';

import Chart from 'chart.js';


export default {
    components: {
        ChartModal,
        ChartModalCopy
    },
    methods: {
        buildLocalModal: function () {
            const ctx = document.getElementById('localChart');
            
            const myChart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: this.$store.state.selectedCountryGraphData.confirmedData,
                    datasets: [{
                        data: this.$store.state.selectedCountryGraphData.confirmedData,
                        label: "Confirmed",
                        borderColor: "#3e95cd",
                        backgroundColor: "#4526F0",
                        fill: true
                    },
                    {
                        data: this.$store.state.selectedCountryGraphData.deathsData,
                        label: "Deaths",
                        borderColor: "#3e95cd",
                        backgroundColor: "#E62E49",
                        fill: true
                    },
                    {
                        data: this.$store.state.selectedCountryGraphData.recoveredData,
                        label: "Recovered",
                        borderColor: "#3e95cd",
                        backgroundColor: "#67D54E",
                        fill: true
                    }
                    ]
                },
                options: {
                    title: {
                        display: true,
                        text: 'Confirmed Cases'
                    },
                    responsive: true
                }
            });

            myChart.toString();
        },
        buildGlobalModal: function () {

            const ctx = document.getElementById('globalChart');
            
            const myChart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: this.$store.state.globalGraphData.confirmedData,
                    datasets: [{
                        data: this.$store.state.globalGraphData.confirmedData,
                        label: "Confirmed",
                        borderColor: "#3e95cd",
                        backgroundColor: "#4526F0",
                        fill: true
                    },
                    {
                        data: this.$store.state.globalGraphData.deathsData,
                        label: "Deaths",
                        borderColor: "#3e95cd",
                        backgroundColor: "#E62E49",
                        fill: true
                    },
                    {
                        data: this.$store.state.globalGraphData.recoveredData,
                        label: "Recovered",
                        borderColor: "#3e95cd",
                        backgroundColor: "#67D54E",
                        fill: true
                    }
                    ]
                },
                options: {
                    title: {
                        display: true,
                        text: 'Confirmed Cases'
                    },
                    responsive: true
                }
            });

            myChart.toString();
        },
        closeAllModals: function () {
            // get modals
            const modals = document.getElementsByClassName('modal');

            // on every modal change state like in hidden modal
            for (let i = 0; i < modals.length; i++) {
                modals[i].setAttribute('aria-hidden', 'true');
                modals[i].setAttribute('style', 'display: none');
            }

            // get modal backdrops
            const modalsBackdrops = document.getElementsByClassName('modal-backdrop');

            // remove every modal backdrop
            for (let i = 0; i < modalsBackdrops.length; i++) {
                document.body.removeChild(modalsBackdrops[i]);
            }
        }
    }
}
</script>