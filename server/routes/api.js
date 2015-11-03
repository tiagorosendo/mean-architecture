var Customer = require('../models/customer');

module.exports = function (router) {

    router.get('/customers', function (req, res) {
        Customer.find({}, function (err, data) {
            if (err)
                throw err;
            res.json(data)
        })
    });

    router.post('/customers', function (req, res) {
        var customer = new Customer();
        customer.firstname = req.body.firstname;
        customer.lastname = req.body.lastname;
        customer.phone = req.body.phone;
        customer.address.street = req.body.address.street;
        customer.address.city = req.body.address.city;
        customer.address.state = req.body.address.state;
        customer.address.zip = req.body.address.zip;

        customer.save(function (err, data) {
            if (err) {
                throw err;
            }
            res.json(data);
        })
    });

    router.delete('/customers', function (req, res) {
        Customer.remove({}, function (err) {
            if (err)
                throw err;
            res.sendStatus(200);
        })
    });

    router.get('/customers/:id', function (req, res) {
        Customer.findOne({ _id: req.params.id }, function (err, data) {
            if (err)
                throw err;
            res.json(data);
        })
    });

    router.delete('/customers/:id', function (req, res) {
        Customer.remove({ _id: req.params.id }, function (err, data) {
            if (err)
                throw err;
            res.sendStatus(200);
        })
    });

    router.post('/customers/:id', function (req, res) {
        Customer.findOne({ _id: req.params.id }, function (err, data) {
            if (err)
                throw err;
            var customer = data;
            customer.firstname = req.body.firstname;
            customer.lastname = req.body.lastname;
            customer.phone = req.body.phone;
            if (customer.address) {
                customer.address.street = req.body.address.street;
                customer.address.city = req.body.address.city;
                customer.address.state = req.body.address.state;
                customer.address.zip = req.body.address.zip;
            }

            customer.save(function (err, data) {
                if (err)
                    throw err;
                res.json(data);
            });
        })
    });
};