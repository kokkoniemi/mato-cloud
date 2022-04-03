<script>
/**
 * This is a public layout
 */
</script>

<template>
    <div id="public-container" class="surface-ground">
        <slot />

        <Divider class="my-6" />
        <div class="font-light font-italic text-center mb-8 text-600">
            <p>
                This software is developed in Computing Education Research group at the University of Jyväskylä, Finland.
            </p>
            <p>
                Maintainer: mikko[at]kokkoniemi[dot]com
            </p>
        </div>
    </div>
    
</template>

<style lang="scss">
#public-container {
    margin: 0 auto;
    min-height: 100vh;
    padding: 20px;
}
</style>