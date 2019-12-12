package com.cognizant.marthubproject.products.model;

import java.util.Date;
import java.util.List;
import java.util.Map;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name="bill")
public class Bill {

	@Id
	@Column(name = "b_id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	@ManyToOne
	@JoinColumn(name = "b_us_id")
	private User user;
	
	@Column(name = "b_total_amount", columnDefinition = "DECIMAL")
	private double total;
	
	@Column(name = "b_discounted_amount", columnDefinition = "DECIMAL")
	private int discountedTotal;
	
	@OneToMany(cascade = {CascadeType.ALL})
	@JoinColumn(name="bill_b_id")
	private List<BillDetails> billDetailsList;
	
	@Column(name = "b_reward_points", columnDefinition = "DECIMAL")
	private int rewardPoints;
	
	@Column(name = "b_user_reward_points", columnDefinition = "DECIMAL")
	private int userRewardPoints;
	
	@Column(name = "b_purchase_date")
	private Date purchaseDate;	

	public Bill() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Bill(int id, Date purchaseDate, double total, int rewardPoints, Map<Product, Integer> productMap) {
		super();
		this.id = id;
		this.purchaseDate = purchaseDate;
		this.total = total;
		this.rewardPoints = rewardPoints;
	}

	
	public int getDiscountedTotal() {
		return discountedTotal;
	}

	public void setDiscountedTotal(int discountedTotal) {
		this.discountedTotal = discountedTotal;
	}

	public int getUserRewardPoints() {
		return userRewardPoints;
	}

	public void setUserRewardPoints(int userRewardPoints) {
		this.userRewardPoints = userRewardPoints;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public Date getPurchaseDate() {
		return purchaseDate;
	}

	public void setPurchaseDate(Date purchaseDate) {
		this.purchaseDate = purchaseDate;
	}

	public double getTotal() {
		return total;
	}

	public void setTotal(double total) {
		this.total = total;
	}

	public int getRewardPoints() {
		return rewardPoints;
	}

	public void setRewardPoints(int rewardPoints) {
		this.rewardPoints = rewardPoints;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public List<BillDetails> getBillDetailsList() {
		return billDetailsList;
	}

	public void setBillDetailsList(List<BillDetails> billDetailsList) {
		this.billDetailsList = billDetailsList;
	}

}
