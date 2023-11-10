<template>
    <NuxtLayout name="public">
        <div id="login-page">
            <Card>
                <template #title>
                    <HeaderLogo />
                </template>

                <template #content>
                    <p>
                    <div class="text-center spinner my-6">
                        <i v-if="errorMessage.length === 0" class="pi pi-spin pi-spinner text-primary"></i>
                        <i v-else class="pi pi-exclamation-triangle text-primary"></i>
                    </div>
                    <Message severity="error" v-if="errorMessage" :closable="false">{{ errorMessage }}</Message>
                    </p>
                </template>
            </Card>
        </div>
    </NuxtLayout>
</template>

<script setup>
definePageMeta({
    title: 'Login in progress...',
});

const route = useRoute();
const loginHash = route.params.hash;
const email = route.query.u;
const errorMessage = useState('errorMessage', () => '')

const doLogin = async () => {
    const { visitorId } = await useFingerprint();

    try {
        const res = await $fetch('/api/auth/login', {
            method: 'POST',
            body: {
                email,
                loginHash,
                fingerprint: visitorId
            }
        });

        const { token } = res;
        if (token.length > 0) {
            localStorage.setItem('refresh', token);
            document.location.href = '/projects';
            // await navigateTo({ path: '/projects' }); disabled due to a bug in nuxt3 (it's at alpha stage)
        }
    } catch (e) {
        errorMessage.value =
            'Oh no! Something went wrong. Make sure the login link is not expired and ' +
            'you are using it on the same device you made the login request with.'
    }
};

if (process.client) {
    await doLogin();
}
</script>

<style lang="scss">
.spinner * {
    font-size: 2.5rem;
}
</style>
