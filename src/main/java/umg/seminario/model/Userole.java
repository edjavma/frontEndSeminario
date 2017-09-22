package umg.seminario.model;

import javax.persistence.Column;
import javax.persistence.ColumnResult;
import javax.persistence.ConstructorResult;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.NamedNativeQueries;
import javax.persistence.NamedNativeQuery;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.SqlResultSetMapping;
import javax.persistence.SqlResultSetMappings;
import javax.persistence.Table;

@Entity
@NamedQueries({
				@NamedQuery(name = "Userole.findRolesByUsername",
				query = "SELECT r FROM Userole r INNER JOIN r.username u WHERE UPPER(u.username) = UPPER(:username) ")
})
@NamedNativeQueries({
	@NamedNativeQuery(name = "Userole.NativeQuery",
					  query = "SELECT r.codigo_rol, "+
							  "r.descripcion "+
							  "FROM rol r "+
							  "INNER JOIN userole u "+
							  "ON u.codigo_rol = r.codigo_rol "+
							  "WHERE UPPER(u.username) = UPPER(?) ",
					  resultSetMapping = "ResultsRol")
})
@SqlResultSetMappings({
	@SqlResultSetMapping(name="ResultsRol",
			classes = {
			    @ConstructorResult(
			    		targetClass = Rol.class,
			            columns = {
			    			@ColumnResult(name = "codigo_rol", type = Integer.class),
			                @ColumnResult(name = "descripcion", type = String.class)
			            })			    		
			    
			})
})

@Table(name = "userole")
public class Userole {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "id_correlativo")
	private Integer idCorrelativo;
	
	@ManyToOne
	@JoinColumn(name = "codigo_rol")
	private Rol codigoRol;
	
	@ManyToOne
	@JoinColumn(name = "username")
	private Users username;

	public Integer getIdCorrelativo() {
		return idCorrelativo;
	}

	public void setIdCorrelativo(Integer idCorrelativo) {
		this.idCorrelativo = idCorrelativo;
	}

	public Rol getCodigoRol() {
		return codigoRol;
	}

	public void setCodigoRol(Rol codigoRol) {
		this.codigoRol = codigoRol;
	}

	public Users getUsername() {
		return username;
	}

	public void setUsername(Users username) {
		this.username = username;
	}
	
	
	
	
}
