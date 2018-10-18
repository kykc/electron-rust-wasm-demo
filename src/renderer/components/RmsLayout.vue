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
                let reader = new FileReader();
                reader.onloadend = function(evt) {
                    let result = document.body.flac.main(reader);
                    alert("RMS: " + Number(result).toFixed(2).toString() + "dB");
                };

                reader.readAsArrayBuffer(document.getElementById("flacFile").files[0]);
            }
        },
        name: "RmsLayout"
    }
</script>

<style scoped>

</style>