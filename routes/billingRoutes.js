var keys = require('../config/keys');
var stripe = require('stripe')(keys.stripeSecretKey);
var requireLogin = require('../middlewares/requireLogin');
module.exports = (app) => {
    app.post('/api/stripe', requireLogin,
        async (req, res) => {
            if (!req.user) {
                return res.status(401).send({ error: 'You must be log in' });
            }
            const charge = await stripe.charges.create({
                amount: "50000",
                currency: "INR",
                description: "Rs 500 for 5 email credits",
                source: req.body.id,
                shipping: {
                    name: 'Jenny Rosen',
                    address: {
                        line1: '510 Townsend St',
                        postal_code: '98140',
                        city: 'San Francisco',
                        state: 'CA',
                        country: 'US',
                    }
                }
            });
            req.user.credits += 5;
            const user = await req.user.save();
            res.send(user);
        }
    );
}