package umg.seminario.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "rol")
public class Rol {

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	@Column(name = "codigo_rol")
	private Integer codigoRol;
	@Column(name="descripcion")
	private String descripcion;
	
	public Rol() {
		// TODO Auto-generated constructor stub
	}
	
	public Rol(Integer codigoRol, String descripcion) {
		this.codigoRol = codigoRol;
		this.descripcion = descripcion;
	}
	
	public Integer getCodigoRol() {
		return codigoRol;
	}
	public void setCodigoRol(Integer codigoRol) {
		this.codigoRol = codigoRol;
	}
	public String getDescripcion() {
		return descripcion;
	}
	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}
	
	
	
}
