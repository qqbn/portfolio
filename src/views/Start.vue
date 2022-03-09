<template>
    <div v-if="!test" class="start-box">
        <div class="main-box">
            <h1>{{ header }}</h1>
            <p>
                {{ par1 }}
            </p>
            <p>{{ par2 }}</p>
        </div>
        <div class="navs">
            <router-link class="link" :to="{ name: 'About' }"
                >ABOUT</router-link
            >
            <router-link class="link" :to="{ name: 'Projects' }"
                >PROJECTS</router-link
            >
            <router-link class="link" :to="{ name: 'Contact' }"
                >CONTACT</router-link
            >
        </div>
    </div>
    <Animation @anim="closeAnim($event)" v-if="test" />
</template>

<script>
import Animation from "@/components/Animation.vue";
import { ref } from "@vue/reactivity";
import textAnim from "../composables/textAnim";
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
        // loop() {
        //     console.log(this.text.length);
        //     if (this.lala < this.text.length) {
        //         this.header += this.text.charAt(this.lala);
        //         console.log(this.header);
        //         this.lala += 1;
        //         setTimeout(this.loop, 500);
        //     } else {
        //         this.lala = 0;
        //     }
        // },
    },
    created() {
        // setTimeout(() => {
        //     this.loop();
        // }, 2000);
    },
    setup() {
        const { loop, header, par1, par2 } = textAnim([
            "Hello there !",
            "My name is Jakub and I am a front end developer (junior at the moment)",
            "On this page you will learn a bit about me and my projects",
        ]);

        loop();
        return { header, par1, par2 };
    },
};
</script>

<style scoped>
.start-box {
    height: 100%;
    width: 100%;
}
.main-box {
    height: 70%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    color: #00eb37;
    font-family: "Orbitron", sans-serif;
    padding: 0px 50px;
}
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
}
.main-box h1 {
    font-size: 36px;
}
.main-box p {
    font-size: 22px;
}
</style>