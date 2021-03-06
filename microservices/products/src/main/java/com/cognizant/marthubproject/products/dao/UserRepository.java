package com.cognizant.marthubproject.products.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.cognizant.marthubproject.products.model.User;

@Repository
public interface UserRepository extends JpaRepository<User,Integer> {
	
	@Query(nativeQuery = true, value = "Select * from user where us_user_id = :id")
	public User findByUserId(@Param("id") String userName);
	
	@Query(nativeQuery = true, value = "UPDATE `marthub`.`user` SET `us_reward_points` = `us_reward_points` + :points WHERE (`us_id` = :id );")
	public void updateRewardPointd(@Param("points") int points, @Param("id") int id);
}
