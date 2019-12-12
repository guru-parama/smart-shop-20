package com.cognizant.marthubproject.products.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.cognizant.marthubproject.products.dao.UserRepository;
import com.cognizant.marthubproject.products.model.User;

@Service
public class AppUserDetailsService implements UserDetailsService {

	@Autowired
	UserRepository userRepository;

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		
		AppUser appUser = null;
		User user = userRepository.findByUserId(username);
		if(user == null) {
			throw new UsernameNotFoundException("User not found"); 
		}else {
			appUser = new AppUser(user);  
		}
		return appUser;
	}

}
