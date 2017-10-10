package umg.seminario.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.ws.rs.core.MultivaluedMap;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import umg.seminario.pojo.Password;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.sun.jersey.api.client.Client;
import com.sun.jersey.api.client.ClientHandlerException;
import com.sun.jersey.api.client.ClientResponse;
import com.sun.jersey.api.client.UniformInterfaceException;
import com.sun.jersey.api.client.WebResource;
import com.sun.jersey.core.util.MultivaluedMapImpl;

@Controller
public class HomeController {
		
		private static final String URI = "http://34.233.183.228:8080/seminario/confirmUser";
		private static final String POST_URI = "http://34.233.183.228:8080/seminario/changepassword";
	
		@RequestMapping(value = "/welcome", method = RequestMethod.GET)
		public ModelAndView welcome(){
			ModelAndView model = new ModelAndView();
			Authentication auth = SecurityContextHolder.getContext().getAuthentication();
			model.addObject("username",auth.getName());
			
			Client client = Client.create();
			WebResource resource = client.resource(URI);
			MultivaluedMap<String,String> queryParams = new MultivaluedMapImpl();
			   queryParams.add("username", auth.getName());
			
			String result = resource.queryParams(queryParams).get(String.class);
		
			if(result.equals("0")){
				model.setViewName("change");
			}else{
				model.setViewName("home");
			}
			
			return model;
		}
		
	
		@RequestMapping(value = "/login", method = RequestMethod.GET)
		public ModelAndView login(
			@RequestParam(value = "error", required = false) String error,
			@RequestParam(value = "logout", required = false) String logout) {

			ModelAndView model = new ModelAndView();
			if (error != null) {
				model.addObject("error", "Invalid username and password!");
			}

			if (logout != null) {
				model.addObject("msg", "You've been logged out successfully.");
			}
			model.setViewName("login");

			return model;

		}
		
		@RequestMapping(value = "/password", method = RequestMethod.POST)
		public ModelAndView change(HttpServletRequest request, HttpServletResponse response) throws UniformInterfaceException, ClientHandlerException, JsonProcessingException{
			ModelAndView model = new ModelAndView();
			Authentication auth = SecurityContextHolder.getContext().getAuthentication();
			Client client = Client.create();
			ObjectMapper mapper = new ObjectMapper();
			WebResource resource = client.resource(POST_URI);
			Password pass = new Password(request.getParameter("lastpassword"),request.getParameter("confirmpassword"),
					request.getParameter("newpassword"),auth.getName());
			ClientResponse clientResponse = resource.accept("application/json")
	                .type("application/json").post(ClientResponse.class,mapper.writeValueAsString(pass));
		   int code = clientResponse.getStatus();
		   
		   if(code == 200){
			   model = welcome();
		   }else{
			  
			   model.setViewName("change");
			   model.addObject("error", "Ocurrio un error al guardar");
		   }
		   
			return model;
		}

}
