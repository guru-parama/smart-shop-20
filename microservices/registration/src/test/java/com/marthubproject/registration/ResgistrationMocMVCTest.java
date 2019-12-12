//package com.marthubproject.registration;
//import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;
//import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
//import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
//
//
//import org.junit.Test;
//import org.junit.runner.RunWith;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
//import org.springframework.boot.test.context.SpringBootTest;
//import org.springframework.http.MediaType;
//import org.springframework.test.context.junit4.SpringRunner;
//import org.springframework.test.web.servlet.MockMvc;
//import org.springframework.test.web.servlet.ResultActions;
//import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
//import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
//
//import com.fasterxml.jackson.databind.ObjectMapper;
//import com.marthubproject.registration.controller.UserController;
//import com.marthubproject.registration.model.User;
//
//@RunWith(SpringRunner.class)
//@AutoConfigureMockMvc
//@SpringBootTest
//public class ResgistrationMocMVCTest {
//
//	@Autowired
//	private MockMvc mockMvc;
//	
//	@Autowired
//	UserController userController;
//	
//	public static String asJsonString(final Object obj) {
//	    try {
//	        return new ObjectMapper().writeValueAsString(obj);
//	    } catch (Exception e) {
//	        throw new RuntimeException(e);
//	    }
//	}
//	
//	@Test
//	public void getAllUsers() throws Exception {
//		mockMvc.perform(MockMvcRequestBuilders.get("/marthub/users")).andExpect(status().isOk());
//	}
//	
//	@Test
//	public void getUser() throws Exception {
//		mockMvc.perform(MockMvcRequestBuilders.get("/marthub/users/4")).andExpect(status().isOk());
//	}
//	
//	@Test
//	public void getUserByContactNumber() throws Exception {
//		mockMvc.perform(MockMvcRequestBuilders.get("/marthub/users-contact/789")).andExpect(status().isOk());
//	}
//	
//	@Test
//	public void getAllUsersForBilling() throws Exception {
//		mockMvc.perform(MockMvcRequestBuilders.get("/marthub/users-billing")).andExpect(status().isOk());
//	}
//	
//	@Test
//    public void newUser() throws Exception {
//       mockMvc.perform(MockMvcRequestBuilders
//    		      .post("/marthub/register")
//    		      .content(asJsonString(new User(2,"adminb","admin","admin","Male",21,735,"a","O","A","what is your Nick name","aa","what is your favorite food","aa","what is your favorite holiday spot","aa")))
//    		      .contentType(MediaType.APPLICATION_JSON)
//    		      .accept(MediaType.APPLICATION_JSON))
//    		      .andExpect(status().isOk());
//    		  
//    }
//}
