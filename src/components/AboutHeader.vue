<template>
    <div class="about-text">
        <div class="left-box">
            <p>
                If you are already here, I think you would like to know
                something about me. I started my adventure with IT in 2018, and
                since 2020 I have been interested in web development. I have an
                engineer degree in computer science and a great desire to learn
                new technologies. Below you will find my technology stack and
                interests.
            </p>
        </div>
        <div class="right-box">
            <div class="avatar">
                <img src="@/assets/avatar.png" alt="avatar" />
            </div>
            <p class="me">Hey thats me!</p>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
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
    display: flex;
    justify-content: center;
    align-items: center;
}
.avatar img {
    height: 100%;
    width: 100%;
    border-radius: 50%;
}

.me {
    color: #00eb37;
    margin-top: 10px;
    font-family: "Orbitron", sans-serif;
}
@media only screen and (max-width: 700px) {
    .about-text {
        flex-direction: column-reverse;
        justify-content: space-between;
        padding: 0px !important;
    }
    .left-box {
        height: 50%;
        width: 100%;
        font-size: 20px;
    }
    .right-box {
        width: 100%;
        padding: 20px 20px;
    }
    .me {
        margin-top: 0px;
    }
}
@media only screen and (max-width: 500px) {
    .left-box {
        font-size: 16px;
        text-align: center;
    }
}
</style>