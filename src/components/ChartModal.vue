<template>
    <div class="modal-dialog-centered row">
        <div class="col-sm-12 col-md-10 col-lg-8 col-xl-6 mx-auto" role="document">
            <div class="modal-content">
                <div class="modal-header  bg-dark text-light">
                    <h5 class="modal-title" id="exampleModalLabel">Stats Visualization</h5>
                </div>
                <div class="modal-body">
                    <div class="chart-container" style="position: relative; height:100%; width:100%">
                        <canvas id="localChart"></canvas>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal" @click="$emit('closeModals')" >Close</button>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
    
</style>

<script>
export default {
    name: 'ChartModal'
    
}
</script>