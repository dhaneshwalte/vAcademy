package com.vacademy.vacademy.authentication;
import java.util.*;
import org.springframework.stereotype.Service;

//Contains all the reuired services for login/signup
@Service
public class AuthenticationServices {
	
	private static List<Users>allUsers;
	private static Long id=0L;
	
	public AuthenticationServices() {}
	
	static
	{
		allUsers=new ArrayList<Users>();
		allUsers.add(new Users(++id,"Dhanesh","Walte","d@g.com","12345","12345",false));
		allUsers.add(new Users(++id,"Mohit","Gupta","m@g.com","12345","12345",false));
		allUsers.add(new Users(++id,"Rohan","Kurekar","r@g.com","12345","12345",false));
	}
	
	public static List<Users> getAllUsers() {
		return allUsers;
	}

	public static void setAllUsers(List<Users> allUsers) {
		AuthenticationServices.allUsers = allUsers;
	}

	public static Long getId() {
		return id;
	}

	public static void setId(Long id) {
		AuthenticationServices.id = id;
	}
	
	public Users authenticateUser(String email,String password,boolean isAdmin)
	{
		if(isAdmin==true) //check in Admin table
		{
			return null;
		}
		else //check in students table
		{
			for (Users user : allUsers) 
			{
				if(user.getEmail().equals(email) && user.getPassword().equals(password))
				{
					System.out.println(user.getMobileNumber());
					return user;
				}
				
			}
			return null;
		}
		
	}
	
	//For updating and adding users
	
	public Users save(Users userInfo)
	{
		if(userInfo.getId()==-1 || userInfo.getId()==0) //Signup user
		{
			userInfo.setId(++id);
			allUsers.add(userInfo);
			
			
		}
		else //update user
		{
			
		}
		return userInfo;
	}
	
	public Users findUserById(Long id)
	{
		for (Users users : allUsers) {
			
			if(users.getId()==id)
			{
				return users;
			}
			
		}
		return null;
	}

}
