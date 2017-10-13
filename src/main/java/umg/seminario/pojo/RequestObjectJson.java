package umg.seminario.pojo;

import java.util.List;

public class RequestObjectJson {
	
	private List<Alumnos> data;
	
	public RequestObjectJson() {
		// TODO Auto-generated constructor stub
	}
	
	
	
	public RequestObjectJson(List<Alumnos> data) {
		super();
		this.data = data;
	}



	public List<Alumnos> getData() {
		return data;
	}
	
	public void setData(List<Alumnos> data) {
		this.data = data;
	}
}
