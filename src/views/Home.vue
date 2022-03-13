<template>
    <div class="home">
        <div class="headers">
            <h1 id="header-one">You are almost there</h1>
            <h4 id="header-two">Just enter the code #6523#</h4>
        </div>
        <Device />
    </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Device from "@/components/Device.vue";
import textAnim from "../composables/textAnim";
import { ref } from "vue";

export default {
    name: "Home",
    components: {
        HelloWorld,
        Device,
    },
    data() {
        return {};
    },
    setup() {},
    mounted() {
        // const obj = document.getElementById("header-one");
        // // console.log(obj);
    },
    created() {},
};
</script>
<style scoped>
.home {
    height: 100%;
}
.headers {
    width: 100%;
    height: 15%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
h1,
h4 {
    color: #00eb37;
    font-family: "Orbitron", sans-serif;
    /* font-family: 'Electrolize', sans-serif; */
}

@media only screen and (max-width: 400px) {
    h1 {
        font-size: 28px;
    }
}
@media only screen and (max-width: 300px) {
    h1 {
        font-size: 24px;
    }
}
</style>
