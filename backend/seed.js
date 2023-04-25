//console.log("Made it inside seed.js");

const { Pool } = require('pg');
const dbConn = require('./dbConn');
const pool = dbConn.getPool();

function runSeeder(pool, callback) {
    pool.connect((err, client, done) => {
        if (err) {
            console.log("Failed to connect to the database");
            console.log(err);
            return done();
        }
                                                                                                                        // Done                                                                                                                 Not downloading                                                                                                                    Done          
        //Run SEED SQL:
        pool.query(`INSERT INTO shoes (name, shoeid, price, gender, image, image_array, description, color_description, style, size_array) VALUES 
            ('Air Jordan 1 Mid', 1, '$125', 'Men''s Shoes', 'static/images/shoe1/shoe1view1.webp', ARRAY ['https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/ea3a034a-351d-4d5e-9e39-6ebe24eebd23/air-jordan-1-mid-mens-shoes-b3js2D.png', 'static/images/shoe1/shoe1view2.webp', 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/d35fd628-8d5f-441c-9151-fb39b053b2ed/air-jordan-1-mid-mens-shoes-b3js2D.png', 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/f3c594b4-5e8a-4327-87c4-4d55aa3aa69e/air-jordan-1-mid-mens-shoes-b3js2D.png', 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/3587121c-5ff8-45b0-90b2-2cef3cb78b61/air-jordan-1-mid-mens-shoes-b3js2D.png', 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/c2bd1f9d-2bfb-4f4d-9f92-23bc7eadc95e/air-jordan-1-mid-mens-shoes-b3js2D.png', 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/376a8a9e-7bcf-496a-bb03-1f8ae6148036/air-jordan-1-mid-mens-shoes-b3js2D.png', 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/5bd93a59-5883-4ebe-94fa-38a541acb25c/air-jordan-1-mid-mens-shoes-b3js2D.png'], 'Inspired by the original AJ1, this mid-top edition maintains the iconic look you love while choice colors and crisp leather give it a distinct identity.', 'Shown: Lucky Green/White/Black', 'Style: DQ8426-301', ARRAY ['M 7 / W 8.5','M 7.5 / W 9','M 8 / W 9.5','M 8.5 / W 10','M 9 / W 10.5','M 9.5 / W 11','M 10 / W 11.5','M 10.5 / W 12','M 11 / W 12.5','M 11.5 / W 13','M 12 / W 13.5','M 12.5 / W 14','M 13 / W 14.5','M 14 / W 15.5','M 15 / W 16.5','M 16 / W 17.5','M 17 / W 18.5','M 18 / W 19.5']),
            ('Air Jordan 1 Mid', 1, '$125', 'Men''s Shoes', 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/2fb8a3f3-85d5-4be1-b869-93659d64df11/air-jordan-1-mid-mens-shoes-b3js2D.png', ARRAY ['https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/2fb8a3f3-85d5-4be1-b869-93659d64df11/air-jordan-1-mid-mens-shoes-b3js2D.png', 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/9ee89514-25c2-4671-a4b4-20be0e66e254/air-jordan-1-mid-mens-shoes-b3js2D.png', 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/31452549-a890-42a2-be28-0c2d9c4ea570/air-jordan-1-mid-mens-shoes-b3js2D.png', 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/169469a7-30eb-49f3-8d7b-ccd09e650c37/air-jordan-1-mid-mens-shoes-b3js2D.png', 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/57a172a7-2dab-4275-9870-9d0a3db6b462/air-jordan-1-mid-mens-shoes-b3js2D.png', 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/133c235c-19bd-422a-8793-7698266573bb/air-jordan-1-mid-mens-shoes-b3js2D.png', 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/268ce333-336a-4acc-b8d0-29716614728f/air-jordan-1-mid-mens-shoes-b3js2D.png', 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/25236a5e-a97f-460a-8673-2bc2f4e8b85f/air-jordan-1-mid-mens-shoes-b3js2D.png'], 'Inspired by the original AJ1, this mid-top edition maintains the iconic look you love while choice colors and crisp leather give it a distinct identity.', 'Shown: Palomino/Wild Berry/White','Style: DQ8426-215', ARRAY ['M 7 / W 8.5','M 7.5 / W 9','M 8 / W 9.5','M 8.5 / W 10','M 9 / W 10.5','M 9.5 / W 11','M 10 / W 11.5','M 10.5 / W 12','M 11 / W 12.5','M 11.5 / W 13','M 12 / W 13.5','M 12.5 / W 14','M 13 / W 14.5','M 14 / W 15.5','M 15 / W 16.5','M 16 / W 17.5','M 17 / W 18.5','M 18 / W 19.5']),
            ('Air Jordan 1 Mid', 1, '$125', 'Men''s Shoes', 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/8061baec-449e-433b-89b3-8234dde499bd/air-jordan-1-mid-mens-shoes-b3js2D.png', ARRAY ['https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/8061baec-449e-433b-89b3-8234dde499bd/air-jordan-1-mid-mens-shoes-b3js2D.png', 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/e658cd91-2af3-4cf9-bc97-6cdaf10aa9a7/air-jordan-1-mid-mens-shoes-b3js2D.png', 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/5fd0369e-33c0-4135-840c-3465007cebf6/air-jordan-1-mid-mens-shoes-b3js2D.png', 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/729afd42-8d2c-4ca5-8904-e37570e52f90/air-jordan-1-mid-mens-shoes-b3js2D.png', 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/43a9bc05-2ea3-4001-87bb-1c1da0492ed9/air-jordan-1-mid-mens-shoes-b3js2D.png', 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/eacfe3ef-e64e-4190-9727-b9dd4befef68/air-jordan-1-mid-mens-shoes-b3js2D.png', 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/ab3cb47c-159b-4678-8039-8b9d201ab9bd/air-jordan-1-mid-mens-shoes-b3js2D.png', 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/1b300bc7-588f-44b2-b598-1f70983443c0/air-jordan-1-mid-mens-shoes-b3js2D.png'], 'You ready for your moment in the sun? Every time the AJ1 gets a remake you get the classic sneaker in new colors and textures for a fresh look with a familiar feel. Premium materials and accents give modern expression to an all-time favorite. Get out there and shine.', 'Shown: Game Royal/Phantom/White/Rush Orange', 'Style: FD1029-400', ARRAY ['M 3.5 / W 5','M 4 / W 5.5','M 4.5 / W 6','M 5 / W 6.5','M 5.5 / W 7','M 6 / W 7.5','M 6.5 / W 8','M 7 / W 8.5','M 7.5 / W 9','M 8 / W 9.5','M 8.5 / W 10','M 9 / W 10.5','M 9.5 / W 11','M 10 / W 11.5','M 10.5 / W 12','M 11 / W 12.5','M 11.5 / W 13','M 12 / W 13.5','M 12.5 / W 14','M 13 / W 14.5','M 14 / W 15.5','M 15 / W 16.5','M 16 / W 17.5','M 17 / W 18.5']),
            ('Air Jordan 1 Mid', 1, '$125', 'Men''s Shoes', 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/cf2e9611-78c8-47e8-b109-7cf5f66087f1/air-jordan-1-mid-mens-shoes-b3js2D.png', ARRAY ['https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/cf2e9611-78c8-47e8-b109-7cf5f66087f1/air-jordan-1-mid-mens-shoes-b3js2D.png', 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/eb3015d3-796a-4c49-9ca2-345142f2491a/air-jordan-1-mid-mens-shoes-b3js2D.png', 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/78562e04-2446-4f74-9dda-d7c95fe3d0fa/air-jordan-1-mid-mens-shoes-b3js2D.png', 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/8c5097ef-e92b-4038-baa6-bb20615b951c/air-jordan-1-mid-mens-shoes-b3js2D.png', 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/9f5a0bc1-29a5-446a-bb91-9c36b2845400/air-jordan-1-mid-mens-shoes-b3js2D.png', 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/27a019d6-2346-4740-ae92-76d86f6474fb/air-jordan-1-mid-mens-shoes-b3js2D.png', 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/f86191b0-ecc5-4737-8a87-7e404ae08a3d/air-jordan-1-mid-mens-shoes-b3js2D.png', 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/fb58383f-41d5-495c-b555-4a27b89dfcf0/air-jordan-1-mid-mens-shoes-b3js2D.png'], 'Inspired by the original AJ1, this mid-top edition maintains the iconic look you love while choice colors and crisp leather give it a distinct identity.', 'Shown: Cement Grey/True Blue/White', 'Style: DQ8426-014', ARRAY ['M 7 / W 8.5','M 7.5 / W 9','M 8 / W 9.5','M 8.5 / W 10','M 9 / W 10.5','M 9.5 / W 11','M 10 / W 11.5','M 10.5 / W 12','M 11 / W 12.5','M 11.5 / W 13','M 12 / W 13.5','M 12.5 / W 14','M 13 / W 14.5','M 14 / W 15.5','M 15 / W 16.5','M 16 / W 17.5','M 17 / W 18.5','M 18 / W 19.5']),
            ('Air Jordan 1 Mid', 1, '$125', 'Men''s Shoes', 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/4b5264a2-7885-44b6-8e5d-7074e28289bf/air-jordan-1-mid-mens-shoes-b3js2D.png', ARRAY ['https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/4b5264a2-7885-44b6-8e5d-7074e28289bf/air-jordan-1-mid-mens-shoes-b3js2D.png', 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/91bde9a2-7f5d-4cff-bf16-92976f399468/air-jordan-1-mid-mens-shoes-b3js2D.png', 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/0f338732-bdbf-4148-8bd5-38a41728b1ec/air-jordan-1-mid-mens-shoes-b3js2D.png', 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/3f8f21d7-dc26-4f5e-bde1-f0553c778c21/air-jordan-1-mid-mens-shoes-b3js2D.png', 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/dbf1ebfd-36fd-477c-b20b-6f5f34dead78/air-jordan-1-mid-mens-shoes-b3js2D.png', 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/8bcf1e55-39e4-4056-aba1-27e2ea07701b/air-jordan-1-mid-mens-shoes-b3js2D.png', 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/1d116154-9362-4904-9c40-925292f45ba4/air-jordan-1-mid-mens-shoes-b3js2D.png', 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/bd07b615-5ba2-4564-8a3f-ce627acda0af/air-jordan-1-mid-mens-shoes-b3js2D.png'], 'Inspired by the original AJ1, this mid-top edition maintains the iconic look you love while choice colors and crisp leather give it a distinct identity.', 'Shown: Black/White/Fire Red', 'Style: DQ8426-060', ARRAY ['M 7 / W 8.5','M 7.5 / W 9','M 8 / W 9.5','M 8.5 / W 10','M 9 / W 10.5','M 9.5 / W 11','M 10 / W 11.5','M 10.5 / W 12','M 11 / W 12.5','M 11.5 / W 13','M 12 / W 13.5','M 12.5 / W 14','M 13 / W 14.5','M 14 / W 15.5','M 15 / W 16.5','M 16 / W 17.5','M 17 / W 18.5','M 18 / W 19.5']),
            ('Air Jordan 1 Mid', 1, '$93.97 24% off', 'Men''s Shoes', 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/5f90d20d-93a5-48a8-bb26-750139d0e3f0/air-jordan-1-mid-mens-shoes-b3js2D.png', ARRAY ['https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/5f90d20d-93a5-48a8-bb26-750139d0e3f0/air-jordan-1-mid-mens-shoes-b3js2D.png', 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/3defd4b7-70b8-40b5-adbc-12f55f341506/air-jordan-1-mid-mens-shoes-b3js2D.png', 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/4e194e68-ee53-49d7-a748-3633c6866188/air-jordan-1-mid-mens-shoes-b3js2D.png', 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/db427a1c-7289-40ff-a097-1b8b08f087f8/air-jordan-1-mid-mens-shoes-b3js2D.png', 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/65a70df6-8f1e-44ed-8657-1b7149058c4d/air-jordan-1-mid-mens-shoes-b3js2D.png', 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/e1bd1594-74a7-40f9-95dc-b4d374bcad34/air-jordan-1-mid-mens-shoes-b3js2D.png', 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/336d2e90-de79-44d1-ac0c-f4333689d78d/air-jordan-1-mid-mens-shoes-b3js2D.png', 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/7564bd82-4482-4476-8650-803785a53ab8/air-jordan-1-mid-mens-shoes-b3js2D.png'], 'Inspired by the original AJ1, this mid-top edition maintains the iconic look you love while choice colors and crisp leather give it a distinct identity.', 'Shown: Dark Concord/White/Black/Taxi', 'Style: DQ8426-517', ARRAY ['M 7 / W 8.5','M 7.5 / W 9','M 8 / W 9.5','M 8.5 / W 10','M 9 / W 10.5','M 9.5 / W 11','M 10 / W 11.5','M 10.5 / W 12','M 11 / W 12.5','M 11.5 / W 13','M 12 / W 13.5','M 12.5 / W 14','M 13 / W 14.5','M 14 / W 15.5','M 15 / W 16.5','M 16 / W 17.5','M 17 / W 18.5','M 18 / W 19.5']),
            ('Air Jordan 1 Mid', 1, '$106.97 14% off','Men''s Shoes', 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/3b14fa48-f61f-4c57-a875-e14d6aa51a54/air-jordan-1-mid-mens-shoes-b3js2D.png', ARRAY ['https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/3b14fa48-f61f-4c57-a875-e14d6aa51a54/air-jordan-1-mid-mens-shoes-b3js2D.png', 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/dbbafad6-a597-4aad-a24c-a23c6f1f5f84/air-jordan-1-mid-mens-shoes-b3js2D.png', 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/bb9f4399-2667-4cf3-8d57-13964a47c6b6/air-jordan-1-mid-mens-shoes-b3js2D.png', 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/a04f53db-4f9f-4ac7-9403-8ad1c1c5cd88/air-jordan-1-mid-mens-shoes-b3js2D.png', 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/9949ac36-098a-4d66-bd37-8b6f5c146ea9/air-jordan-1-mid-mens-shoes-b3js2D.png', 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/19ab5d04-6414-4f49-a2f1-94b88c06f463/air-jordan-1-mid-mens-shoes-b3js2D.png', 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/62df5fdc-bcbc-4db4-874f-28b34bc2a1ab/air-jordan-1-mid-mens-shoes-b3js2D.png', 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/61ddf535-b9bd-4842-9942-72102a01e4df/air-jordan-1-mid-mens-shoes-b3js2D.png'], 'Inspired by the original AJ1, this mid-top edition maintains the iconic look you love while choice colors and crisp leather give it a distinct identity.', 'Shown: Cherrywood Red/Cement Grey/White', 'Style: DQ8426-615', ARRAY ['M 7 / W 8.5','M 7.5 / W 9','M 8 / W 9.5','M 8.5 / W 10','M 9 / W 10.5','M 9.5 / W 11','M 10 / W 11.5','M 10.5 / W 12','M 11 / W 12.5','M 11.5 / W 13','M 12 / W 13.5','M 12.5 / W 14','M 13 / W 14.5','M 14 / W 15.5','M 15 / W 16.5','M 16 / W 17.5','M 17 / W 18.5','M 18 / W 19.5']),
            ('Air Jordan 1 Mid SE', 2, '$135.00', 'Men''s Shoes', 'https://static.nike.com/a/images/t_PDP_864_v1,f_auto,q_auto:eco/3b8a8a4b-7dcb-4495-a3aa-83386f143cc8/air-jordan-1-mid-se-mens-shoes-Zn07hL.png', NULL, NULL, NULL, NULL, NULL),
            ('Air Jordan 1 Mid', 3, '$125.00', 'Women''s Shoes', 'https://static.nike.com/a/images/t_PDP_864_v1,f_auto,q_auto:eco/bf84668b-b390-43d7-9ca0-0366d055cb8a/air-jordan-1-mid-womens-shoes-Kg3nnj.png', NULL, NULL, NULL, NULL, NULL),
            ('Air Jordan 1 Low', 4, '$110.00', 'Men''s Shoes', 'https://static.nike.com/a/images/t_PDP_864_v1,f_auto,q_auto:eco/6930e1f6-b92e-4964-a139-20d430964ab3/air-jordan-1-low-mens-shoes-0LXhbn.png', NULL, NULL, NULL, NULL, NULL),
            ('Air Jordan 1 Zoom CMFT 2', 5, '$150.00', 'Men''s Shoes', 'https://static.nike.com/a/images/t_PDP_864_v1,f_auto,q_auto:eco/97029bbe-ccc1-4ad0-b51e-eff86332418d/air-jordan-1-zoom-cmft-2-mens-shoes-Tw02qw.png', NULL, NULL, NULL, NULL, NULL),
            ('Air Jordan 1 Retro High OG', 6, '$180.00', 'Men''s Shoes', 'https://static.nike.com/a/images/t_PDP_864_v1,f_auto,q_auto:eco/b1d3cf2e-0dca-4f6d-97ff-21006c346e8e/air-jordan-1-retro-high-og-mens-shoes-VdpsB7.png', NULL, NULL, NULL, NULL, NULL),
            ('Air Jordan 1 Retro High OG', 7, '$180.00', 'Women''s Shoes', 'https://static.nike.com/a/images/t_PDP_864_v1,f_auto,q_auto:eco/dce802d5-316c-4188-ac85-27407a749f09/air-jordan-1-retro-high-og-womens-shoes-LcJVSj.png', NULL, NULL, NULL, NULL, NULL),
            ('Air Jordan 1 Hi FlyEase', 8, '$150.00', 'Men''s Shoes', 'https://static.nike.com/a/images/t_PDP_864_v1,f_auto,q_auto:eco/43236b1a-5f64-49cf-85a0-962d58f6b353/air-jordan-1-hi-flyease-mens-shoes-VjGcGX.png', NULL, NULL, NULL, NULL, NULL),
            ('Air Jordan 13 Retro', 9, '$210.00', 'Shoe', 'https://static.nike.com/a/images/t_PDP_864_v1,f_auto,q_auto:eco/fadf1b0c-c687-4e3d-8f4e-6d089d115a0c/air-jordan-13-retro-shoe-08RC9v.png', NULL, NULL, NULL, NULL, NULL),
            ('Jordan 6 Rings', 10, '$144.97', 'Men''s Shoes', 'https://static.nike.com/a/images/t_PDP_864_v1,f_auto,q_auto:eco/719321f3-9576-4e9e-a773-3e7e490c0bce/jordan-6-rings-mens-shoes-2VAD3Y.png', NULL, NULL, NULL, NULL, NULL),
            ('Jordan Access',11,'$110.00','Men''s Shoe','https://static.nike.com/a/images/t_PDP_864_v1,f_auto,q_auto:eco/1da9a11f-cc52-4b7a-ae05-29bb2a11318d/jordan-access-mens-shoe-5Jm9bC.png', NULL, NULL, NULL, NULL, NULL),
            ('Nike Air Force 1 ''07',12,'$110.00','Men''s Shoe','https://static.nike.com/a/images/t_PDP_864_v1,f_auto,q_auto:eco/4f37fca8-6bce-43e7-ad07-f57ae3c13142/air-force-1-07-mens-shoes-5QFp5Z.png', NULL, NULL, NULL, NULL, NULL),
            ('Air Jordan 1 Low G',13,'$140.00','Golf Shoes','https://static.nike.com/a/images/t_PDP_864_v1,f_auto,q_auto:eco/4203faa2-8da6-4416-a479-89d2c1f259f6/air-jordan-1-low-g-golf-shoes-jChrQ3.png', NULL, NULL, NULL, NULL, NULL)`,
            (err) => {
                if (err) {
                    console.log("INSERT DATA FAILED ON shoes TABLE", err)
                } else {
                    console.log("INSERT DATA INTO shoes SUCCESSFUL")
                    pool.query(`INSERT INTO review (review_id, title, stars, user_name, date_created, summary) VALUES
                    (1, '' ,5, 'Palash544714572', 'Apr 04, 2023', 'I just got my pair 30 minutes ago. They feel great and comfortable. The colorway goes really great with grey hoodies and jeans. In my opinion, this is a fire pair that should be a cop. Plus I have no idea why this is not sold out.'),
                    (1, 'They are dope' ,4, 'Layla322586335', 'Mar 28, 2023', 'I really like these shoes! But they are super narrow. Sometimes they can get uncomfortable but it doesn''t really bother me. They are also pretty durable, but they do crease very easily! Overall the shoes are very nice!'),
                    (1, 'Great shoe' ,5,'Dalove180', 'Mar 20, 2023', '[This review was collected as part of a promotion.] Brought this for my child birthday and she loves it. Product received for free, or reviewed as part of a sweepstakes giveaway. #teamnike'),
                    (2, '' ,5, 'Palash544714572', 'Apr 04, 2023', 'I just got my pair 30 minutes ago. They feel great and comfortable. The colorway goes really great with grey hoodies and jeans. In my opinion, this is a fire pair that should be a cop. Plus I have no idea why this is not sold out.'),
                    (2, 'They are dope' ,4, 'Layla322586335', 'Mar 28, 2023', 'I really like these shoes! But they are super narrow. Sometimes they can get uncomfortable but it doesn''t really bother me. They are also pretty durable, but they do crease very easily! Overall the shoes are very nice!'),
                    (2, 'Great shoe' ,5,'Dalove180', 'Mar 20, 2023', '[This review was collected as part of a promotion.] Brought this for my child birthday and she loves it. Product received for free, or reviewed as part of a sweepstakes giveaway. #teamnike'),
                    (3, 'Dope sneaker' ,5,'Tiri', 'Mar 20, 2023', '[This review was collected as part of a promotion.] I love the colors and it''s so comfortable. True to size Product received for free, or reviewed as part of a sweepstakes giveaway. #teamnike'),
                    (3, 'Great comfort' ,5,'Funki83', 'Mar 17, 2023', 'sehr einfache abwicklung und schnelle lieferung top Great design and love the colors'),
                    (3, 'Great design and love the colors' ,5, 'Banks329', 'Mar 14, 2023', '[This review was collected as part of a promotion.] Bought them for my daughter a month ago and she loves them and the style Product received for free, or reviewed as part of a sweepstakes giveaway. #teamnike'),
                    (4, '' ,5, 'Palash544714572', 'Apr 04, 2023', 'I just got my pair 30 minutes ago. They feel great and comfortable. The colorway goes really great with grey hoodies and jeans. In my opinion, this is a fire pair that should be a cop. Plus I have no idea why this is not sold out.'),
                    (4, 'They are dope' ,4, 'Layla322586335', 'Mar 28, 2023', 'I really like these shoes! But they are super narrow. Sometimes they can get uncomfortable but it doesn''t really bother me. They are also pretty durable, but they do crease very easily! Overall the shoes are very nice!'),
                    (4, 'Great shoe' ,5,'Dalove180', 'Mar 20, 2023', '[This review was collected as part of a promotion.] Brought this for my child birthday and she loves it. Product received for free, or reviewed as part of a sweepstakes giveaway. #teamnike'),
                    (5, '' ,5, 'Palash544714572', 'Apr 04, 2023', 'I just got my pair 30 minutes ago. They feel great and comfortable. The colorway goes really great with grey hoodies and jeans. In my opinion, this is a fire pair that should be a cop. Plus I have no idea why this is not sold out.'),
                    (5, 'They are dope' ,4, 'Layla322586335', 'Mar 28, 2023', 'I really like these shoes! But they are super narrow. Sometimes they can get uncomfortable but it doesn''t really bother me. They are also pretty durable, but they do crease very easily! Overall the shoes are very nice!'),
                    (5, 'Great shoe' ,5,'Dalove180', 'Mar 20, 2023', '[This review was collected as part of a promotion.] Brought this for my child birthday and she loves it. Product received for free, or reviewed as part of a sweepstakes giveaway. #teamnike'),
                    (6, '' ,5, 'MoeM225695270', 'Apr 11, 2023', 'My size is always run out and I really want it'),
                    (6, 'They are dope' ,5, 'Victory932031443', 'Apr 11, 2023', 'They are classy and comfortable to wear.Its able to match with different wear you have .I promise you will not undergo any losses of you buy it'),
                    (6, 'Great shoe' ,4,'reed25011835', 'Apr 07, 2023', 'They are comfortable. I got some good comments on them👍🏻'),
                    (7, '' ,5, 'Palash544714572', 'Apr 04, 2023', 'I just got my pair 30 minutes ago. They feel great and comfortable. The colorway goes really great with grey hoodies and jeans. In my opinion, this is a fire pair that should be a cop. Plus I have no idea why this is not sold out.'),
                    (7, 'They are dope' ,4, 'Layla322586335', 'Mar 28, 2023', 'I really like these shoes! But they are super narrow. Sometimes they can get uncomfortable but it doesn''t really bother me. They are also pretty durable, but they do crease very easily! Overall the shoes are very nice!'),
                    (7, 'Great shoe' ,5,'Dalove180', 'Mar 20, 2023', '[This review was collected as part of a promotion.] Brought this for my child birthday and she loves it. Product received for free, or reviewed as part of a sweepstakes giveaway. #teamnike')`,
                    (err) => {
                        if (err) {
                            console.log("INSERT DATA FAILED ON review", err)
                        } else {
                            console.log("INSERT review DATA SUCCESSFUL")
                            done();
                            callback();
                        }
                    })
                }
            }
        )
    })
}

runSeeder(pool, () => {
    //close connection:
    pool.end();
});

