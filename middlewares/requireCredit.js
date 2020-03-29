module.exports = (req, res, next) => {
    if (req.user.credits < 5) {
        return res.status(201)
            .set("content-type", "application/json; charset=utf-8")
            .json({ error: 'Not enough credits!' });
    }
    next();
};