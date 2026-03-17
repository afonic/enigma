// Forms stuff
import axios from 'axios';
window.axios = axios;
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
import flatpickr from "flatpickr"

// Swiper
import Splide from '@splidejs/splide';
import '@splidejs/splide/css/core';
window.Splide = Splide

// Alpine
import Alpine from 'alpinejs'
import mask from '@alpinejs/mask'
Alpine.plugin(mask)
window.Alpine = Alpine
Alpine.start()