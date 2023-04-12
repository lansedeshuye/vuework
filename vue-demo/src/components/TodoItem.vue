<template>
    <li>
        <slot name="pre-icon" :random="random"></slot>
        <span v-if="!del">{{ title }}</span>
        <span v-else style="text-decoration: line-through">{{ title }}</span>
        <button v-show="!del" @click="handleClick">删除</button>
        <slot name="suf-icon"></slot>
        <slot name="defualt-icon">defualt</slot>
    </li>
</template>

<script>

export default {
    props: {
        title: String,
        del: {
            type: Boolean,
            default: false,
        }
    },
    data: function () {
        return {
            random: Math.random()
        }
    },
    methods: {
        handleClick() {
            console.info('点击删除按钮')
            this.$emit('delete', this.title)
        },

    }
}
</script>

<style scoped></style>