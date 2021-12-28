<template>
    <v-dialog
            v-model="dialog"
            persistent
            max-width="600"
    >
        <v-card>
            <v-card-title class="justify-center">GAME OVER!</v-card-title>
            <div class="d-flex justify-center">
                <v-card-title>Your score: <span class="score">{{myScore}}</span></v-card-title>
                <v-card-title>Best score: <span class="best-score">{{bestScore}}</span></v-card-title>
            </div>
            <v-card-actions class="d-flex justify-space-between">
                <v-btn
                        color="success"
                        to="/game"
                        @click="dialog = false"
                >Try Again
                </v-btn>
                <v-btn
                        color="primary"
                        to="/"
                        @click="dialog = false"
                >Back to the rules
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
    export default {
        name: "FinishDialog",
        props: {
            dialog: {
                type: Boolean,
                default: false,
            }
        },
        data() {
            return {
                myScore: localStorage.getItem('myScore'),
                bestScore: localStorage.getItem('bestScore')
            }
        }
    }
</script>

<style scoped>
    .score {
        color: green;
        margin-left: 5px;
    }

    .best-score {
        color: red;
        margin-left: 5px;
    }
</style>
