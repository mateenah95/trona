<template>
    <div class="row">
        <div class="col-sm-12 col-md-6 col-lg-6 mx-auto my-2 p-2 rounded">
        <h1>Search</h1>
        <br>
        <div class="form-group">
            <label for="exampleFormControlSelect1" >Select Country:</label>
            <select class="form-control" id="exampleFormControlSelect1"  @input="updateLocalSelected">
                <option value="" selected disabled hidden></option>
                <option v-for="country in $store.state.countryList" :key="country.IOS2" :value="country.Slug">{{country.Country}} - {{country.ISO2}}</option>
            </select>
        </div>
        <button class="btn btn-primary btn-lg btn-block special-button" :disabled="!localSelected" @click="updateSelected">Select Country</button>
        <br>
        <button class="btn btn-primary btn-lg btn-block special-button-3" @click="updateGlobal">Load Global</button>
        <br>
        <button class="btn btn-danger btn-lg btn-block special-button-2" @click="autoDetectLocal">Auto-Detect Country</button>
    </div>
    </div>
</template>

<style>
    .btn {
        font-size: 1.25em;
    }
    .special-button {
        background: linear-gradient(to right,#59B3D0, #6FE3A7);
    }
    .special-button-2 {
        background: linear-gradient(#EA7527, #FAEB28);
        height: 100px;
    }
    .special-button-3 {
        /* background: linear-gradient(to right,#66356E, #CC286D); */
        background: linear-gradient(to left,#59B3D0, #6FE3A7);
    }
</style>

<script>
export default {
    name: 'SearchBar',
    data: function () {
        return {
            localSelected: null
        }
    },
    mounted: function () {
        this.$store.commit('updateCountryList');
    },
    methods: {
        updateLocalSelected: function (event) {
            this.localSelected = event.target.value || null;
        },
        updateSelected: function () {
            this.$store.commit('updateSelectedMain', this.localSelected);
        },
        updateGlobal: function () {
            this.$store.commit('updateGlobalDetails');
        },
        autoDetectLocal: function () {
            this.$store.commit('autoDetect');
        }
    }
}
</script>