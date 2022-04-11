<template>
    <NuxtLayout name="public">
        <div id="login-page">
            <Card>
                <template #title>
                    Login to
                    <HeaderLogo />
                </template>

                <template #content>
                    <p>
                        A login link will be emailed to you. If you do not have an account yet,
                        one will be created upon the first login.
                    </p>
                    <Panel header="Privacy policy summary">
                        <p>
                            We take your privacy seriously and keep in database only the necessary personal information
                            — in an encrypted form.
                        </p>

                        <p>The saved personal information are:</p>

                        <ul>
                            <li>
                                <span class="font-semibold">Your email address:</span> Needed for login and keeping
                                track
                                in which mapping projects you have an access. It is stored in an encrypted form in our
                                database.
                            </li>
                            <li>
                                <span class="font-semibold">Your IP address:</span> Needed for security purposes in the
                                login
                                process. It is saved in an encrypted form and deleted after login.
                            </li>
                            <li>
                                <span class="font-semibold">Your browser fingerprint:</span> Needed for security
                                purposes to
                                protect your login session. It is saved in an encrypted form in our database.
                            </li>
                        </ul>

                        <p>
                            You are also very much welcomed to audit the privacy of this software. The open source
                            codebase can be found at
                            <a
                                href="https://github.com/kokkoniemi/mato-cloud/"
                            >
                                GitHub
                                repository
                            </a>, where you can raise an issue or provide a pull request.
                        </p>

                        <div class="mt-4">
                            <Divider />
                            <div class="flex align-items-center">
                                <InputSwitch v-model="policyAccepted" />
                                <span class="ml-2 flex-grow-1">Accept policy</span>
                                <InlineMessage severity="info" class="ml-2">Needed for login</InlineMessage>
                            </div>
                        </div>
                    </Panel>
                </template>
                <template #footer>
                    <Message severity="error" v-if="errorMessage">{{ errorMessage }}</Message>
                    <div class="p-inputgroup">
                        <client-only>
                            <InputText placeholder="Email address" v-model="email" />
                            <Button
                                icon="pi pi-send"
                                iconPos="right"
                                label="Request a login link"
                                :disabled="!policyAccepted"
                                :loading="submitting"
                                @click="submit"
                            />
                        </client-only>
                    </div>
                </template>
            </Card>
        </div>
    </NuxtLayout>
</template>

<script setup>
const policyAccepted = useState('policyAccepted', () => false);
const email = ref('');
const submitting = useState('submitting', () => false);
const errorMessage = useState('errorMessage', () => '')

const submit = async () => {
    submitting.value = true;
    try {
        const res = await $fetch('/api/auth/linkRequest', {
            method: 'POST',
            body: { email: email.value }
        });
        submitting.value = false;

        const { accepted } = res;
        if (accepted.length > 0 && accepted[0] === email.value) {
            await navigateTo({ path: '/login/requested' });
        }
    } catch (e) {
        submitting.value = false;
        errorMessage.value =
            'Oh no! Something went wrong. Please, check the email ' +
            'address for possible miss-spellings and try again.'
    }

}
</script>

<style lang="scss">
#login-page {
    max-width: 700px;
    margin: 0 auto;
}
</style>
