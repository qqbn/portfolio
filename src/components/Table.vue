<template>
    <div class="table">
        <div class="row">
            <div class="left-table-header">TECH STACK</div>
            <div class="right-table-header">INTERESTS</div>
        </div>
        <div class="row" v-for="tech in techs" :key="tech">
            <div class="left-table-header">
                <p>
                    <a :href="tech.technology.url" target="_blank">{{
                        tech.technology.name
                    }}</a>
                </p>
            </div>
            <div class="right-table-header">
                <p>{{ tech.interest }}</p>
            </div>
        </div>

        <router-link class="link" :to="{ name: 'Start' }">GO BACK!</router-link>
    </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import json from "../data/techs.json";
export default {
    setup() {
        const techs = ref(null);
        techs.value = json;
        return { techs };
    },
};
</script>

<style scoped>
.table {
    width: 100%;
    height: 100%;
    background: black;
    padding: 50px 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
.row {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #00eb37;
    font-family: "Orbitron", sans-serif;
    border-bottom: 3px dashed #00eb37;
    padding: 10px 0px;
}
.left-table-header {
    width: 50%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 50px;
    padding: 0px 20px;
    border-right: 3px dashed #00eb37;
    font-size: 20px;
}
.right-table-header {
    width: 50%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 50px;
    padding: 0px 20px;
    border-left: 3px dashed #00eb37;
    font-size: 20px;
}
.left-table-header p {
    cursor: pointer;
    font-size: 16px;
    transition: 0.5s;
}
.right-table-header p {
    font-size: 16px;
}
.left-table-header > p:hover {
    border: 1px #00eb37 dashed;
    font-size: 18px;
}
a {
    text-decoration: none;
    color: #00eb37;
}
.link {
    color: #00eb37 !important;
    font-size: 24px;
    text-decoration: none;
    transition: 0.5s;
    font-family: "Orbitron", sans-serif;
    margin-top: 50px;
}
.link:hover {
    border: 1px #00eb37 dashed;
    font-size: 26px;
}
@media only screen and (max-width: 700px) {
    .row {
        width: 80%;
    }
    .left-table-header,
    .right-table-header {
        font-size: 18px;
    }
    .left-table-header p {
        font-size: 14px;
    }
    .right-table-header p {
        font-size: 14px;
    }
}
@media only screen and (max-width: 400px) {
    .row {
        width: 100%;
    }
    .link {
        font-size: 18px;
    }
    .link:hover {
        font-size: 22px;
    }
}
</style>
