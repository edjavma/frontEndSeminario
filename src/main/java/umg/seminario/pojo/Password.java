package umg.seminario.pojo;

public class Password {
	
	private String actualpass;
	private String confirmpass;
	private String newpass;
	private String user;
	
	public Password() {
		// TODO Auto-generated constructor stub
	}
	
	

	public Password(String actualpass, String confirmpass, String newpass,
			String user) {
		super();
		this.actualpass = actualpass;
		this.confirmpass = confirmpass;
		this.newpass = newpass;
		this.user = user;
	}



	public String getActualpass() {
		return actualpass;
	}

	public void setActualpass(String actualpass) {
		this.actualpass = actualpass;
	}

	public String getConfirmpass() {
		return confirmpass;
	}

	public void setConfirmpass(String confirmpass) {
		this.confirmpass = confirmpass;
	}

	public String getNewpass() {
		return newpass;
	}

	public void setNewpass(String newpass) {
		this.newpass = newpass;
	}

	public String getUser() {
		return user;
	}

	public void setUser(String user) {
		this.user = user;
	}
	
	

}
