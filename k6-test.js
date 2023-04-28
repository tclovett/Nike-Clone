import http from 'k6/http';
import { check, sleep } from 'k6';

export default function smallTest() {
    http.get('https://test.k6.io');
    sleep(1);
}

// export const options = {
//     thresholds: {
//         // Assert 99% of requests finish within 3000ms
//         http_req_duration: ["p(99) < 3000"],
//     },
//     // Ramp number of virtual users up and down
//     stages: [
//         { duration: "30s", target: 15 },
//         { duration: "1m", target: 15 },
//         { duration: "20s", target: 0 },
//     ],
// };

// // Simulated user behavior, using 'userSim' to identify this function due to no anonymous restriction
// export default function userSim() {
//     let res = http.get("https://test-api.k6.io/public/crocodiles/1/");
//     // Validate response status
//     check(res, { "status was 200": (r) => r.status == 200 });
//     sleep(1);
// };