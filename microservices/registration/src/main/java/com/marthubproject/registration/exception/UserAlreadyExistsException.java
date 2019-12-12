package com.marthubproject.registration.exception;

@SuppressWarnings("serial")
public class UserAlreadyExistsException extends Exception {

	public UserAlreadyExistsException() {
		super("User exists");
	}
}
