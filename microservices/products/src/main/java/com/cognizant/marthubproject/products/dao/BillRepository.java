package com.cognizant.marthubproject.products.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.cognizant.marthubproject.products.model.Bill;
import com.cognizant.marthubproject.products.model.BillDetails;

@Repository
public interface BillRepository extends JpaRepository<Bill, Integer> {
	@Query(nativeQuery = true, value = "select max(bd_id) from bill_details;")
	int findMaximunBillDetailsId();

	@Query(nativeQuery = true, value = "select max(b_id) from bill;")
	int findMaximunBillId();
	
	@Query(nativeQuery = true, value = "select * from bill_details;")
	List<BillDetails> findBillDetailsAll();
	
	@Query(nativeQuery = true, value = "SELECT bill.* FROM bill INNER JOIN user on (bill.b_us_id = user.us_id) WHERE user.us_user_id = :id ;")
	List<Bill> getBill(@Param("id") String id);
	
	
}
