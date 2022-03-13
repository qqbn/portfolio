<template>
    <div class="contact-box" v-if="!showAnim">
        <ContactHeader />
        <ContactLinks />
        <p class="small-text">Click the icons</p>
        <router-link class="link" :to="{ name: 'Start' }">GO BACK!</router-link>
    </div>
    <Animation @anim="closeAnim($event)" v-if="showAnim" />
</template>

<script>
import Animation from "@/components/Animation.vue";
import ContactHeader from "@/components/ContactHeader.vue";
import ContactLinks from "@/components/ContactLinks.vue";
export default {
    components: {
        Animation,
        ContactHeader,
        ContactLinks,
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
.contact-box {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    background: black;
}
.small-text {
    text-align: left;
    font-size: 14px;
    color: #00eb37;
    font-family: "Orbitron", sans-serif;
}

.link {
    color: #00eb37 !important;
    font-size: 24px;
    text-decoration: none;
    transition: 0.5s;
    font-family: "Orbitron", sans-serif;
    margin: 50px 0px;
}
.link:hover {
    border: 1px #00eb37 dashed;
    font-size: 26px;
}
</style>