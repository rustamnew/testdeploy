<template>
    <div class="hamburger">
        <div class="line" />
        <div class="line" />
        <div class="line" />
    </div>
</template>

<style scoped lang="scss">
    .hamburger {
        display: flex;
        justify-content: center;
        flex-direction: column;
        width: 35px;
        height: 40px;
        cursor: pointer;

        .line {
            background-color: #a129ff;
            width: 100%;
            height: 4px;
            border-radius: 4px;

            margin-bottom: 8px;

            &:last-child {
                margin-bottom: 0;
            }
        }
    }
</style>
