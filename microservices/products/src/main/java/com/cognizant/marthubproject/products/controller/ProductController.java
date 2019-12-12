package com.cognizant.marthubproject.products.controller;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cognizant.marthubproject.products.model.Product;
import com.cognizant.marthubproject.products.service.ProductService;

@RestController
@RequestMapping("/marthub")
@CrossOrigin("*")
public class ProductController {

	private static final Logger LOGGER = LoggerFactory.getLogger(ProductController.class);
	@Autowired
	ProductService productService;
	
	@GetMapping("/product-list")
	public List<Product> getAllProducts() {
		LOGGER.info("Start");
		return productService.getAllProducts();
	}
	
	@GetMapping("/product-list/new")
	public List<Product> getAllNewProducts() {
		LOGGER.info("Start");
		return productService.getNewProducts();
	}
	
	@GetMapping("/product-list/{id}")
	public Product getProduct(@PathVariable int id) {
		LOGGER.info("Start");
		return productService.getProduct(id);
	}
	
	@PutMapping("/product-list")
	public void editProduct(@RequestBody Product product) {
		LOGGER.info("Start");
		productService.editProduct(product);
	}
	
	@PostMapping("/product-list")
	public void addProduct(@RequestBody Product product) {
		LOGGER.info("Start");
		productService.addProduct(product);
	}
	
	@DeleteMapping("/product-list/{id}")
	public void deleteProduct(@PathVariable int id) {
		LOGGER.info("Start");
		productService.deleteProduct(id);
	}
	
	@GetMapping("/product-list/sort-by-popularity")
	public List<Product> sortByPopularity() {
		LOGGER.info("Start");
		return productService.getSortByPopularity();
	}
	
}
