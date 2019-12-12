package com.marthubproject.userauth.controller;

import java.util.Base64;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import io.jsonwebtoken.JwtBuilder;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

@RestController
@RequestMapping("/marthub")
public class AuthenticationController {
	
	private static final Logger LOGGER = LoggerFactory.getLogger(AuthenticationController.class);
	@GetMapping("/authenticate")
	public Map<String, String> authenticate(@RequestHeader("Authorization") String authHeader){
		LOGGER.info("Start");
		Map<String, String> data = new HashMap();
		String userType = SecurityContextHolder.getContext().getAuthentication()
                .getAuthorities().toArray()[0].toString();
		String status = SecurityContextHolder.getContext().getAuthentication()
                .getAuthorities().toArray()[1].toString();
		String firstName = SecurityContextHolder.getContext().getAuthentication()
                .getAuthorities().toArray()[2].toString();
		Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
		String user = authentication.getName();
		data.put("token", generateJwt(getUser(authHeader)));
		data.put("userType", userType);
		data.put("status", status);
		data.put("username", user);
		LOGGER.info("End");
		return data;
	}
	
	private String getUser(String authHeader) {
		LOGGER.info("Start");
		String encodedCredentials = authHeader.split(" ")[1];
		String deodedCredentials = new String(Base64.getDecoder().decode(encodedCredentials));
		LOGGER.info("End");
		return deodedCredentials.split(":")[0];
	}

	private String generateJwt(String user) {
		LOGGER.info("Start");
		 JwtBuilder builder = Jwts.builder();
	        builder.setSubject(user);
	        builder.setIssuedAt(new Date());
	        builder.setExpiration(new Date((new Date()).getTime() + 1200000));
	        builder.signWith(SignatureAlgorithm.HS256, "secretkey");

	        String token = builder.compact();
	   LOGGER.info("End");
	   return token;
	}
}