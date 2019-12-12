package com.cognizant.marthubproject.products.exception;

@SuppressWarnings("serial")
public class OfferAlreadyExistsException extends Exception {

	public OfferAlreadyExistsException() {
		super("Offer already exits for the selected product");
	}
}
