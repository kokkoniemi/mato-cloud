<template>
    <NuxtLayout name="public">
        <div id="login-page">
            <Card>
                <template #title>
                    <HeaderLogo />
                    <Breadcrumb :home="home" :model="items" class="my-3" />
                </template>

                <template #content>
                    <div class="text-center my-6">
                        A login link was sent to email address <strong>{{ email }}</strong>. Please, use the provided
                        link to login.
                    </div>
                </template>
            </Card>
        </div>
    </NuxtLayout>
</template>

<script setup>
const email = useState('email', () => '');
const home = useState('breadcrumHome', () => ({
    icon: 'pi pi-home',
    to: '/'
}));
const items = useState('breadCrumbItems', () => ([
    { label: 'Login', to: '/login' },
    { label: 'Login link requested' }
]));
</script>

<style lang="scss">
</style>
