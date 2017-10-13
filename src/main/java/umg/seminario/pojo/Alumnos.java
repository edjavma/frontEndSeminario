package umg.seminario.pojo;

public class Alumnos {
	
	private String nombres;
	private String apellidos;
	private String correo;
	private String carnet;
	private boolean pagado;
	
	public Alumnos() {
		// TODO Auto-generated constructor stub
	}

	public Alumnos(String nombres, String apellidos, String correo,
			String carnet, boolean pagado) {
		super();
		this.nombres = nombres;
		this.apellidos = apellidos;
		this.correo = correo;
		this.carnet = carnet;
		this.pagado = pagado;
	}

	public String getNombres() {
		return nombres;
	}

	public void setNombres(String nombres) {
		this.nombres = nombres;
	}

	public String getApellidos() {
		return apellidos;
	}

	public void setApellidos(String apellidos) {
		this.apellidos = apellidos;
	}

	public String getCorreo() {
		return correo;
	}

	public void setCorreo(String correo) {
		this.correo = correo;
	}

	public String getCarnet() {
		return carnet;
	}

	public void setCarnet(String carnet) {
		this.carnet = carnet;
	}

	public boolean isPagado() {
		return pagado;
	}

	public void setPagado(boolean pagado) {
		this.pagado = pagado;
	}
	
	

}
