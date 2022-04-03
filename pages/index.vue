<template>
    <NuxtLayout name="public">
        <Card class="front-page">
            <template #content>
                <div class="grid grid-nogutter surface-section text-800">
                    <div
                        class="col-12 md:col-6 p-6 text-center md:text-left flex align-items-center"
                    >
                        <section>
                            <span class="block text-6xl font-bold mb-1">This is the home of</span>
                            <div
                                class="text-6xl text-primary font-bold mb-3"
                            >systematic mapping studies</div>
                            <p
                                class="mt-0 mb-4 text-700 line-height-3"
                            >A unified platform to conduct systematic mapping studies, which respects your data and reduces cognitive load.</p>
                            <NuxtLink to="/learn-more">
                                <Button
                                    label="Learn More"
                                    type="button"
                                    class="mr-3 p-button-raised"
                                ></Button>
                            </NuxtLink>

                            <NuxtLink to="/login">
                                <Button label="Start now" type="button" class="p-button-outlined"></Button>
                            </NuxtLink>
                        </section>
                    </div>
                    <div class="col-12 md:col-6 overflow-hidden flex">
                        <div class="flex-1"></div>
                        <div class="hero-image">
                            <img
                                src="/img/hero-1.jpg"
                                alt="Image"
                                width="600"
                                class="md:ml-auto block md:h-full"
                            />
                        </div>
                    </div>
                </div>

                <div class="surface-section px-4 py-8 md:px-6 lg:px-8 text-center">
                    <div class="mb-3 font-bold text-2xl">
                        <span class="text-900">One tool,&nbsp;</span>
                        <span class="text-primary">Many benefits</span>
                    </div>
                    <div
                        class="text-700 text-sm mb-6"
                    >We made this software for real research needs, and it became out so good that we want to share it to the whole world!</div>
                    <div class="grid">
                        <div class="col-12 md:col-4 mb-4 px-5">
                            <span
                                class="p-3 shadow-2 mb-3 inline-block surface-card"
                                style="border-radius: 10px"
                            >
                                <i class="pi pi-desktop text-4xl text-primary"></i>
                            </span>
                            <div class="text-900 mb-3 font-medium">Built for real use</div>
                            <span
                                class="text-700 text-sm line-height-3"
                            >The software is tailored exclusively for systematic mapping studies. There is no irrelevant features to confuse you.</span>
                        </div>
                        <div class="col-12 md:col-4 mb-4 px-5">
                            <span
                                class="p-3 shadow-2 mb-3 inline-block surface-card"
                                style="border-radius: 10px"
                            >
                                <i class="pi pi-lock text-4xl text-primary"></i>
                            </span>
                            <div class="text-900 mb-3 font-medium">Encrypted accounts</div>
                            <span
                                class="text-700 text-sm line-height-3"
                            >We take your privacy seriously and keep all account details encrypted. We don't even use passwords, but you login via email link.</span>
                        </div>
                        <div class="col-12 md:col-4 mb-4 px-5">
                            <span
                                class="p-3 shadow-2 mb-3 inline-block surface-card"
                                style="border-radius: 10px"
                            >
                                <i class="pi pi-check-circle text-4xl text-primary"></i>
                            </span>
                            <div class="text-900 mb-3 font-medium">Easy to Use</div>
                            <span
                                class="text-700 text-sm line-height-3"
                            >Our software makes sense! You don't need any technical expertise to use it.</span>
                        </div>
                        <div class="col-12 md:col-4 mb-4 px-5">
                            <span
                                class="p-3 shadow-2 mb-3 inline-block surface-card"
                                style="border-radius: 10px"
                            >
                                <i class="pi pi-globe text-4xl text-primary"></i>
                            </span>
                            <div class="text-900 mb-3 font-medium">Full control of data</div>
                            <span
                                class="text-700 text-sm line-height-3"
                            >You control your research data. Importing and exporting data in excel or csv formats is one of the core feature of our software.</span>
                        </div>
                        <div class="col-12 md:col-4 mb-4 px-5">
                            <span
                                class="p-3 shadow-2 mb-3 inline-block surface-card"
                                style="border-radius: 10px"
                            >
                                <i class="pi pi-github text-4xl text-primary"></i>
                            </span>
                            <div class="text-900 mb-3 font-medium">Open Source</div>
                            <span
                                class="text-700 text-sm line-height-3"
                            >It really is easy to audit our software or contribute in the development. With a little technical skills you may even host your own instance.</span>
                        </div>
                        <div class="col-12 md:col-4 md:mb-4 mb-0 px-3">
                            <span
                                class="p-3 shadow-2 mb-3 inline-block surface-card"
                                style="border-radius: 10px"
                            >
                                <i class="pi pi-shield text-4xl text-primary"></i>
                            </span>
                            <div class="text-900 mb-3 font-medium">Trusted Maintainer</div>
                            <span
                                class="text-700 text-sm line-height-3"
                            >The software is developed in a research project in Computing Education Research group at the University of Jyväskylä, Finland.</span>
                        </div>
                    </div>
                </div>

                <div class="surface-section px-4 py-8 md:px-6 lg:px-8">
                    <div class="text-700 text-center">
                        <div class="text-bluegray-500 font-bold mb-3">
                            <i class="pi pi-github"></i>&nbsp;WE ARE OPEN SOURCE
                        </div>
                        <div class="text-900 font-bold text-5xl mb-3">Start your research now</div>
                        <div
                            class="text-700 text-2xl mb-5 px-8"
                        >Conducting systematic mapping studies has never been this painless. Create your research project today for free with our open source platform.</div>
                        <NuxtLink to="/login">
                            <Button
                                label="Start"
                                icon="pi pi-sign-in"
                                class="font-bold px-5 py-3 p-button-raised p-button-rounded white-space-nowrap"
                            ></Button>
                        </NuxtLink>
                    </div>
                </div>
            </template>
        </Card>
    </NuxtLayout>
</template>

<style lang="scss" scoped>
.hero-image {
    position: relative;
    overflow: hidden;

    &:after {
        content: "";
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        opacity: 0.55;
        background-image: linear-gradient(45deg, darken(#566cd0, 5%), #740dc9);
        clip-path: polygon(28% 0, 100% 0%, 100% 100%, 0 100%);
    }

    img {
        clip-path: polygon(8% 0, 100% 0%, 100% 100%, 0 100%);
        filter: grayscale(100%);
    }
}

.front-page {
    max-width: 1400px;
    margin: 0 auto;
}
</style>