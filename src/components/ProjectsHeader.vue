<template>
    <div class="projects-header">
        <p>
            It's nice to see you here. You have to be a really curious person,
            if you want to browse through my projects. Down below you can find a
            list of projects, that I'm proud of. Some of them are deployed in
            the Internet, so you can play with them as much as you want. Also,
            there's a Github repo link attached to every project, so you can
            dive into code. Best wishes and have fun!
        </p>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
.projects-header {
    height: 100%;
    width: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 70px 0px;
    color: #00eb37;
    font-family: "Orbitron", sans-serif;
    font-size: 22px;
    text-align: left;
}
@media only screen and (max-width: 700px) {
    .projects-header {
        width: 100%;
        text-align: left;
        padding: 70px 50px;
    }
}
</style>