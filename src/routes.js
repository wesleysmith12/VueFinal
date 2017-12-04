import Home from './components/Home.vue';   //ToDo: Import Home Component
import Portfolio from './components/portfolio/portfolio.vue';   //ToDo: Import portfolio/Portfolio Component
import Stocks from './components/stocks/Stocks.vue'//ToDo: Import stocks/Stocks Component

export const routes = [
    { path: '/', component: Home},  //ToDo: Create Route for Home Component with root (/) path
    { path: '/portfolio', component: Portfolio},    //ToDo: Create Route for Portfolio Component
    { path: '/stocks', component: Stocks},//ToDo: Create Route for Stocks Component
];