<template>
    <button :disabled="disabled" :type="type" class="button button-class button-class-main" v-on="clickListeners">
        <slot></slot>
    </button>
</template>

<script>
    export default {
        name: 'Button',

        props: {
            disabled: {
                type: Boolean,
                default: false,
            },

            type: {
                type: String,
                default: 'button',
            },

        },

        computed: {
            clickListeners: function () {
                return {
                    ...this.$listeners,
                };
            },
        },
    };
</script>

<style lang="scss">
    .button.button-class.button-class-main {
        height: 36px;
        min-width: 64px;
        padding: 0 16px;
        font-size: 0.875rem;
        color: #fff;
        text-align: center;
        text-transform: uppercase;
        cursor: pointer;
        box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
        align-items: center;
        border-radius: 4px;
        display: inline-flex;
        flex: 0 0 auto;
        font-weight: 500;
        letter-spacing: 0.0892857143em;
        justify-content: center;
        outline: 0;
        position: relative;
        text-decoration: none;
        text-indent: 0.0892857143em;
        transition-duration: 0.28s;
        transition-property: box-shadow, transform, opacity;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

        &.primary {
            background-color: #4caf50 !important;
            border-color: #4caf50 !important;

            &:hover {
                background-color: #3d863e !important;
            }
        }

        &.secondary {
            background-color: #ff5252 !important;
            border-color: #ff5252 !important;

            &:hover {
                background-color: #780606 !important;
            }
        }
    }
</style>
