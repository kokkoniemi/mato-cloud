<script setup>
/**
 * This is a base layout for logged in users
 */

useHead({
    titleTemplate: 'Systematicmappingstudy.com - %s',
    viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
    charset: 'utf-8',
    meta: [
        { name: 'description', content: 'A home of systematic mapping studies' }
    ]
});

const menuItems = useState('menuBar', () => [
    {
        label: 'Projects',
        icon: 'pi pi-fw pi-briefcase',
        items: [
            {
                label: 'List projects',
                icon: 'pi pi-fw pi-external-link'
            },
            {
                label: 'Project settings',
                icon: 'pi pi-fw pi-trash'
            },
            {
                separator: true
            },
            {
                label: 'New project',
                icon: 'pi pi-fw pi-plus',
            },
        ],
    },
    {
        label: 'Selection',
        icon: 'pi pi-fw pi-inbox',
        disabled: true
    },
    {
        label: 'Keywording',
        icon: 'pi pi-fw pi-tags',
        disabled: true
    },
    {
        label: 'Peer-review',
        icon: 'pi pi-fw pi-users',
        disabled: true,
        items: [
            {
                label: 'Cohen\'s Kappa',
                icon: 'pi pi-fw pi-plus',
            },
            {
                label: 'List Peer-reviews',
                icon: 'pi pi-fw pi-trash'
            },
        ],
    },
    {
        label: 'Data',
        icon: 'pi pi-fw pi-database',
        disabled: true,
        items: [{
            label: 'New',
            icon: 'pi pi-fw pi-plus',
            items: [
                {
                    label: 'Bookmark',
                    icon: 'pi pi-fw pi-bookmark'
                },
                {
                    label: 'Video',
                    icon: 'pi pi-fw pi-video'
                },
            ]
        },
        {
            label: 'Delete',
            icon: 'pi pi-fw pi-trash'
        },
        {
            separator: true
        },
        {
            label: 'Export',
            icon: 'pi pi-fw pi-external-link'
        }],
    },
]);
</script>

<template>
    <div id="base-container" class="min-h-screen flex flex-column surface-ground">
        <div class="surface-overlay py-2 px-5 flex align-items-center justify-content-between relative lg:static">
            <Menubar :model="menuItems" class="bg-white border-none px-0" />

            <div class="ml-auto">
                <Button type="button" label="Profile" icon="pi pi-user"
                    class="p-button-primary p-button-outlined p-button-sm" />
            </div>
        </div>
        <ProjectsBreadcrumb />
        <div class="px-5 py-5 flex flex-column flex-auto">
            <div class="border-2 surface-border border-round surface-section flex-auto">
                <slot />
            </div>
        </div>
    </div>
</template>

<style lang="scss">
#base-container {
    margin: 0 auto;
}
</style>
