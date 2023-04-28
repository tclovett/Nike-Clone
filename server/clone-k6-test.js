import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
    duration: '1m',
    vus: 50,
};

function apiEndpoint1() {
    let response = http.get('http://localhost:8000/photos');
    // console.log(`Endpoint 1 status: ${response.status}`);
};

function apiEndpoint2() {
    let response = http.get('http://localhost:8000/api/shoes');
    // console.log(`Endpoint 2 status: ${response.status}`);
};

export default function firstTest() {
    if (__VU % 2 === 0) {
        apiEndpoint1();
    } else {
        apiEndpoint2();
    }
    sleep(1)
};

