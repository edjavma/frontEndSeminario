package umg.seminario.dao;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;
import javax.transaction.Transactional;

import org.springframework.stereotype.Repository;

import umg.seminario.model.Rol;
import umg.seminario.model.Userole;
import umg.seminario.model.Users;

public interface UsersDao {
	public Users findUserByName(String username); 
	public List<Rol> findRolesById(String username);
}

@Repository
@Transactional
class UsersDaoImpl implements UsersDao {

	@PersistenceContext
	EntityManager entityManager;

	@Override
	public Users findUserByName(String username) {
		try {
			TypedQuery<Users> query = entityManager
					.createNamedQuery("Users.findByUsername", Users.class);
			query.setParameter("username", username);
			return query.getSingleResult();
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}

	@Override
	public List<Rol> findRolesById(String username) {
		try {
			System.out.println(username);
			TypedQuery<Rol> query = entityManager
					.createNamedQuery("Userole.NativeQuery", Rol.class);
			query.setParameter(1, username);
			return query.getResultList();
		} catch (Exception e) {
			e.printStackTrace();
			return new ArrayList<Rol>();
		}
	}
	
}
