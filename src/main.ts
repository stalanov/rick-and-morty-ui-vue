import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { store } from './store';
import { key } from './store/types';
import 'vfonts/RobotoSlab.css';

createApp(App).use(store, key).use(router).mount('#app');
