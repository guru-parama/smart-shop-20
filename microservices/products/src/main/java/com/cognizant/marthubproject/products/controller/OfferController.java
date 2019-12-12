package com.cognizant.marthubproject.products.controller;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cognizant.marthubproject.products.exception.OfferAlreadyExistsException;
import com.cognizant.marthubproject.products.model.Offer;
import com.cognizant.marthubproject.products.service.OfferService;

@RestController
@RequestMapping("/marthub")
public class OfferController {
	
	@Autowired
	OfferService offerService; 
	
	@PostMapping("/offer/{id}")
	public void addOffer(@RequestBody Offer offer, @PathVariable int id) throws OfferAlreadyExistsException {	
		offerService.addOffer(offer, id);
	}
	
	@PutMapping("/offer/{id}")
	public void updateOffer(@RequestBody Offer offer, @PathVariable int id) throws OfferAlreadyExistsException {
		offerService.updateOffer(offer, id);
	}
	
	@GetMapping("/offer/{id}")
	public Offer addOffer(@PathVariable int id) {	
		return offerService.getOffer(id);
	}
	
	@DeleteMapping("/offer/{id}")
	public void delteOffer(@PathVariable int id) {	
		offerService.deleteOffer(id);
	}
	
	@GetMapping("/offer")
	public List<Offer> getCurrentOffer() {
		return offerService.getCurrentOffers();
	}

	@GetMapping("/offer-list/{day}/{month}/{year}")
	public List<Offer> getOffer(@PathVariable String day, @PathVariable String month, @PathVariable String year  ) {
		String dateString = day+"/"+month+"/"+year; 
		Date date = null;
		try {
			date = new SimpleDateFormat("dd/MM/yyyy").parse(dateString);
		} catch (ParseException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		};
		
		return offerService.getOffers(date);
	}
}
