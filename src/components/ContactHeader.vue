<template>
    <div class="contact-header">
        <p>
            If you want to contact me there are several ways. Below are the
            platforms for contacting me.
        </p>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
.contact-header {
    height: 100%;
    width: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 70px 0px;
    color: #00eb37;
    font-family: "Orbitron", sans-serif;
    font-size: 22px;
    text-align: left;
    flex-direction: column;
    background: black;
}
@media only screen and (max-width: 430px) {
    .contact-header {
        text-align: center;
        font-size: 18px;
    }
}
</style>