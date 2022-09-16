import { isAdmin, isAuthenticated } from '@/middlewares/auth.middleware';
import { upload, uploader } from '@/middlewares/upload.middleware';
import { Routes } from '@/types/routes.interface';
import { Router } from 'express';
import productController from './productsController';

class ProductsRoute implements Routes {
  public path = '/products/';
  public router = Router();
  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router
      .route(this.path)
      .get(productController.getProducts)
      .post(isAuthenticated, isAdmin, uploader.single('image'), upload, productController.addProduct);    
    this.router.route(`${this.path}shop`).get(productController.searchFilters)
    this.router.route(`${this.path}search`).get(productController.searchByCategory);
    this.router.route(`${this.path}search/:title`).get(productController.seachByTitle);
    this.router
      .route(`${this.path}:slug`)
      .get(productController.getProductBySlug)
      .patch(isAuthenticated, isAdmin, productController.updateProduct);

    this.router.route(`${this.path}:id`).delete(isAuthenticated, isAdmin, productController.deleteProduct);
  }
}

export default ProductsRoute;
