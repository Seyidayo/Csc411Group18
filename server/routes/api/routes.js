var Model = require('../../models')

module.exports = (app) => {

  app.get('/api/account/allusers', (req, res, next) => {
    var userModel = {
      user: []
    }

    Model.User.find({
      status: "patient"
    }, {}, {
      sort: {
        firstName: 1
      }
    }, function (err, users) {
      if (err) {
        return res.send({
          success: false,
          message: "Error: Invalid"
        })
      }

      return res.send({
        success: true,
        message: "Contacts Loaded",
        model: users
      })
    })
  });

  app.post('/api/account/cartpay', (req, res, next) => {
      Model.Cart.find({}, function(err, Current){
        if(err) { throw err }
        
        for(var i = 0; i < Current.length; i++){
            console.log(i+" "+Current)
        }
      })
  })

  app.post('/api/account/cartpush', (req, res, next) => {
    var email = req.body.email,
      problem = req.body.problem,
      name = req.body.name,
      price = 0;

    if (problem === "Charging-port") {
      price = 10000;
    } else if (problem === "RAM") {
      price = 20000;
    } else if (problem === "Hard-drive") {
      price = 17000;
    } else if (problem === "Screen") {
      price = 15000;
    } else if (problem === "Keyboard") {
      price = 5000;
    } else if (problem === "Camera") {
      price = 5000;
    } else if (problem === "Earphone-Jack") {
      price = 7000;
    } else if (problem === "Speakers") {
      price = 5000;
    }

    // console.log(problem + " " + price + " " + name + " " + email)
    const Request = new Model.Cart();
    Request.username = email;
    Request.device = name;
    Request.problem = problem;
    Request.price = price;

    Request.save((err, yep) => {
      if (err) {
        throw err
      }
      return res.send({
        success: true,
        message: "Successful"
      })
    })
  });

  app.get('/api/account/cartpull', (req, res, next) => {
    Model.Cart.find({}, function (err, cart) {
      if (err) {
        throw err
      }

      return res.send({
        success: true,
        message: 'Cart Loaded Successfully',
        cartModel: cart,
      })
    })
  })

  app.get('/api/account/cartdelete', (req, res, next) => {
    Model.Cart.remove(function (err, delOk) {
      if (err) {
        throw err
      } else {
        res.send({
          success: true,
          message: "Cart Deleted"
        })
      }
    })
  })

  app.post('/api/account/details', (req, res, next) => {
    var id = req.body.token;

    Model.UserSession.find({
      _id: id
    }, function (err, users) {
      if (err) return res.send({
        success: false,
        message: 'Error: invalid'
      });

      const user = users[0]

      Model.User.find({
        _id: user.userId
      }, function (err, user) {
        if (err) return res.send({
          success: false,
          message: 'Error: invalid'
        });

        const currentUser = user[0];

        return res.send({
          success: true,
          message: 'Found the user',
          email: currentUser.email,
        })
      })
    })
  })

  app.post('/api/account/signin', (req, res, next) => {
    var email = req.body.email,
      password = req.body.password;

    Model.User.find({
      email: email,
      password: password
    }, (err, users) => {
      if (err) {
        return res.send({
          success: false,
          message: 'Error: Server Error'
        });
      }

      if (users.length != 1) {
        return res.send({
          success: false,
          message: 'Username or Password is not correct'
        });
      }

      const user = users[0];

      const userSession = new Model.UserSession();
      userSession.userId = user._id;
      userSession.status = user.status;
      userSession.save((err, doc) => {
        if (err) {
          throw err;
          return res.send({
            success: false,
            message: 'Error: Server Error'
          });
        }

        return res.send({
          success: true,
          message: 'Successfully Logged In',
          token: doc._id,
          status: doc.status
        });
      });
    })
  });

  app.post('/api/account/signout', (req, res, next) => {
    //Get the Id
    var id = req.body.id

    Model.UserSession.findByIdAndRemove({
      _id: id,
      isDeleted: false
    }, (err, sessions) => {
      if (err) {
        return res.send({
          success: false,
          message: 'Error: Server Error'
        });
      } else {
        return res.send({
          success: true,
          message: 'Good'
        });
      }
    })
  });

  app.post('/api/account/signup', (req, res, next) => {

    var email = req.body.email,
      password = req.body.password,
      address = req.body.address;

    // console.log(email+ " " + password + " " + address )
    Model.User.find({
      email: email
    }, function (err, previousUser) {
      if (err) throw err;

      if (previousUser.length > 0) {
        return res.send({
          success: false,
          message: "Account exists"
        })
      } else {
        var newUser = new Model.User({
          email: email,
          password: password,
          address: address,
        })

        newUser.save(function (err, user) {
          if (err) {
            throw err
          };

          return res.send({
            success: true,
            message: 'User Created'
          })

        })
      }
    })
  });

  app.post('/api/account/verify', (req, res, next) => {

    var token = req.body.token
    Model.UserSession.find({
      _id: token
    }, (err, sessions) => {
      if (err) {
        return res.send({
          success: false,
          message: 'Error: Server Error'
        });
      }

      if (sessions === null) {
        return res.send({
          success: false,
          message: 'Never have i ever'
        })
      }

      const session = sessions[0]
      return res.send({
        success: true,
        message: 'Good',
        _id: session._id
      });
    })
  });
}
