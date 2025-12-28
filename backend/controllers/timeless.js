import { Product } from "../models/product.js";
import { Wishlist } from "../models/wishlists.js"; 

export const getTimeless = (req, res, next) => {
  Product.getTopBestSellers()
    .then(([bestSellers]) => {
      res.render("homepage", {
        pageTitle: "Homepage",
        isAuthenticated: req.session.isLoggedIn,
        currentUser: req.session.currentUser || null,
        role: req.session.role,
        items: bestSellers 
      });
    })
    .catch(err => {
      console.error(err);
      res.render("homepage", {
        pageTitle: "Homepage",
        isAuthenticated: req.session.isLoggedIn,
        currentUser: req.session.currentUser || null,
        role: req.session.role,
        items: [] 
      });
    });
};

export const getExchange = (req, res,next) => {
  res.render("exchange", {
    pageTitle: "Exchange page",
    isAuthenticated: req.session.isLoggedIn,
    currentUser: req.session.currentUser || null,
    role: req.session.role, 
    items: [], 
  });
};
export const getShippingPolicy = (req, res,next) => {
  res.render("shippingPolicy", {
    pageTitle: "Shipping Policy page",
    isAuthenticated: req.session.isLoggedIn,
    currentUser: req.session.currentUser || null,
    role: req.session.role, 
    items: [], 
  });
};
export const getFAQ = (req, res,next) => {
  res.render("FAQ", {
    pageTitle: "FAQ page",
    isAuthenticated: req.session.isLoggedIn,
    currentUser: req.session.currentUser || null,
    role: req.session.role, 
    items: [], 
  });
};
export const getOurStory = (req, res,next) => {
  res.render("ourStory", {
    pageTitle: "Our Story page",
    isAuthenticated: req.session.isLoggedIn,
    currentUser: req.session.currentUser || null,
    role: req.session.role, 
    items: [], 
  });
};
export const getPayment = (req, res,next) => {
  res.render("payment", {
    pageTitle: "Payment page",
    isAuthenticated: req.session.isLoggedIn,
    currentUser: req.session.currentUser || null,
    role: req.session.role, 
    items: [], 
  });
};
export const getLocation = (req, res,next) => {
  res.render("location", {
    pageTitle: "Location page",
    isAuthenticated: req.session.isLoggedIn,
    currentUser: req.session.currentUser || null,
    role: req.session.role, 
    items: [], 
  });
};
export const getPrivacy = (req, res,next) => {
  res.render("privacy", {
    pageTitle: "Privacy page",
    isAuthenticated: req.session.isLoggedIn,
    currentUser: req.session.currentUser || null,
    role: req.session.role, 
    items: [], 
  });
};
export const getSearchProduct = (req, res, next) =>  {
  console.log(req.query);
  const searchQuery = req.query.searchQuery;
  const isLoggedIn = req.session.isLoggedIn;

    Product.searchByQuery(searchQuery)
    .then((result) => {
      const searchedProducts = result[0];
      res.render("searchedProducts", {
        pageTitle: "Searched products page",
        product: searchedProducts,
        errorMessage: null,
        isAuthenticated: isLoggedIn,
        currentUser: req.session.currentUser,
        role: req.session.role,
      });
    })
    .catch((error) => {
      res.render("/", {
        pageTitle: "Homepage",
        products: [],
        errorMessage: "Failed to fetch products",
        isAuthenticated: false,
        currentUser: null,
         role: req.session.role,
      });
    });
};







export const getViewProducts = (req, res) => {
    Product.fetchAll()
    .then((result) => {
      const products = result[0];
      res.render("viewProducts", {
        pageTitle: "All Products",
        products: products,
        isAuthenticated: req.session.isLoggedIn,
        role: req.session.role,
        currentUser: req.session.currentUser || null,
        category: null, // No specific category filter
      });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).render("404", {
        pageTitle: "Error",
        isAuthenticated: req.session.isLoggedIn,
         role: req.session.role,
      });
    });
};
export const getRings = (req, res) => {
    Product.getCategory("rings")
    .then((result) => {
      const products = result[0];
      res.render("viewProducts", {
        pageTitle: "Rings",
        products: products,
        isAuthenticated: req.session.isLoggedIn,
        role: req.session.role,
        currentUser: req.session.currentUser || null,
        category: "rings",
      });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).render("404", {
        pageTitle: "Error",
        isAuthenticated: req.session.isLoggedIn,
         role: req.session.role,
      });
    });
};
export const getNecklaces = (req, res) => {

    Product.getCategory("necklaces")
    .then((result) => {
      const products = result[0];
      res.render("viewProducts", {
        pageTitle: "Necklaces",
        products: products,
        isAuthenticated: req.session.isLoggedIn,
        role: req.session.role,
        currentUser: req.session.currentUser || null,
        category: "necklaces",
      });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).render("404", {
        pageTitle: "Error",
        isAuthenticated: req.session.isLoggedIn,
         role: req.session.role,
      });
    });
};
export const getBracelets = (req, res) => {
    Product.getCategory("bracelets")
    .then((result) => {
      const products = result[0];
      res.render("viewProducts", {
        pageTitle: "Bracelets",
        products: products,
        isAuthenticated: req.session.isLoggedIn,
        role: req.session.role,
        currentUser: req.session.currentUser || null,
        category: "bracelets",
      });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).render("404", {
        pageTitle: "Error",
        isAuthenticated: req.session.isLoggedIn,
         role: req.session.role,
      });
    });
};
export const getEarrings = (req, res) => {
Product.getCategory("earrings")
    .then((result) => {
      const products = result[0];
      res.render("viewProducts", {
        pageTitle: "Earrings",
        products: products,
        isAuthenticated: req.session.isLoggedIn,
        role: req.session.role,
        currentUser: req.session.currentUser || null,
        category: "earrings",
      });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).render("404", {
        pageTitle: "Error",
        isAuthenticated: req.session.isLoggedIn,
         role: req.session.role,
      });
    });
};
export const getWatches = (req, res) => {
    Product.getCategory("watches")
    .then((result) => {
      const products = result[0];
      res.render("viewProducts", {
        pageTitle: "Watches",
        products: products,
        isAuthenticated: req.session.isLoggedIn,
        role: req.session.role,
        currentUser: req.session.currentUser || null,
        category: "watches",
      });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).render("404", {
        pageTitle: "Error",
        isAuthenticated: req.session.isLoggedIn,
         role: req.session.role,
      });
    });
};
export const getCharms = (req, res) => {
    Product.getCategory("charms")
    .then((result) => {
      const products = result[0];
      res.render("viewProducts", {
        pageTitle: "Charms",
        products: products,
        isAuthenticated: req.session.isLoggedIn,
        role: req.session.role,
        currentUser: req.session.currentUser || null,
        category: "charms",
      });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).render("404", {
        pageTitle: "Error",
        isAuthenticated: req.session.isLoggedIn,
         role: req.session.role,
      });
    });
};


export const getProductDetail = (req, res) => {
  const productId = req.params.productId;
  const userId = req.session.userId || req.session.user?.id || null;

  Product.findById(productId)
    .then(([rows]) => {
      const product = rows[0];

      if (!product) {
        return res.status(404).render("404", {
          pageTitle: "Product Not Found",
          isAuthenticated: req.session.isLoggedIn,
          role: req.session.role,
        });
      }

      if (!userId) {
        return res.render("productDetail", {
          pageTitle: "Product Detail",
          product,
          inWishlist: false,  
          isAuthenticated: req.session.isLoggedIn,
          role: req.session.role,
          currentUser: req.session.currentUser || null,
        });
      }

      return Wishlist.isInWishlist(userId, product.ID).then(([wishlistRows]) => {

        const inWishlist = wishlistRows.length > 0;

        res.render("productDetail", {
          pageTitle: "Product Detail",
          product,
          inWishlist,
          isAuthenticated: req.session.isLoggedIn,
          role: req.session.role,
          currentUser: req.session.currentUser || null,
        });

      });

    })
    .catch((err) => {
      console.error(err);
      res.status(500).render("404", {
        pageTitle: "Error",
        isAuthenticated: req.session.isLoggedIn,
        role: req.session.role,
      });
    });
};
export const getAllCategoriesPage = (req, res) => {
  Product.getCategory("charms")
    .then((result1) => {
      const charms = result1[0];

      Product.getCategory("rings")
        .then((result2) => {
          const rings = result2[0];

          Product.getCategory("bracelets")
            .then((result3) => {
              const bracelets = result3[0];

              Product.getCategory("watches")
                .then((result4) => {
                  const watches = result4[0];

                  Product.getCategory("necklaces")
                    .then((result5) => {
                      const necklaces = result5[0];

                      Product.getCategory("earrings")
                        .then((result6) => {
                          const earrings = result6[0];

                          res.render("allCategories", {
                            pageTitle: "All Products",
                            charms,
                            rings,
                            bracelets,
                            watches,
                            necklaces,
                            earrings,
                            isAuthenticated: req.session.isLoggedIn,
                            role: req.session.role,
                          });
                        });
                    });
                });
            });
        });
    })
    .catch(err => {
      console.error(err);
      res.status(500).send("Server Error");
    });
};
export const getEternalBloom = (req, res) => {
    Product.getCollection("eternal-bloom")
    .then((result) => {
      const products = result[0];
      res.render("viewCollections", {
        pageTitle: "Eternal Bloom Collection",
        products: products,
        collectionName: "Eternal Bloom",
        collectionDescription: "Timeless elegance that blooms forever",
        isAuthenticated: req.session.isLoggedIn,
        role: req.session.role,
        currentUser: req.session.currentUser || null,
        collection: "eternal-bloom",
      });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).render("404", {
        pageTitle: "Error",
        isAuthenticated: req.session.isLoggedIn,
         role: req.session.role,
      });
    });
};

export const getTimelessCollection = (req, res) => {
    Product.getCollection("timeless-collection")
    .then((result) => {
      const products = result[0];
      res.render("viewCollections", {
        pageTitle: "Timeless Collection",
        products: products,
        collectionName: "Timeless",
        collectionDescription: "Classic pieces that transcend time",
        isAuthenticated: req.session.isLoggedIn,
        role: req.session.role,
        currentUser: req.session.currentUser || null,
        collection: "timeless-collection",
      });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).render("404", {
        pageTitle: "Error",
        isAuthenticated: req.session.isLoggedIn,
         role: req.session.role,
      });
    });
};

export const getBridalCollection = (req, res) => {
    Product.getCollection("bridal-collection")
    .then((result) => {
      const products = result[0];
      res.render("viewCollections", {
        pageTitle: "Bridal Collection",
        products: products,
        collectionName: "Bridal",
        
        collectionDescription: "Exquisite pieces for your special day",
        isAuthenticated: req.session.isLoggedIn,
        role: req.session.role,
        currentUser: req.session.currentUser || null,
        collection: "bridal-collection",
      });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).render("404", {
        pageTitle: "Error",
        isAuthenticated: req.session.isLoggedIn,
         role: req.session.role,
      });
    });
};


