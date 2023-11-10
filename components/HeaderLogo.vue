<template>
    <span class="site-text-logo" :class="[ !props.small && 'text-2xl',  ]">
        <span class="text-indigo-700">Systematic</span>
        <span class="text-indigo-500">mapping</span>
        <span class="text-indigo-300">study</span>
        <span :class="[props.small ? 'text-xs' : 'text-sm']">.com</span>
    </span>
</template>


<script setup>
const props = defineProps({
    small: { type: Boolean, default: false },
});


</script>

<style lang="scss">
.site-text-logo {
    font-weight: 700;
    font-size: 0.8rem;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}
</style>