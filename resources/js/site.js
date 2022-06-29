// Forms stuff
window.axios = require('axios');
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
import flatpickr from "flatpickr"

// Swiper
import Swiper, { Navigation } from 'swiper'
import 'swiper/css';
import 'swiper/css/navigation';
window.swiper = Swiper

// Alpine
import Alpine from 'alpinejs'
import mask from '@alpinejs/mask'
Alpine.plugin(mask)
window.Alpine = Alpine
Alpine.start()