<template>
    <div id="app">
        <v-app id="inspire" dark>
            <v-navigation-drawer v-model="drawer" clipped fixed app>
                <v-list dense>
                    <v-list-tile @click="">
                        <v-list-tile-action>
                            <v-icon>dashboard</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                            <v-list-tile-title>Dashboard</v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                    <v-list-tile @click="">
                        <v-list-tile-action>
                            <v-icon>settings</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                            <v-list-tile-title>Settings</v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                </v-list>
            </v-navigation-drawer>
            <v-toolbar app fixed clipped-left>
                <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
                <v-toolbar-title>Application</v-toolbar-title>
            </v-toolbar>
            <v-content>
                <v-container fluid fill-height>
                    <v-layout justify-center align-center>
                        <v-flex shrink>
                            <!--<v-tooltip right>
                                <v-btn
                                        slot="activator"
                                        :href="source"
                                        icon
                                        large
                                        target="_blank"
                                >
                                    <v-icon large>code</v-icon>
                                </v-btn>
                                <span>Source</span>
                            </v-tooltip>
                            <v-tooltip right>
                                <v-btn slot="activator" icon large href="https://codepen.io/johnjleider/pen/qxQWda" target="_blank">
                                    <v-icon large>mdi-codepen</v-icon>
                                </v-btn>
                                <span>Codepen</span>
                            </v-tooltip>-->
                            <v-text-field label="A" placeholder="Placeholder" v-model="a"></v-text-field>
                            <v-text-field label="B" placeholder="Placeholder" v-model="b"></v-text-field>
                            <v-text-field label="C" placeholder="Placeholder" v-model="c"></v-text-field>
                            <v-btn color="success" v-on:click="calculate">Calculate</v-btn>
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-content>
            <v-footer app fixed>
                <span>&nbsp;&copy; 2017</span>
            </v-footer>
        </v-app>
    </div>
</template>

<script>
    export default {
        data: () => ({
            drawer: false,
            a: 0,
            b: 0,
            c: 0,
        }),
        props: {
            source: String
        },
        methods: {
            calculate: function (event) {
                // `this` inside methods points to the Vue instance
                /*alert('Hello ' + this.name + '!')
                // `event` is the native DOM event
                if (event) {
                    alert(event.target.tagName)
                }*/
                console.dir(this);
                let result = document.body.flac.sqrt_roots_js(this.a, this.b, this.c);
                alert(JSON.stringify(result));
            }
        }
    }
</script>