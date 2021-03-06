package com.marthubproject.userauth.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "user")
public class User {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "us_id")
	private int id;
	@Column(name = "us_user_id")
	private String userId;
	@Column(name = "us_first_name")
	private String firstName;
	@Column(name = "us_last_name")
	private String lastName;
	@Column(name = "us_gender")
	private String gender;
	@Column(name = "us_age")
	private int age;
	@Column(name = "us_contact_number")
	private long contactNumber;
	@Column(name = "us_password")
	private String password;
	@Column(name = "us_user_type")
	private String userType;
	@Column(name = "us_reward_points", columnDefinition = "DECIMAL")
	private long rewardPoints;
	@Column(name = "us_status")
	private String status;
	@Column(name = "us_ques_1")
	private String question1;
	@Column(name = "us_ans_1")
	private String answer1;
	@Column(name = "us_ques_2")
	private String question2;
	@Column(name = "us_ans_2")
	private String answer2;
	@Column(name = "us_ques_3")
	private String question3;
	@Column(name = "us_ans_3")
	private String answer3;
	
	public User() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	public User(int id, String userId, String firstName, String lastName, String gender, int age, long contactNumber,
			String password, String userType, String status, String question1, String answer1, String question2,
			String answer2, String question3, String answer3) {
		super();
		this.id = id;
		this.userId = userId;
		this.firstName = firstName;
		this.lastName = lastName;
		this.gender = gender;
		this.age = age;
		this.contactNumber = contactNumber;
		this.password = password;
		this.userType = userType;
		this.status = status;
		this.question1 = question1;
		this.answer1 = answer1;
		this.question2 = question2;
		this.answer2 = answer2;
		this.question3 = question3;
		this.answer3 = answer3;
	}

	
	public long getRewardPoints() {
		return rewardPoints;
	}

	public void setRewardPoints(long rewardPoints) {
		this.rewardPoints = rewardPoints;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getUserId() {
		return userId;
	}

	public void setUserId(String userId) {
		this.userId = userId;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastname(String lastName) {
		this.lastName = lastName;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public int getAge() {
		return age;
	}

	public void setAge(int age) {
		this.age = age;
	}

	public long getContactNumber() {
		return contactNumber;
	}

	public void setContactNumber(long contactNumber) {
		this.contactNumber = contactNumber;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getUserType() {
		return userType;
	}

	public void setUserType(String userType) {
		this.userType = userType;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public String getQuestion1() {
		return question1;
	}

	public void setQuestion1(String question1) {
		this.question1 = question1;
	}

	public String getAnswer1() {
		return answer1;
	}

	public void setAnswer1(String answer1) {
		this.answer1 = answer1;
	}

	public String getQuestion2() {
		return question2;
	}

	public void setQuestion2(String question2) {
		this.question2 = question2;
	}

	public String getAnswer2() {
		return answer2;
	}

	public void setAnswer2(String answer2) {
		this.answer2 = answer2;
	}

	public String getQuestion3() {
		return question3;
	}

	public void setQuestion3(String question3) {
		this.question3 = question3;
	}

	public String getAnswer3() {
		return answer3;
	}

	public void setAnswer3(String answer3) {
		this.answer3 = answer3;
	}
	
	
	
}
