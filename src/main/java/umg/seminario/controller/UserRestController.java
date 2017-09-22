package umg.seminario.controller;

import javax.ws.rs.core.Response;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import umg.seminario.model.Users;
import umg.seminario.service.UsersService;

@RestController
public class UserRestController {
	
	@Autowired
	UsersService userService;
	
	@RequestMapping(value = "/user", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public Users findUser(){
		try {
			String usuario = SecurityContextHolder.getContext().getAuthentication().getName();
			
			Users user = userService.findUserByName(usuario);
			
			return user;
			
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}

}
