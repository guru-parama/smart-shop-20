package com.cognizant.marthubproject.products.model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "product")
public class Product {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "pr_id")
	private int id;
	@Column(name = "pr_code")
	private String code;
	@Column(name = "pr_name")
	private String name;
	@Column(name = "pr_type")
	private int type;
	@Column(name = "pr_brand")
	private 	String brand;
	@Column(name = "pr_quantity_type")
	private int quantityType;
	@Column(name = "pr_rate", columnDefinition = "DECIMAL")
	private long ratePerQuantity;
	@Column(name = "pr_stock_count")
	private int stockCount;
	@Column(name = "pr_add_date")
	private 	Date addDate;
	@Column(name = "pr_aisle")
	private 	String aisle;
	@Column(name = "pr_shelf")
	private 	String shelf;
	@Column(name = "pr_date_of_manufacture")
	private 	Date dateOfManufacture;
	@Column(name = "pr_date_of_expiry")
	private 	Date dateOfExpiry;
	@Column(name = "pr_image")
	private 	String image;

	public Product() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Product(int id, String code, String name, int type, String brand, int quantityType, long ratePerQuantity,
			int stockCount, Date addDate, String aisle, String shelf, Date dateOfManufacture, Date dateOfExpiry,
			String image) {
		super();
		this.id = id;
		this.code = code;
		this.name = name;
		this.type = type;
		this.brand = brand;
		this.quantityType = quantityType;
		this.ratePerQuantity = ratePerQuantity;
		this.stockCount = stockCount;
		this.addDate = addDate;
		this.aisle = aisle;
		this.shelf = shelf;
		this.dateOfManufacture = dateOfManufacture;
		this.dateOfExpiry = dateOfExpiry;
		this.image = image;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getCode() {
		return code;
	}

	public void setCode(String code) {
		this.code = code;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getType() {
		return type;
	}

	public void setType(int type) {
		this.type = type;
	}

	public String getBrand() {
		return brand;
	}

	public void setBrand(String brand) {
		this.brand = brand;
	}

	public long getQuantityType() {
		return quantityType;
	}

	public void setQuantityType(int quantityType) {
		this.quantityType = quantityType;
	}

	public long getRatePerQuantity() {
		return ratePerQuantity;
	}

	public void setRatePerQuantity(long ratePerQuantity) {
		this.ratePerQuantity = ratePerQuantity;
	}

	public int getStockCount() {
		return stockCount;
	}

	public void setStockCount(int stockCount) {
		this.stockCount = stockCount;
	}

	public Date getAddDate() {
		return addDate;
	}

	public void setAddDate(Date addDate) {
		this.addDate = addDate;
	}

	public String getAisle() {
		return aisle;
	}

	public void setAisle(String aisle) {
		this.aisle = aisle;
	}

	public String getShelf() {
		return shelf;
	}

	public void setShelf(String shelf) {
		this.shelf = shelf;
	}

	public Date getDateOfManufacture() {
		return dateOfManufacture;
	}

	public void setDateOfManufacture(Date dateOfManufacture) {
		this.dateOfManufacture = dateOfManufacture;
	}

	public Date getDateOfExpiry() {
		return dateOfExpiry;
	}

	public void setDateOfExpiry(Date dateOfExpiry) {
		this.dateOfExpiry = dateOfExpiry;
	}

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}

	@Override
	public String toString() {
		return "Product [id=" + id + ", code=" + code + ", name=" + name + ", type=" + type + ", brand=" + brand
				+ ", quantityType=" + quantityType + ", ratePerQuantity=" + ratePerQuantity + ", stockCount="
				+ stockCount + ", addDate=" + addDate + ", aisle=" + aisle + ", shelf=" + shelf + ", dateOfManufacture="
				+ dateOfManufacture + ", dateOfExpiry=" + dateOfExpiry + ", image=" + image + "]";
	}

}
