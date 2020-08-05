<template>
    <div class="w-50 mx-auto my-2 p-2 rounded">
        <div class="w-50 mx-auto">
            <!-- <img height=200 width=200 class="border border-danger rounded-circle mx-auto " src="https://dynamicmedia.zuza.com/zz/m/original_/9/4/94747413-5e9e-45f1-a73e-f5a42936126d/LIST_FlagfactsFeb15_Gallery.jpg" alt="Default Image"> -->
        </div>
        <br>
        <hr class="border border-light">
        <br>
        <h1>Location:</h1>
        <h2>{{$store.state.selectedCountry ? $store.state.selectedCountry.toUpperCase() : 'Select Country to Update'}}</h2>
        <br>
        <hr class="border border-light">
    </div>
</template>