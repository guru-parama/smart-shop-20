package com.cognizant.marthubproject.products.dao;

import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.cognizant.marthubproject.products.model.Offer;

public interface OfferRepository extends JpaRepository<Offer, Integer> {

	@Query(nativeQuery = true, value = "SELECT * FROM offer WHERE DATE(of_date) = CURDATE();")
	List<Offer> getCurrentOffer();
	
	@Query(nativeQuery = true, value = "SELECT * FROM offer WHERE DATE(of_date) = :date AND product_pr_id = :id ;")
	Optional<Offer> getOffer(@Param("date") Date date, @Param("id") int id);
	
	@Query(nativeQuery = true, value = "SELECT * FROM offer WHERE DATE(of_date) = :date ;")
	List<Offer> getOfferList(@Param("date") Date date);
	
	@Query(nativeQuery = true, value = "SELECT product_pr_id FROM offer WHERE of_date = :date ;")
	public List<Integer> findOfferCodes(@Param("date") Date date);
	
	@Query(nativeQuery = true, value = "SELECT of_discount_percentage FROM offer WHERE product_pr_id = :code AND DATE(of_date) = CURDATE() ;")
	public int findDiscountByCode(@Param("code") int code);
}
