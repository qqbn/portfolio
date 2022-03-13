<template>
    <div class="projects-list">
        <div class="row" v-for="project in projects" :key="project">
            <div class="left">{{ project.name }}</div>
            <div class="center">
                {{ project.desc }}
            </div>
            <div class="right">
                <div class="left-img" v-if="project.deploy">
                    <a :href="project.deploy">
                        <img class="icon" src="@/assets/www.png" alt=""
                    /></a>
                </div>
                <div class="right-img">
                    <a :href="project.gh">
                        <img class="icon" src="@/assets/gh.png" alt="" />
                    </a>
                </div>
            </div>
        </div>
        <router-link class="link" :to="{ name: 'Start' }">GO BACK!</router-link>
    </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import json from "../data/projects.json";
export default {
    setup() {
        const projects = ref(null);
        projects.value = json;
        console.log(projects.value);
        return { projects };
    },
};
</script>

<style scoped>
.projects-list {
    width: 100%;
    height: 100%;
    /* background: red; */
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 0px 50px;
}
.row {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80px;
    border: 2px dashed #00eb37;
}
.left {
    /* background: blue; */
    width: 15%;
    height: 100%;
    color: #00eb37;
    font-family: "Orbitron", sans-serif;
    font-size: 18px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    border-right: 2px dashed #00eb37;
}
.right {
    /* background: blue; */
    width: 15%;
    height: 100%;
    border-left: 2px dashed #00eb37;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.center {
    /* background: green; */
    width: 70%;
    height: 100%;
    color: #00eb37;
    font-family: "Orbitron", sans-serif;
    font-size: 14px;
    text-align: left;
    display: flex;
    align-items: center;
    justify-content: center;
}

.left-img,
.right-img {
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.icon {
    height: 50px;
    width: 50px;
    cursor: pointer;
}
.row:hover {
    border: 4px #00eb37 solid;
}
.row:hover > .left {
    border-right: 4px #00eb37 solid;
}
.row:hover > .right {
    border-left: 4px #00eb37 solid;
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
@media only screen and (max-width: 860px) {
    .icon {
        height: 35px;
        width: 35px;
    }
    .left {
        font-size: 16px;
    }
}
@media only screen and (max-width: 700px) {
    .row {
        flex-direction: column;
        margin-bottom: 50px;
        height: 300px;
        padding: 0px 0px;
    }
    .left {
        width: 100%;
        height: 25%;
        font-size: 20px;
        border-bottom: #00eb37 2px dashed;
    }
    .right {
        width: 100%;
        height: 25%;
        border-left: none;
        border-top: #00eb37 2px dashed;
        justify-content: center;
        align-items: center;
    }
    .left-img,
    .right-img {
        height: 100%;
        width: 50%;
    }
    .center {
        width: 100%;
        height: 50%;
        font-size: 18px;
        text-align: center;
    }
    .row:hover > .left {
        border-bottom: 4px #00eb37 solid;
    }
    .row:hover > .right {
        border-top: 4px #00eb37 solid;
    }
}
@media only screen and (max-width: 400px) {
    .link {
        font-size: 18px;
    }
    .link:hover {
        font-size: 22px;
    }
}
</style>