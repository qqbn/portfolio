<template>
    <h1 v-if="!test">ABOUT!</h1>
    <Animation @anim="closeAnim($event)" v-if="test" />
</template>

<script>
import Animation from "@/components/Animation.vue";
export default {
    components: {
        Animation,
    },
    data() {
        return {
            test: true,
        };
    },
    methods: {
        closeAnim(n) {
            this.test = n;
        },
    },
};
</script>

<style>
</style>
