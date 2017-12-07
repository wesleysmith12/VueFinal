<template>
    <div class="container">
        <!--ToDo: Load app-header-->
        <app-header></app-header>
        <div class="row">
            <div class="col-xs-12">
                <transition name="slide" mode="out-in">
                    <!--ToDo: Load router-view-->
                    <router-view></router-view>
                </transition>
            </div>
        </div>
    </div>
</template>

<script>
    //ToDo: Import Header Component
    import Header from './components/Header.vue'

    export default {
        //ToDo: Initialize Header component and name it appHeader

        //ToDo: On page creation dispatch 'initStocks' to the vuex $store*

        data() {

        },
        methods: {

        },
        components: {
            appHeader: Header
        },
        created: function () {
            this.$store.dispatch('initStocks')
        }

    }
</script>

<style>
    body {
        padding: 30px;
    }

    /*ToDo: Create slide-in effect for enter-active*/
    /*ToDo: Create slide-in effect for enter-leave*/

    /*ToDo: Create Keyframes for slide-in, remember to include from and to*/
        /*You can use any settings*/

    /*ToDo: Create Keyframes for slide-out, remember to include from and to*/
        /*You can use any settings*/

</style>

