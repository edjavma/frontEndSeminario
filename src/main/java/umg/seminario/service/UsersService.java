package umg.seminario.service;

import java.util.ArrayList;
import java.util.List;

import javax.inject.Inject;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import umg.seminario.dao.UsersDao;
import umg.seminario.model.Rol;
import umg.seminario.model.Userole;
import umg.seminario.model.Users;

public interface UsersService {
	
	public Users findUserByName(String username); 
	public List<Rol> findRolesById(String username);
	
}

@Service
class UsersServiceImpl implements UsersService {
	
	@Inject
	UsersDao usersDao;

	@Override
	public Users findUserByName(String username) {
		try {
			return usersDao.findUserByName(username);
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}

	@Override
	public List<Rol> findRolesById(String username) {
		try {
			return usersDao.findRolesById(username);
		} catch (Exception e) {
			e.printStackTrace();
			return new ArrayList<Rol>();
		}
	}

}
