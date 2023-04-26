import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
    duration: '30s',
    vus: 10,
};

export default function firstTest() {
    const url = 'http://localhost:8000/api/shoes';

    http.get(url);
    sleep(1)
};

