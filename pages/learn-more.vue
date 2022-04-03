<template>
    <NuxtLayout name="public">
        <div class="learn-more-page">
            <Breadcrumb :home="home" :model="items" class="my-3" />
            <Card>
                <template #content>
                    <client-only>
                        <h3>Table of contents</h3>
                        <Listbox :options="toc" optionLabel="name" class="toc">
                            <template #option="slotProps">
                                <div
                                    @click="goTo(slotProps.option.url)"
                                >{{ slotProps.option.label }}</div>
                            </template>
                        </Listbox>
                    </client-only>

                    <h2 id="story">The story</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac urna orci. Phasellus laoreet,
                        mi nec tincidunt posuere, mauris neque ultrices ex, et imperdiet tellus tortor sed ipsum. Sed
                        posuere nec ante ut ultricies. Praesent malesuada semper interdum. Aliquam a tempor dui, eget
                        dictum mi. Aenean sit amet erat aliquet elit cursus pellentesque sed in ipsum. Morbi ligula
                        lacus, bibendum at malesuada at, aliquam vitae ipsum. Nullam nulla felis, rhoncus at neque sit
                        amet, sollicitudin gravida eros. Etiam vel nulla in velit bibendum aliquet eget non enim. Donec
                        tempor non odio quis gravida. Quisque ut sodales libero. Suspendisse maximus imperdiet lacus
                        quis lobortis.
                    </p>
                    <p>
                        Ut maximus interdum justo non porta. Mauris eget dignissim mauris. Integer vel leo et ex
                        sagittis porta vitae nec lorem. Sed nulla eros, condimentum sit amet eros vel, tincidunt feugiat
                        turpis. Donec commodo ipsum et dictum congue. Donec sed libero fermentum neque luctus ultrices
                        nec vitae urna. Donec egestas lacus condimentum tellus euismod ultricies. Vestibulum finibus
                        blandit tortor id vehicula. Fusce iaculis dolor in dui faucibus, at varius urna rutrum.
                    </p>
                    <p>
                        Phasellus consectetur massa a elit venenatis placerat. Etiam ac est luctus, semper ipsum ac,
                        commodo nisl. Curabitur non pharetra augue. Maecenas leo est, sodales a ullamcorper non,
                        sagittis ut neque. Nulla dictum leo ac viverra rhoncus. Nullam ultrices, ante sed finibus
                        luctus, dui turpis congue enim, sit amet porttitor mauris mi a justo. Fusce lacus ex, laoreet
                        vel odio in, tempus varius sapien. In hac habitasse platea dictumst. Integer est augue, aliquet
                        vitae faucibus at, placerat eget felis. Donec tempor ut metus vel fringilla. Sed dictum sagittis
                        orci et condimentum.
                    </p>
                    <p>
                        Mauris imperdiet pretium lobortis. Etiam augue libero, sagittis ac est ac, pulvinar commodo dui.
                        Maecenas finibus vestibulum varius. Nullam et condimentum urna. Nam commodo tempus turpis et
                        dictum. Vivamus et sem et mauris elementum facilisis. Morbi at ex non urna tempor blandit a id
                        quam. Suspendisse erat diam, sodales id elementum ac, blandit id eros.
                    </p>
                    <h2 id="contribute">Contribute in the project</h2>

                    <p>
                        Ut rhoncus egestas odio, quis vestibulum felis hendrerit volutpat. Duis mattis, nibh et
                        consectetur rhoncus, est dolor laoreet quam, finibus vulputate erat justo at diam. Nullam ac
                        tortor urna. Phasellus eget sagittis magna. Sed quis sagittis arcu, ut eleifend metus. Phasellus
                        tristique convallis erat eu cursus. Quisque bibendum augue ipsum, at consequat mi imperdiet ut.
                        Aliquam condimentum nisi quis commodo tincidunt. Pellentesque massa sem, porta et odio ut,
                        condimentum tincidunt turpis. Aenean ut sodales ante. Quisque fringilla lectus urna, non semper
                        justo ultricies id. Curabitur orci diam, vulputate non sem ut, accumsan viverra odio. Integer
                        luctus rhoncus dictum.
                    </p>
                    <p>
                        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                        Vivamus ac nibh turpis. Integer non semper ipsum. Mauris vitae semper risus, et consequat mi.
                        Phasellus dictum ipsum ut felis fermentum tincidunt. Duis vehicula, arcu ac gravida lobortis,
                        velit sapien commodo massa, id faucibus mi ex quis eros. Vestibulum tempus, magna id dignissim
                        fringilla, mauris nisi auctor nulla, non placerat dolor lorem sed eros. Donec euismod neque
                        nisi, nec eleifend sem venenatis ut.
                    </p>
                    <p>
                        Proin eleifend egestas tempus. Fusce lorem massa, mattis vel tellus sed, placerat venenatis
                        velit. Praesent scelerisque, tellus nec vulputate tincidunt, mi elit vulputate odio, a
                        sollicitudin lectus nunc ac nunc. Nam sed laoreet ex. Quisque commodo eget sem ut fringilla. Ut
                        a tortor at augue maximus feugiat. Fusce varius maximus lorem eget gravida. Pellentesque
                        habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                    </p>
                    <p>
                        Maecenas vitae nulla gravida, varius justo vel, aliquet mauris. Aenean bibendum ex sed sem
                        rhoncus, at euismod diam egestas. Aliquam bibendum pulvinar nibh eget cursus. Quisque in massa
                        fringilla, ultricies magna a, dignissim ex. Maecenas purus nisl, consequat lobortis malesuada
                        at, mollis et augue. Vivamus feugiat tincidunt tincidunt. Vivamus et ex mauris. Donec sed mi
                        tortor. Aenean felis diam, ultricies sed congue ut, auctor id arcu.
                    </p>
                    <p>
                        Pellentesque vel lectus nec elit rutrum scelerisque a a risus. Integer commodo porttitor eros.
                        Cras et ipsum et ligula lacinia iaculis. In in nisi eu mauris aliquam pulvinar non nec neque.
                        Etiam et ante rutrum, faucibus neque nec, semper est. In vitae elit odio. Duis lacinia leo id
                        nisi venenatis lacinia.
                    </p>

                    <h2 id="installation">Install your own systematic mapping study server</h2>
                    <p>
                        Ut rhoncus egestas odio, quis vestibulum felis hendrerit volutpat. Duis mattis, nibh et
                        consectetur rhoncus, est dolor laoreet quam, finibus vulputate erat justo at diam. Nullam ac
                        tortor urna. Phasellus eget sagittis magna. Sed quis sagittis arcu, ut eleifend metus. Phasellus
                        tristique convallis erat eu cursus. Quisque bibendum augue ipsum, at consequat mi imperdiet ut.
                        Aliquam condimentum nisi quis commodo tincidunt. Pellentesque massa sem, porta et odio ut,
                        condimentum tincidunt turpis. Aenean ut sodales ante. Quisque fringilla lectus urna, non semper
                        justo ultricies id. Curabitur orci diam, vulputate non sem ut, accumsan viverra odio. Integer
                        luctus rhoncus dictum.
                    </p>
                    <p>
                        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                        Vivamus ac nibh turpis. Integer non semper ipsum. Mauris vitae semper risus, et consequat mi.
                        Phasellus dictum ipsum ut felis fermentum tincidunt. Duis vehicula, arcu ac gravida lobortis,
                        velit sapien commodo massa, id faucibus mi ex quis eros. Vestibulum tempus, magna id dignissim
                        fringilla, mauris nisi auctor nulla, non placerat dolor lorem sed eros. Donec euismod neque
                        nisi, nec eleifend sem venenatis ut.
                    </p>
                    <p>
                        Proin eleifend egestas tempus. Fusce lorem massa, mattis vel tellus sed, placerat venenatis
                        velit. Praesent scelerisque, tellus nec vulputate tincidunt, mi elit vulputate odio, a
                        sollicitudin lectus nunc ac nunc. Nam sed laoreet ex. Quisque commodo eget sem ut fringilla. Ut
                        a tortor at augue maximus feugiat. Fusce varius maximus lorem eget gravida. Pellentesque
                        habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                    </p>
                    <p>
                        Maecenas vitae nulla gravida, varius justo vel, aliquet mauris. Aenean bibendum ex sed sem
                        rhoncus, at euismod diam egestas. Aliquam bibendum pulvinar nibh eget cursus. Quisque in massa
                        fringilla, ultricies magna a, dignissim ex. Maecenas purus nisl, consequat lobortis malesuada
                        at, mollis et augue. Vivamus feugiat tincidunt tincidunt. Vivamus et ex mauris. Donec sed mi
                        tortor. Aenean felis diam, ultricies sed congue ut, auctor id arcu.
                    </p>
                    <p>
                        Pellentesque vel lectus nec elit rutrum scelerisque a a risus. Integer commodo porttitor eros.
                        Cras et ipsum et ligula lacinia iaculis. In in nisi eu mauris aliquam pulvinar non nec neque.
                        Etiam et ante rutrum, faucibus neque nec, semper est. In vitae elit odio. Duis lacinia leo id
                        nisi venenatis lacinia.
                    </p>
                </template>
            </Card>
        </div>
    </NuxtLayout>
</template>

<script setup>
const home = useState('breadcrumHome', () => ({
    icon: 'pi pi-home',
    to: '/'
}));
const items = useState('breadCrumbItems', () => ([
    { label: 'Learn more' },
]));

const goTo = (identifier) => {
    const el = document.querySelector(identifier);
    console.log(identifier, el);
    window.scrollTo({ top: el.offsetTop, behavior: 'smooth' });
};

const toc = useState('toc', () => {
    return [
        { label: 'The story', url: '#story' },
        { label: 'Contribute in the project', url: '#contribute' },
        { label: 'Install your own systematic mapping study server', url: '#installation' }
    ]
})
</script>

<style lang="scss">
.learn-more-page {
    max-width: 1400px;
    margin: 0 auto;
}

.toc {
    width: 500px;
}
</style>