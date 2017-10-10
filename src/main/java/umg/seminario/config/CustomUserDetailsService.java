package umg.seminario.config;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import umg.seminario.model.Rol;
import umg.seminario.model.Userole;
import umg.seminario.model.Users;
import umg.seminario.service.UsersService;

@Service("customUserDetailsService")
public class CustomUserDetailsService implements UserDetailsService{

	@Autowired
	UsersService userService; 
	
	@Transactional(readOnly=true)
	public UserDetails loadUserByUsername(String username)
			throws UsernameNotFoundException {
		Users user = userService.findUserByName(username);
		if(user==null){
			throw new UsernameNotFoundException("Username not found");
		}
		return new org.springframework.security.core.userdetails.User(user.getUsername(), user.getPassword(), 
				 true, true, true, true, getGrantedAuthorities(user));
	}
	
	private List<GrantedAuthority> getGrantedAuthorities(Users user){
		List<GrantedAuthority> authorities = new ArrayList<GrantedAuthority>();
		List<Rol> roles = userService.findRolesById(user.getUsername());
		for(Rol rol:roles){
			authorities.add(new SimpleGrantedAuthority(rol.getDescripcion()));
		}
		return authorities;
	}

}
