<template>
    <div class="navs">
        <router-link class="link" :to="{ name: 'About' }">ABOUT</router-link>
        <router-link class="link" :to="{ name: 'Projects' }"
            >PROJECTS</router-link
        >
        <router-link class="link" :to="{ name: 'Contact' }"
            >CONTACT</router-link
        >
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
.navs {
    height: 30%;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: #00eb37 !important;
    font-family: "Orbitron", sans-serif;
}
.link {
    color: #00eb37 !important;
    font-size: 22px;
    text-decoration: none;
    transition: 0.5s;
}
.link:hover {
    border: 1px #00eb37 dashed;
    font-size: 24px;
}
@media only screen and (max-width: 480px) {
    .navs {
        flex-direction: column;
    }
}
@media only screen and (max-width: 400px) {
    .link {
        color: #00eb37 !important;
        font-size: 18px;
        text-decoration: none;
    }
}
</style>