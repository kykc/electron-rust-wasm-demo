<template>
    <v-flex shrink>
        <input type="file" id="flacFile"/>
        <v-btn color="success" v-on:click="calculate">Calculate RMS</v-btn>
    </v-flex>
</template>

<script>
    export default {
        methods: {
            calculate: function (event) {
                var worker = new document.body.Worker();
                worker.onmessage = function(e) {
                    alert("RMS: " + Number(e.data).toFixed(2).toString() + "dB");
                };
                worker.postMessage([document.getElementById("flacFile").files[0], document.body.flac]);
                //worker.postMessage(['zhopa']);
            }
        },
        name: "RmsLayout"
    }
</script>

<style scoped>

</style>