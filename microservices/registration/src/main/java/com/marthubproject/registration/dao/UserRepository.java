package com.marthubproject.registration.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.marthubproject.registration.model.User;

@Repository
public interface UserRepository extends JpaRepository<User,Integer> {
	
	public User findByUserId(String user);
	
	public User findByContactNumber(long contactNumber);
	
	@Query(nativeQuery = true, value = "select * from user where us_status='P'")
	public List<User> getAllUsers();
	
	@Query(nativeQuery = true, value = "select * from user where us_user_type='U'")
	public List<User> getAllUsersforbilling();
}
