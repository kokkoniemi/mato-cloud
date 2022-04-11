import { defineNuxtPlugin } from '#app';
import PrimeVue from 'primevue/config';
import Button from 'primevue/button';
import Card from 'primevue/card';
import Panel from 'primevue/panel';
import InputSwitch from 'primevue/inputswitch';
import InputText from 'primevue/inputtext';
import InlineMessage from 'primevue/inlinemessage';
import Message from 'primevue/message';
import Divider from 'primevue/divider';
import Breadcrumb from 'primevue/breadcrumb';
import Menu from 'primevue/menu';
import Listbox from 'primevue/listbox';

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(PrimeVue, { ripple: true });
    nuxtApp.vueApp.component('Button', Button);
    nuxtApp.vueApp.component('Breadcrumb', Breadcrumb);
    nuxtApp.vueApp.component('Card', Card);
    nuxtApp.vueApp.component('Divider', Divider);
    nuxtApp.vueApp.component('Panel', Panel);
    nuxtApp.vueApp.component('InputSwitch', InputSwitch);
    nuxtApp.vueApp.component('InputText', InputText);
    nuxtApp.vueApp.component('InlineMessage', InlineMessage);
    nuxtApp.vueApp.component('Message', Message);
    nuxtApp.vueApp.component('Listbox', Listbox);
    nuxtApp.vueApp.component('Menu', Menu);
});
