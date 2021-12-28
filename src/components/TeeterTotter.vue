<template>
    <main class="playfield">
        <div class="falling">
            <div class="falling-wrapper" :style="{transform: `rotate(${-rotation}deg)`}">
                <div
                        :class="['object', 'object-'+ fallingItem.type]"
                        :style="{left: fallingItem.leftPosition + '%', transform: `translateX(-50%) scale(${fallingItem.weight / 5})`}"
                        ref="fallingObject"
                >
                    <span class="object-weight">{{fallingItem.weight}}</span>
                </div>
            </div>
        </div>
        <div class="scales">
            <div class="scales-platform" :style="{transform: `rotate(${-rotation}deg)`}">
                <div
                        v-for="item in fallingItems"
                        :class="['object', 'object-'+ item.type]"
                        :style="{left: item.leftPosition + '%', transform: `translateX(-50%) scale(${item.weight / 5})`}"
                        :key="item.id"
                >
                    <span class="object-weight">{{item.weight}}</span>
                </div>
            </div>
            <div class="scales-triangle"></div>
        </div>
    </main>
</template>

<script>
    import {mapGetters} from 'vuex';

    export default {
        created() {
            window.addEventListener('keydown', this.objectMove);
        },

        computed: {
            ...mapGetters(['fallingItems', 'fallingItem', 'rotation']),
        },

        methods: {
            objectMove(event) {
                if (
                    this.fallingItem.place === 'left' &&
                    parseInt(this.$refs.fallingObject.style.left) <= 49 &&
                    parseInt(this.$refs.fallingObject.style.left) >= 0
                ) {
                    if (event.keyCode === 37 && parseInt(this.$refs.fallingObject.style.left) >= 5) {
                        this.$refs.fallingObject.style.left = parseInt(this.$refs.fallingObject.style.left) - 5 + '%';
                    } else if (event.keyCode === 39 && parseInt(this.$refs.fallingObject.style.left) <= 44) {
                        this.$refs.fallingObject.style.left = parseInt(this.$refs.fallingObject.style.left) + 5 + '%';
                    }
                    this.fallingItem.leftPosition = parseInt(this.$refs.fallingObject.style.left)
                }
            },
        },

        destroyed() {
            window.removeEventListener('keydown', this.objectMove);
        }
    }
</script>

<style lang="scss">
    .playfield {
        display: flex;
        flex-direction: column;
        flex: 1;
    }

    .falling {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;

        &-wrapper {
            width: 50vw;
            position: relative;
            z-index: 12;
            transition: transform 0.5s linear;
        }
    }

    .object {
        position: absolute;
        bottom: 100%;
        width: 8vw;
        height: 8vw;
        display: flex;
        align-items: center;
        justify-content: center;
        transform-origin: bottom;
        z-index: 3;

        &-weight {
            color: #fff;
            font-size: 2.5vw;
            font-weight: bold;
            position: relative;
            z-index: 2;
        }

        &-rectangle {
            background: green;
            opacity: 0.8;
        }

        &-circle {
            background: deepskyblue;
            border-radius: 100%;
            opacity: 0.8;
        }

        &-triangle {
            align-items: flex-end;

            &:after {
                content: "";
                display: block;
                position: absolute;
                z-index: 1;
                width: 0;
                height: 0;
                border: 4vw solid transparent;
                border-bottom-color: orange;
                pointer-events: none;
                opacity: 0.8;
            }
        }
    }

    .scales {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;

        &-platform {
            width: 50vw;
            height: 0.4vw;
            background-color: red;
            transition: transform .25s linear;
        }

        &-triangle {
            position: relative;

            &:after {
                content: "";
                display: block;
                width: 0;
                height: 0;
                pointer-events: none;
                border: 6vw solid transparent;
                border-top: 0;
                border-bottom-color: dimgrey;
            }
        }
    }
</style>
