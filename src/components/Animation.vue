<template>
    <div class="container">
        <div class="box" v-for="n in 12" :key="n" ref="box"></div>
    </div>
</template>

<script>
import { translate } from "../composables/animate";
export default {
    data() {
        return {};
    },
    methods: {
        animation() {
            translate(this.$refs.box);
            setTimeout(() => {
                this.$emit("anim", false);
            }, 1500);
        },
    },
    mounted() {
        this.animation();
    },
};
</script>

<style>
.container {
    display: grid;
    grid-template-columns: auto auto auto auto;
    width: 100%;
    height: 100%;
}
.box {
    margin: 2px;
    background: #00eb37;
}
@media only screen and (max-width: 500px) {
    .container {
        grid-template-columns: auto auto auto;
    }
}
</style>