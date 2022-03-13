<template>
    <div class="projects-box" v-if="!showAnim">
        <ProjectsHeader />
        <ProjectsList />
    </div>
    <Animation @anim="closeAnim($event)" v-if="showAnim" />
</template>

<script>
import Animation from "@/components/Animation.vue";
import ProjectsHeader from "@/components/ProjectsHeader.vue";
import ProjectsList from "@/components/ProjectsList.vue";
export default {
    components: {
        Animation,
        ProjectsHeader,
        ProjectsList,
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
.projects-box {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: black;
}
</style>