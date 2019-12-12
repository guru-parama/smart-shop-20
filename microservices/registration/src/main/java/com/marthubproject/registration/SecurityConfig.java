package com.marthubproject.registration;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

import com.marthubproject.registration.security.AppUserDetailsService;
import com.marthubproject.registration.security.JwtAuthorizationFilter;

@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {
	
	@Autowired
	AppUserDetailsService appUserDetailsService; 
	
	@Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
		auth.userDetailsService(appUserDetailsService).passwordEncoder(passwordEncoder());
    }
    
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

	@Override
    protected void configure(HttpSecurity httpSecurity) throws Exception {
    	httpSecurity.cors();
    	httpSecurity.csrf().disable().httpBasic().and()
    	.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
    	.and()
        .authorizeRequests()
        .antMatchers("/marthub/register").permitAll()
        .antMatchers("/marthub/users/{id}").permitAll()
        .antMatchers("/marthub/users").permitAll()
        .anyRequest().permitAll()
        .and()
        .addFilter(new JwtAuthorizationFilter(authenticationManager()));
    }
    
    
}
