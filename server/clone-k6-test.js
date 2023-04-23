import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
    stages: [
        { duration: '5s', target: 1 },
        { duration: '10s', target: 3 },
        { duration: '5s', target: 1},
    ],
    thresholds: {
        http_req_duration: ['p(99) < 1000'],
    },
};

export default function cloneTest() {
    let homepage = http.get('127.26.86.50:300/api/shoes/1');

    check(homepage, {
        'status is 200': (r) => r.status === 200,
    });

    const homePageResponse = homepage.body;

    const linkPattern = /<a href="\/product\/(.+?)">/g;

    const matches = homePageResponse.matchAll(linkPattern);
    const matchesCount = (homePageResponse.match(linkPattern) || []).length;
    let allProducts = [];
    for (const match of matches) {
        console.log(match[1]);
        allProducts.push(match[1]);
    };
    console.log(allProducts[1]);
    const randomLink = Math.floor(Math.random() * matchesCount) + 1;
    console.log('Random number is: ' + randomLink);

    let productLinkCLick = http.get(productLink);

    console.log(productLinkCLick.url);

    check(productLinkCLick, {
        'status is 200': (r) => r.status === 200,
    });

    // Add to cart
    let cartLink = 'https://127.26.86.50:3000/api/shoes/cart'
}