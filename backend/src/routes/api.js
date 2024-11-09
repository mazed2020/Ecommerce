import express from "express";
import { 
  userLogin,
  VerifyLogin,
  CreateUserProfile,
  UpdateUserProfile,
  ReadUserProfile,
  CreateUserReview,
  UpdateUserReview 
} from "../controllers/user.controller.js";
import {
  ProductListByCategory,
  ProductListByKeyword,
  ProductListByRemark,
  ProductListBySlider,
  ProductReviewListByID,
  ProductListByBrand,
}from '../controllers/product.controller.js'

import {categoryList} from  '../controllers/categories.controller.js'
const router=express.Router();
 
  // Endpoint to get all users
  router.route('/login').get(userLogin);
  router.route('/VerifyLogin').get(VerifyLogin);
  router.route('/CreateUserProfile').get(CreateUserProfile);
  router.route('/UpdateUserProfile').get(UpdateUserProfile);
  router.route('/ReadUserProfile').get(ReadUserProfile);
  router.route('/CreateUserReview').get(CreateUserReview);
  router.route('/UpdateUserReview').get(UpdateUserReview);


  //products routes
  router.route('/ProductListByCategory').get(ProductListByCategory);
  router.route('/ProductListByKeyword').get( ProductListByKeyword);
  router.route('/ProductListByRemark').get(ProductListByRemark);
  router.route('/ProductListBySlider').get(ProductListBySlider);
  router.route('/ProductReviewListByID').get(ProductReviewListByID);
  router.route('/ProductListByCategory').get(ProductListByCategory);
  router.route('/ProductListByBrand').get(ProductListByBrand);

  //category routes
  router.route('/Category').get(categoryList);




  export default router;