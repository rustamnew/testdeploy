<script setup lang="ts">
const _props = defineProps({
    callback: {
        type: Function,
        required: false,
    },
    label: {
        type: String,
        required: true,
    },
    color: {
        type: String,
        required: false,
        default: 'purple',
    },
    href: {
        type: String,
        required: false,
    },
    icon: {
        type: String,
        required: false,
    },
    classname: {
        type: String,
        required: false,
    },
})
</script>

<template>
    <template v-if="!href">
        <button class="button" :class="color ? `${color} ${classname}` : classname" @click="callback ? callback() : null">
            <img v-if="icon" :src="`/images/icons/${icon}.svg`" :alt="icon" class="button__icon">

            <span v-if="label">{{ label }}</span>
        </button>
    </template>

    <template v-if="href">
        <a :href="href" target="_blank" class="button" :class="classname ? classname : null">
            <button :class="color ? color : null">
                <img v-if="icon" :src="`/images/icons/${icon}.svg`" :alt="icon" class="button__icon">

                <span v-if="label">{{ label }}</span>
            </button>
        </a>
    </template>
</template>

<style scoped lang="scss">
    button {
        padding: 10px 17px;
        border-radius: 0.1875rem;
        font-weight: 500;
        display: inline-flex;
        justify-content: center;
        align-items: center;

        &.purple {
            background: linear-gradient(119.64deg, #C071FF 21.1%, #A129FF 80.68%);
            box-shadow: 0px 0px 30px rgba(113, 117, 216, 0.2);
            transition: box-shadow 0.3s ease;
            color: #ffffff;

            &:hover {
                background: radial-gradient(120.88% 337.27% at 13.44% -94.55%, #FFA500 0%, #A129FF 100%);
            }
        }

        &.gray {
            background: rgba(117, 129, 165, 0.07);
            color: #051836;

            &:hover {
                background-color: rgba(117, 129, 165, 0.1);
            }
        }

        &.transparent {
            background: transparent;
            color: #282828;
        }

        &.yellow {
            background: #ffa500;
            color: #282828;
            border: 2px solid #ffa500;
            color: #ffffff;
            transition: all 0.3s ease;

            &:hover {
                color: #ffffff;
                box-shadow: 11px 16px 30px rgba(202, 154, 119, 0.37);

            }
        }
        &.yellow-transparent {
            background: transparent;
            color: #282828;
            border: 2px solid #ffa500;
            color: #ffa500;
            transition: all 0.3s ease;

            &:hover {
                color: #ffffff;
                background: #ffa500;
                box-shadow: 0px 0px 30px rgba(202, 154, 119, 0.37);
            }
        }

        .button__icon {
            margin-right: 0.6875rem;

            &:last-child {
                margin-right: 0
            }
        }

        span {
            white-space: nowrap;
        }
    }

    .mobile {
        display: none;
    }

    @media screen and (max-width: 800px) {
        .desktop {
            display: none;
        }
        .mobile {
            display: inline-flex;
        }
    }
</style>
