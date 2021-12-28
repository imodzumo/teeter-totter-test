<template>
    <div class="container">
        <Header/>
        <TeeterTotter/>
    </div>
</template>

<script>
    import Header from '@/components/Header'
    import TeeterTotter from '@/components/TeeterTotter'

    export default {
        components: {
            Header,
            TeeterTotter
        },
    }
</script>

<style lang="scss">
    .container {
        display: flex;
        flex-direction: column;
        height: 100vh;
        overflow: hidden;
    }

    *:focus {
        outline: none;
    }
</style>
