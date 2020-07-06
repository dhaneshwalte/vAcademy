package com.vacademy.vacademy.courses;

import org.springframework.stereotype.Service;

import com.vacademy.vacademy.dbModels.Courses;

import java.util.*;


@Service
public class CoursesService {
	
	static List<Courses> allCourses;
	static Long id=0L;
	static 
	{
		allCourses=new ArrayList<Courses>();
		String imageUrl="https://code.org/shared/images/social-media/codeorg2019_social.png";
		allCourses.add(new Courses("Math","5",imageUrl,100L));
		allCourses.add(new Courses("FPL","5",imageUrl,100L));
		allCourses.add(new Courses("Web Technology","5",imageUrl,100L));
		allCourses.add(new Courses("Java in 20 days","5",imageUrl,100L));
	}
	
	public List<Courses> getAllCourses()
	{
		return allCourses;
	}
}
