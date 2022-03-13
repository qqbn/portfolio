<template>
    <div class="key">
        <div class="screen" :class="{ err: isErr }">
            <p v-show="!isErr">{{ this.code }}</p>
            <p v-show="isErr">ERROR</p>
        </div>
        <div class="keybord">
            <div class="row">
                <button v-for="n in 3" :key="n" @click="btnClicked(n)">
                    {{ n }}
                </button>
            </div>
            <div class="row">
                <button v-for="n in 3" :key="n" @click="btnClicked(n + 3)">
                    {{ n + 3 }}
                </button>
            </div>
            <div class="row">
                <button v-for="n in 3" :key="n" @click="btnClicked(n + 6)">
                    {{ n + 6 }}
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import { defineEmits, ref } from "vue";
import { useRouter, useRoute } from "vue-router";
export default {
    components: {
        Animation,
    },
    data() {
        return {
            code: "",
        };
    },
    setup() {
        const router = useRouter();
        const anim = ref(false);
        const code = ref("");
        const isErr = ref(false);
        const counter = ref(0);
        const btnClicked = (n) => {
            counter.value += 1;
            const pass = "6523";
            code.value += n.toString();
            if (counter.value === 4) {
                if (code.value === pass) {
                    anim.value = true;
                    router.push({ name: "Start" });
                } else {
                    isErr.value = true;
                    setTimeout(reset, 2000);
                }
            }
        };

        const reset = () => {
            counter.value = 0;
            isErr.value = false;
            code.value = "";
        };
        return { code, btnClicked, isErr, anim };
    },
};
</script>

<style scoped>
.err {
    background-color: rgb(199, 6, 6) !important;
    color: rgb(92, 14, 14) !important;
}
.key {
    width: 400px;
    height: 500px;
    background: rgb(201, 201, 201);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    border-radius: 20px;
}
.screen {
    width: 90%;
    background: #024612;
    height: 15%;
    color: #00eb37;
    font-family: "Electrolize", sans-serif;
    font-size: 36px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
}
.keybord {
    height: 80%;
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
.row {
    width: 100%;
    height: 30%;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
button {
    width: 30%;
    height: 90%;
    font-size: 28px;
    cursor: pointer;
}
.reset {
    height: auto;
    width: auto;
    border: none;
    background: red;
    font-size: 14px;
}
@media only screen and (max-width: 500px) {
    .key {
        width: 300px;
        height: 400px;
    }
}
@media only screen and (max-width: 500px) {
    .key {
        width: 250px;
        height: 350px;
    }
}
</style>