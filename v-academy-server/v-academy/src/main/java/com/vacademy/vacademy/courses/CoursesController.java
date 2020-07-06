package com.vacademy.vacademy.courses;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.vacademy.vacademy.dbModels.Courses;

import java.util.*;

@RestController
@CrossOrigin(origins= {"http://localhost:4200"})
public class CoursesController 
{
	@Autowired
	CoursesService coursesService;
	
	//Retrieve All Courses
	@GetMapping("/courses/allcourses")
	public List<Courses> getAllCourses()
	{
		return coursesService.getAllCourses();
	}

}
