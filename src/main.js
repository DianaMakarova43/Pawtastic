import './style.css';
import 'vuetify/styles'; // Подключаем стили Vuetify
import { createApp } from 'vue';
import App from './App.vue';
import { createVuetify } from 'vuetify';
import router from './router/router.js';
import 'prismjs'
import 'prismjs/themes/prism-twilight.css' // или другой стиль
import 'prismjs/components/prism-java'

import { VBtn, VCard, VCardText, VSpacer, VForm, VSelect, VFileInput, VCardActions, VTextarea, VSnackbar, VTextField, VSheet, VCheckbox, VApp, VContainer, VFooter, VDialog, VAppBar, VAppBarNavIcon, VAppBarTitle, VIcon, VMenu, VList, VListItem, VListItemTitle, VAvatar } from 'vuetify/components';

const vuetify = createVuetify({
    theme: {
        defaultTheme: 'dark',
    },
});

const app = createApp(App);

// Регистрируем компоненты Vuetify
app.component('v-btn', VBtn);
app.component('v-form', VForm);
app.component('v-card', VCard);
app.component('v-card-text', VCardText);
app.component('v-card-actions', VCardActions);
app.component('v-spacer', VSpacer);
app.component('v-text-field', VTextField);
app.component('v-sheet', VSheet);
app.component('v-checkbox', VCheckbox);
app.component('v-app', VApp);
app.component('v-container', VContainer);
app.component('v-footer', VFooter);
app.component('v-app-bar', VAppBar);
app.component('v-app-bar-nav-icon', VAppBarNavIcon);
app.component('v-app-bar-title', VAppBarTitle);
app.component('v-icon', VIcon);
app.component('v-menu', VMenu);
app.component('v-list', VList);
app.component('v-list-item', VListItem);
app.component('v-list-item-title', VListItemTitle);
app.component('v-avatar', VAvatar);
app.component('v-dialog', VDialog);
app.component('v-snackbar', VSnackbar);
app.component('v-textarea', VTextarea);
app.component('v-select', VSelect);
app.component('v-file-input', VFileInput);

app.use(vuetify);
app.use(router);
app.mount('#app');
