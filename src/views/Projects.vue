<template>
    <div class="projects-box" v-if="!test">
        <ProjectsHeader />
        <ProjectsList />
    </div>
    <Animation @anim="closeAnim($event)" v-if="test" />
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

<style scoped>
.projects-box {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: black;
}
</style>