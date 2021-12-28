<template>
    <v-dialog
            v-model="dialog"
            persistent
            max-width="600"
    >
        <v-card>
            <v-card-title class="justify-center">Rules:</v-card-title>
            <v-card-text>
                - At the right side of teeter totter, there will be randomly placing objects with
                random weights. On the left side, there will be nothing but there will be
                objects falling from top to bottom. According to weight on the sides, teeter
                totter will be bending towards to heavy side.
            </v-card-text>
            <v-card-text>
                - You will be managing those object’s placement by arrow keys to keep teeter
                totter on balance.
            </v-card-text>
            <v-card-text>
                - Your task is, keeping this balance as much as you can.
            </v-card-text>
            <v-card-actions class="d-flex justify-center">
                <v-btn
                        color="success"
                        to="/game"
                        @click="dialog = false"
                        large
                >Play
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
    export default {
        name: "WelcomeDialog",
        data() {
            return {
                dialog: null
            }
        },
        created() {
            this.dialog = true;
        }
    }
</script>

<style scoped>

</style>
