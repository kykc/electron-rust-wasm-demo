<template>
    <v-flex shrink>
        <v-text-field label="A" placeholder="Placeholder" v-model="a"></v-text-field>
        <v-text-field label="B" placeholder="Placeholder" v-model="b"></v-text-field>
        <v-text-field label="C" placeholder="Placeholder" v-model="c"></v-text-field>
        <v-btn color="success" v-on:click="calculate">Calculate roots</v-btn>
    </v-flex>
</template>

<script>
    export default {
        data: () => ({
            a: 1,
            b: -6,
            c: 5,
        }),
        methods: {
            calculate: function (event) {
                let result = document.body.flac.sqrt_roots_js(this.a, this.b, this.c);
                alert(JSON.stringify(result));
            }
        },
        name: "SqrtLayout"
    }
</script>

<style scoped>

</style>