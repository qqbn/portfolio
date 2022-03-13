<template>
    <div v-if="!showAnim" class="start-box">
        <div class="main-box">
            <h1>{{ header }}</h1>
            <p>
                {{ par1 }}
            </p>
            <p>{{ par2 }}</p>
        </div>
        <Navigation />
    </div>
    <Animation @anim="closeAnim($event)" v-if="showAnim" />
</template>

<script>
import Animation from "@/components/Animation.vue";
import Navigation from "@/components/Navigation.vue";
import textAnim from "../composables/textAnim";
import json from "../data/text.json";
import { ref } from "@vue/reactivity";
export default {
    components: {
        Animation,
        Navigation,
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
    setup() {
        const text = ref(null);
        text.value = json;
        const { loop, header, par1, par2 } = textAnim([
            text.value[0],
            text.value[1],
            text.value[2],
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
.main-box h1 {
    font-size: 36px;
}
.main-box p {
    font-size: 22px;
}
@media only screen and (max-width: 960px) {
    .main-box {
        text-align: left;
    }
}
@media only screen and (max-width: 700px) {
    .main-box {
        align-items: center;
        flex-direction: column;
        margin: 0;
        text-align: left;
    }
}

@media only screen and (max-width: 400px) {
    .main-box {
        text-align: center;
    }
    .main-box h1 {
        font-size: 28px;
    }
    .main-box p {
        font-size: 18px;
    }
}
</style>