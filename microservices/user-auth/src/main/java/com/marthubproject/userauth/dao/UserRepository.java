package com.marthubproject.userauth.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.marthubproject.userauth.model.User;

@Repository
public interface UserRepository extends JpaRepository<User,Integer> {
	
	User findByUserId(String user);
}
