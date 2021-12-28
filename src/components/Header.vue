<template>
    <v-app-bar
            app
            color="primary"
            dark
    >
        <v-row class="pt-12 pt-sm-0">
            <v-col cols="6" md="4" sm="6">
                <v-card-title>Score: {{ score }}</v-card-title>
            </v-col>
            <v-col cols="6" md="4" sm="6" class="d-flex justify-center">
                <v-card-title class="title">Teeter-totter</v-card-title>
            </v-col>
            <v-col cols="12" md="4" sm="12" class="d-flex justify-md-end justify-center align-center">
                <Button class="primary mr-4" @click="playButton()" ref="playButton">Play</Button>
                <Button class="secondary" @click="restartButton()">Clear</Button>
            </v-col>
        </v-row>
<!--        <v-row class="d-flex d-md-none">-->
<!--            <v-col cols="12" md="4" sm="12" class="justify-center d-flex pt-10">-->
<!--                <v-card-title>Score: {{ score }}</v-card-title>-->
<!--                <v-card-title class="title">Teeter-totter</v-card-title>-->
<!--            </v-col>-->
<!--            <v-col cols="12" md="4" sm="12" class="d-flex justify-md-end justify-center align-center">-->
<!--                <Button class="primary mr-4" @click="playButton()" ref="playButtons">Play</Button>-->
<!--                <Button class="secondary" @click="restartButton()">Clear</Button>-->
<!--            </v-col>-->
<!--        </v-row>-->
        <FinishDialog :dialog="dialogStatus"/>
    </v-app-bar>
</template>

<script>
    import {mapActions, mapGetters, mapMutations} from 'vuex';
    import Button from '@/components/Button';
    import FinishDialog from '../dialogs/FinishDialog';

    export default {
        components: {
            Button,
            FinishDialog
        },

        data() {
            return {
                dialogStatus: false
            }
        },

        computed: {
            ...mapGetters(['isPaused', 'gameOver', 'fallingItem', 'fallingItems', 'gameTimeout', 'score']),
        },

        watch: {
            gameOver() {
                if (this.gameOver) {
                    localStorage.setItem('myScore', JSON.stringify(this.score));
                    if (this.score > localStorage.getItem('bestScore') || !localStorage.getItem('bestScore')) {
                        localStorage.setItem('bestScore', JSON.stringify(this.score));
                    }
                    this.dialogStatus = true;
                    this.RESET_GAME();
                }
            }
        },

        methods: {
            ...mapMutations(['START_GAME', 'CONTINUE_GAME', 'RESET_GAME', 'PAUSE_GAME', 'CREATE_FALLING_ITEM', 'PUSH_FALLING_ITEM']),
            ...mapActions(['startGame']),

            playButton() {
                if (this.$refs.playButton.$el.innerHTML === 'Play') {
                    this.$refs.playButton.$el.innerHTML = 'Pause';
                    this.startGame();
                    return;
                }
                if (this.isPaused) {
                    this.$refs.playButton.$el.innerHTML = 'Pause';
                    this.CONTINUE_GAME();
                } else {
                    this.$refs.playButton.$el.innerHTML = 'Continue';
                    this.PAUSE_GAME();
                }
            },

            restartButton() {
                this.$refs.playButton.$el.innerHTML = 'Play';
                this.RESET_GAME();
            },
        }
    }
</script>

<style lang="scss">

</style>
