import { Product } from "../models/product.js";
import { deleteFile } from "../utils/file.js";
import { User } from "../models/user.js";

export const getAddProduct = (req, res, next) => {
  if (req.session.isLoggedIn && req.session.role === "admin") {
    return res.render("addProduct", {
      pageTitle: "Add Product",
      category: null,
      collection: null,
      errorMessage: null,
      isAuthenticated: req.session.isLoggedIn,
      role: req.session.role,
    });
  }
  res.status(403).send("Access denied: Admins only.");
};

export const postSelectCategory = (req, res, next) => {
  const category = req.body.category || null;
  const collection = req.body.collection || null;
if ((category && collection) || (!category && !collection)) {
    return res.render("addProduct", {
      pageTitle: "Add Product",
      category: null,
      collection: null,
      errorMessage: "Please select ONLY one: Category OR Collection",
      isAuthenticated: req.session.isLoggedIn,
      role: req.session.role
    });
  }
  if (category) {
    return res.render("addProduct", {
      pageTitle: `Add ${category}`,
      category: category,
      collection: null,
      errorMessage: null,
      isAuthenticated: req.session.isLoggedIn,
      role: req.session.role,
    });
  }

  if (collection) {
    return res.render("addProduct", {
      pageTitle: `Add to ${collection}`,
      category: null,
      collection: collection,
      errorMessage: null,
      isAuthenticated: req.session.isLoggedIn,
      role: req.session.role,
    });
  }
};
export const postAddProduct = (req, res, next) => {
  const imageGold = req.files.imageGold ? req.files.imageGold[0].filename : null;
  const imageSilver = req.files.imageSilver ? req.files.imageSilver[0].filename : null;
  const imageRoseGold = req.files.imageRoseGold ? req.files.imageRoseGold[0].filename : null;

  const category = req.body.category || null;
  const collection = req.body.collection || null;

  const name = req.body.name;
  const description = req.body.description;
  const price = req.body.price;
  const material = req.body.material;
  const quantity = req.body.quantity;
  const sizeRange = req.body.sizeRange || null;

  if ((category && collection) || (!category && !collection)) {
    return res.render("addProduct", {
      pageTitle: "Add Product",
      category: null,
      collection: null,
      errorMessage: "Select ONLY one: Category OR Collection",
      isAuthenticated: req.session.isLoggedIn,
      role: req.session.role
    });
  }
  if (!name || !description || !price || !material || !quantity) {
    return res.status(400).render("addProduct", {
      pageTitle: "Add Product",
      category,
      collection,
      errorMessage: "All inputs are required",
      isAuthenticated: req.session.isLoggedIn,
      role: req.session.role
    });
  }
  const finalCategory = category ? category : null;
  const finalCollection = collection ? collection : null;

  const product = new Product(
    null,
    finalCategory,
    name,
    description,
    price,
    material,
    quantity,
    imageGold,
    imageSilver,
    imageRoseGold,
    sizeRange,
    finalCollection
  );

  product
    .save()
    .then(() => res.redirect("/"))
    .catch((err) => {
      console.error(err);
      res.render("addProduct", {
        pageTitle: "Add Product",
        category,
        collection,
        errorMessage: "Something went wrong",
        isAuthenticated: req.session.isLoggedIn,
        role: req.session.role
      });
    });
};




export const getAddByCategory = (req, res) => {
  if (!(req.session.isLoggedIn && req.session.role === "admin")) {
    return res.status(403).send("Admins only");
  }

  const category = req.params.category;

  res.render("addProduct", {
    pageTitle: `Add ${category}`,
    category,
     collection: null,
    errorMessage: null,
    isAuthenticated: req.session.isLoggedIn,
    role: req.session.role,
  });
};

export const postAddByCategory = (req, res) => {
  if (!(req.session.isLoggedIn && req.session.role === "admin")) {
    return res.status(403).send("Admins only");
  }

  const category = req.params.category;

  // Uploaded images
  const imageGold = req.files.imageGold ? req.files.imageGold[0].filename : null;
  const imageSilver = req.files.imageSilver ? req.files.imageSilver[0].filename : null;
  const imageRoseGold = req.files.imageRoseGold ? req.files.imageRoseGold[0].filename : null;

  // Body fields
  const { name, description, price, material, quantity, sizeRange } = req.body;

  if (!name || !description || !price || !material || !quantity) {
    return res.render("addProduct", {
      pageTitle: `Add ${category}`,
      category,
       collection: null,
      errorMessage: "All fields are required",
      isAuthenticated: req.session.isLoggedIn,
      role: req.session.role
    });
  }

  const product = new Product(
    null,
    category,
    name,
    description,
    price,
    material,
    quantity,
    imageGold,
    imageSilver,
    imageRoseGold,
    sizeRange || null
  );

  product.save()
    .then(() => res.redirect("/" + category))
    .catch(err => {
      console.error(err);
      res.render("addProduct", {
        pageTitle: `Add ${category}`,
        category,
         collection: null,
        errorMessage: "Something went wrong",
        isAuthenticated: req.session.isLoggedIn,
        role: req.session.role
      });
    });
};

export const getAddByCollection = (req, res) => {
  if (!(req.session.isLoggedIn && req.session.role === "admin")) {
    return res.status(403).send("Admins only");
  }

  const collection = req.params.collection;

  res.render("addProduct", {
    pageTitle: `Add to ${collection}`,
    category: null,            
    collection: collection,    
    errorMessage: null,
    isAuthenticated: req.session.isLoggedIn,
    role: req.session.role,
  });
};

export const postAddByCollection = (req, res) => {
  if (!(req.session.isLoggedIn && req.session.role === "admin")) {
    return res.status(403).send("Admins only");
  }

  const collection = req.params.collection;


  const imageGold = req.files.imageGold ? req.files.imageGold[0].filename : null;
  const imageSilver = req.files.imageSilver ? req.files.imageSilver[0].filename : null;
  const imageRoseGold = req.files.imageRoseGold ? req.files.imageRoseGold[0].filename : null;


  const { name, description, price, material, quantity, sizeRange } = req.body;

  if (!name || !description || !price || !material || !quantity) {
    return res.render("addProduct", {
      pageTitle: `Add to ${collection}`,
      category: null,
      collection,
      errorMessage: "All fields are required",
      isAuthenticated: req.session.isLoggedIn,
      role: req.session.role
    });
  }

  const product = new Product(
    null,
    null,                
    name,
    description,
    price,
    material,
    quantity,
    imageGold,
    imageSilver,
    imageRoseGold,
    sizeRange || null,
    collection            
  );

  product.save()
    .then(() => res.redirect("/collections/" + collection))
    .catch(err => {
      console.error(err);
      res.render("addProduct", {
        pageTitle: `Add to ${collection}`,
        category: null,
        collection,
        errorMessage: "Something went wrong",
        isAuthenticated: req.session.isLoggedIn,
        role: req.session.role
      });
    });
};

export const getEditProduct = (req, res,next) =>{
    if (req.session.isLoggedIn&& req.session.role === "admin") {
  const productId = req.params.productId;

    Product.findById(productId)
    .then((result) => {
      const product = result[0][0];
      res.render("editProduct", {
        pageTitle: "edit products page",
        product: product,
        previousCategory: product.category,
        errorMessage: null,
        isAuthenticated: req.session.isLoggedIn,
         role: req.session.role,
      });
    })
    .catch((error) => {
      res.status(500).render("editProduct", {
        pageTitle: "edit products page",
        product: null,
        errorMessage: "Product not found",
        isAuthenticated: req.session.isLoggedIn,
         role: req.session.role,
      });
    });
  } else {
     res.status(403).send("Access denied: Admins only.");
    res.redirect("/");
 
  
}};
export const postEditProduct = (req, res, next) => {
  if (!(req.session.isLoggedIn && req.session.role === "admin")) {
    return res.status(403).send("Access denied: Admins only.");
  }

  const productId = req.params.productId;

  Product.findById(productId)
    .then(([rows]) => {
      const oldProduct = rows[0];

      if (!oldProduct) {
        return res.status(404).send("Product not found");
      }

      const newGold = req.files.imageGold ? req.files.imageGold[0].filename : null;
      const newSilver = req.files.imageSilver ? req.files.imageSilver[0].filename : null;
      const newRose = req.files.imageRoseGold ? req.files.imageRoseGold[0].filename : null;

      const imageGold = newGold || oldProduct.imageGold;
      const imageSilver = newSilver || oldProduct.imageSilver;
      const imageRoseGold = newRose || oldProduct.imageRoseGold;

      const category = req.body.previousCategory; 
      const name = req.body.name;
      const description = req.body.description;
      const price = req.body.price;
      const material = req.body.material;
      const quantity = req.body.quantity;
      const sizeRange = req.body.sizeRange || oldProduct.sizeRange;
      const collection = req.body.collection || oldProduct.collection;

      if (!name || !description || !price || !material || !quantity) {
        return res.status(400).render("editProduct", {
          pageTitle: "Edit Product",
          product: oldProduct,
          previousCategory: oldProduct.category,
          errorMessage: "All fields are required",
          isAuthenticated: req.session.isLoggedIn,
          role: req.session.role
        });
      }

      return Product.updateById(
        productId,
        category,
        name,
        description,
        price,
        material,
        quantity,
        imageGold,
        imageSilver,
        imageRoseGold,
        sizeRange,
         collection
      );
    })
    .then(() => {
      const category = req.body.previousCategory;
      res.redirect("/" + category);
    })
    .catch(err => {
      console.error(err);
      res.status(500).send("Error updating product");
    });
};


export const postDeleteProduct = (req, res,next) => {
  const productId = req.params.productId;



    Product.findById(productId)
  .then((result) => {
    console.log(result);
       const imageGold = result[0][0].imageGold;
       const imageSilver = result[0][0].imageSilver;
       const imageRoseGold = result[0][0].imageRoseGold;
       deleteFile(imageGold);
       deleteFile(imageSilver);
       deleteFile(imageRoseGold);

       return Product.deleteById(productId)
        .then((result) => {
          res.redirect("/");
        })
         .catch((error) => {
         console.log(error);
         });
     })


};


export const postChangeRole = (req, res, next) => {
  if (!(req.session.isLoggedIn && req.session.role === "admin")) {
    return res.status(403).send("Access denied: Admins only.");
  }

  const userId = req.body.userId;
   const newRole = "admin";

  if (!userId ) {
    return res.redirect("/admin/users");
  }

  User.updateRole(userId, newRole)
    .then(result => {
      const updateResult = result[0]; 

      if (updateResult.affectedRows === 0) {
        return res.redirect("/admin/users");
      }

      res.redirect("/admin/users");
    })
    .catch(err => {
      console.error(err);
      res.redirect("/admin/users");
    });
};


export const getAllUsers = (req, res, next) => {
  if (!(req.session.isLoggedIn && req.session.role === "admin")) {
    return res.status(403).send("Access denied: Admins only.");
  }

  User.getAll()
    .then(result => {
      const users = result[0]; 

      res.render("changeRole", {
        pageTitle: "Manage Users",
        users,
        isAuthenticated: req.session.isLoggedIn,
        role: req.session.role,
        errorMessage: null
      });
    })
    .catch(err => {
      console.error(err);

      res.render("changeRole", {
        pageTitle: "Manage Users",
        users: [],
        isAuthenticated: req.session.isLoggedIn,
        role: req.session.role,
        errorMessage: "Failed to load users"
      });
    });
};

