package com.cognizant.marthubproject.products.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cognizant.marthubproject.products.dao.ProductRepository;
import com.cognizant.marthubproject.products.model.Product;

@Service
public class ProductService {

	@Autowired
	ProductRepository productRepository;
	
	public List<Product> getAllProducts() {
		return productRepository.findAll();
	}
	
	public void editProduct(Product product) {
		productRepository.save(product);
	}
	
	public void addProduct(Product product) {
		productRepository.save(product);
	}
	
	public Product getProduct(int id) {
		return productRepository.findById(id).get();
	}
	
	public void deleteProduct(int id) {
		Product product = productRepository.findById(id).get();
		productRepository.delete(product);
	}
	
	public List<Product> getSortByPopularity(){
		List<Product> productArray = productRepository.getProductArray1();
		productArray.addAll(productRepository.getProductArray2());
		System.out.println(productArray);
		return productArray;
	}
	
	public List<Product> getNewProducts(){
		return productRepository.getProductNewList();
	}
}
