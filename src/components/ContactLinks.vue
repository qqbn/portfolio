<template>
    <div class="contact-links">
        <div class="icon">
            <img
                src="@/assets/email.png"
                alt="icon"
                @click="saveText(contacts[0], 1)"
            />
        </div>
        <div class="icon">
            <img
                src="@/assets/discord.png"
                alt="icon"
                @click="saveText(contacts[1], 2)"
            />
        </div>
        <div class="icon">
            <a href="https://github.com/qqbn" target="_blank">
                <img src="@/assets/gh.png" alt="icon" />
            </a>
        </div>
    </div>
</template>

<script>
import copyText from "../composables/copyText";
import json from "../data/contact.json";
import { ref } from "@vue/reactivity";
export default {
    setup() {
        const contacts = ref(null);
        contacts.value = json;
        const { saveText } = copyText();
        return { saveText, contacts };
    },
};
</script>

<style scoped>
.contact-links {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    background: black;
    padding: 50px 0px;
}
.icon {
    width: 33%;
    height: 150px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
}
.icon img {
    cursor: pointer;
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
@media only screen and (max-width: 430px) {
    .contact-links {
        flex-direction: column;
        background: black;
        height: 100%;
    }
    .icon {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
}
</style>