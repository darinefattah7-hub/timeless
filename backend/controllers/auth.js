import { User } from "../models/user.js";

export const getLogin = (req, res,next) =>  {
   res.render("login", {
    pageTitle: "sign up page",
    errorMessage: null,
    isAuthenticated: req.session.isLoggedIn,
    role: req.session.role,
  });
};
export const getSignup = (req, res,next) =>   {
   res.render("signup", {
    pageTitle: "sign up page",
    errorMessage: null,
    isAuthenticated: req.session.isLoggedIn,
    role: req.session.role,
  });
};
export const postSignup = (req, res,next) =>  {
  console.log(req.body);
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;
 
User.findUser(email, password)
  .then((results) => {
      const user = results[0][0]; 
      if (user) {
        return res.status(409).render("signup", {
          pageTitle: "sign in page",
          errorMessage: "User already exists",
          isAuthenticated: req.session.isLoggedIn,
          role: req.session.role,
        });
      }else  {
        
    const newUser = new User(null,username, email, password);
    newUser
    .saveUser()
        .then(() => {
      res.redirect("/");
    })
    .catch(() => {
      res.status(500).render("signup", {
        pageTitle: "sign in page",
        errorMessage: "Something went wrong",
        isAuthenticated: req.session.isLoggedIn,
        role: req.session.role,
      });
    });
 } }).catch(() => {
      res.status(500).render("signup", {
        pageTitle: "sign in page",
        errorMessage: "Something went wrong",
        isAuthenticated: req.session.isLoggedIn,
        role: req.session.role,
      });
    });
};

export const postLogin = (req, res,next) =>  {
  console.log(req.body);
  const email = req.body.email;
  const password = req.body.password;
   if (!email || !password) {
    return res.status(400).render("login", {
      pageTitle: "sign in page",
      errorMessage: "Inputs are required",
      isAuthenticated: req.session.isLoggedIn,
      role: req.session.role,
      
    });
  } 
 
    User.findUser(email, password)
  .then((results) => {
      const user = results[0][0];

      if (user) {
        req.isLogged = true;
        req.session.isLoggedIn = true;
        req.session.currentUser = user.email;
        req.session.role = user.role;
        req.session.userId = user.ID;
        res.redirect("/");
      } else {
        res.status(401).render("login", {
          pageTitle: "sign in page",
          errorMessage: "Invalid credentials",
          isAuthenticated: req.session.isLoggedIn,
          role: req.session.role,
        });
      }
    })
    .catch(() => {
      res.status(500).render("login", {
        pageTitle: "sign in page",
        errorMessage: "Something went wrong",
        isAuthenticated: req.session.isLoggedIn,
        role: req.session.role,
      });
    });
};
export const postLogout = (req, res,next) =>  {
  req.session.destroy((err) => {
    console.log(err);
    res.redirect("/");
  });
};






