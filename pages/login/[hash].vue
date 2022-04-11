<template>
    <NuxtLayout name="public">
        <div id="login-page">
            <Card>
                <template #title>
                    <HeaderLogo />
                </template>

                <template #content>
                    <div class="text-center spinner my-6">
                        <i class="pi pi-spin pi-spinner text-primary"></i>
                    </div>
                </template>
            </Card>
        </div>
    </NuxtLayout>
</template>

<script setup>
</script>

<style lang="scss">
.spinner * {
    font-size: 2.5rem;
}
</style>
