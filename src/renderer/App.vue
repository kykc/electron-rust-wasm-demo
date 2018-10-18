<template>
    <div id="app">
        <v-app id="inspire" dark>
            <v-navigation-drawer v-model="drawer" clipped fixed app>
                <v-list dense>
                    <v-list-tile @click="layout = 'sqrt-layout'; drawer = false;">
                        <v-list-tile-action>
                            <v-icon>dashboard</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                            <v-list-tile-title>SQRT</v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                    <v-list-tile @click="layout = 'rms-layout'; drawer = false;">
                        <v-list-tile-action>
                            <v-icon>settings</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                            <v-list-tile-title>FLAC RMS</v-list-tile-title>
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

                            <!--
                            -->
                            <component v-bind:is="layout"></component>

                    </v-layout>
                </v-container>
            </v-content>
            <v-footer app fixed>
                <span>&nbsp;&copy; {{currentYear}}</span>
            </v-footer>
        </v-app>
    </div>
</template>

<script>
    import RmsLayout from './components/RmsLayout'
    import SqrtLayout from './components/SqrtLayout'

    export default {
        data: () => ({
            drawer: false,
            a: 0,
            b: 0,
            c: 0,
            currentYear: (new Date()).getFullYear(),
            layout: 'sqrt-layout',
        }),
        props: {
            source: String
        },
        components: {
            'sqrt-layout': SqrtLayout,
            'rms-layout': RmsLayout,
        }
    }
</script>
