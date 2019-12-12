package com.cognizant.marthubproject.products.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cognizant.marthubproject.products.model.Bill;
import com.cognizant.marthubproject.products.model.BillFetch;
import com.cognizant.marthubproject.products.service.BillService;

@RestController
@RequestMapping("/marthub")
public class BillController {
	
	@Autowired
	BillService billService;
	
	@GetMapping("/bills")
	List<Bill> getAllBills(){
		return billService.getAllBills();
	}
	
	@PostMapping("/bills")
	Bill postBills(@RequestBody BillFetch billFetch) {
		return billService.userBills(billFetch);
	}
	
	@GetMapping("/bills/{id}")
	List<Bill> getBill(@PathVariable String id) {
		return billService.getBill(id);
	}
	 
	
}
