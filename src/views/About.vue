<template>
    <div v-if="!test" class="about-box">
        <AboutHeader />
        <Table />
    </div>
    <Animation @anim="closeAnim($event)" v-if="test" />
</template>

<script>
import Animation from "@/components/Animation.vue";
import Table from "@/components/Table.vue";
import AboutHeader from "@/components/AboutHeader.vue";
export default {
    components: {
        Animation,
        Table,
        AboutHeader,
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
    },
};
</script>

<style scoped>
.about-box {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: black;
}
.about-text {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 70px 0px;
}
.left-box {
    height: 100%;
    width: 70%;
    color: #00eb37;
    font-family: "Orbitron", sans-serif;
    font-size: 22px;
    text-align: left;
    padding: 0px 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    /* background: red; */
}
.right-box {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 100%;
    width: 30%;
    /* background: blue; */
    flex-direction: column;
}
.avatar {
    height: 200px;
    width: 200px;
    border-radius: 50%;
    background: #00eb37;
    display: flex;
    justify-content: center;
    align-items: center;
}
.avatar img {
    height: 100%;
    width: 100%;
    border-radius: 50%;
    opacity: 0.5;
}
.avatar:hover img {
    background: transparent;
    opacity: 1;
    transition: 1s ease-in-out;
}
.me {
    color: #00eb37;
    opacity: 0;
    transition: 0.3s;
    margin-top: 10px;
    font-family: "Orbitron", sans-serif;
}
.avatar:hover + .me {
    opacity: 1;
}
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
</style>
