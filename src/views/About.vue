<template>
    <div v-if="!showAnim" class="about-box">
        <AboutHeader />
        <Table />
    </div>
    <Animation @anim="closeAnim($event)" v-if="showAnim" />
</template>

<script>
import Animation from "@/components/Animation.vue";
import Table from "@/components/Table.vue";
import AboutHeader from "@/components/AboutHeader.vue";
export default {
    components: {
        Animation,
        Table,
        AboutHeader,
    },
    data() {
        return {
            showAnim: true,
        };
    },
    methods: {
        closeAnim(n) {
            this.showAnim = n;
        },
    },
};
</script>

<style scoped>
.about-box {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: black;
}
</style>
