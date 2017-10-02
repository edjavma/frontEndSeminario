<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<%@ page isELIgnored="false" %>
<title>Cambiar Password</title>

	<link rel="stylesheet" href="css/bootstrap/css/bootstrap.min.css">
	<link rel="stylesheet" href="css/style-login.css">
	<style type="text/css">
	.error {
	padding: 15px;
	margin-bottom: 20px;
	border: 1px solid transparent;
	border-radius: 4px;
	color: #a94442;
	background-color: #f2dede;
	border-color: #ebccd1;
}

.msg {
	padding: 15px;
	margin-bottom: 20px;
	border: 1px solid transparent;
	border-radius: 4px;
	color: #31708f;
	background-color: #d9edf7;
	border-color: #bce8f1;
}
	</style>  
</head>
<body>

 	<div class="container" >
    <div class="row">
        <div class="col-md-12">
            <div class="wrap">
                <p class="form-title">
                    Cambiar Contraseña</p>   
                    
                 <c:if test="${not empty error}">
					<div class="error">${error}</div>
				</c:if>      
                <form class="login" name='loginForm'
		  action="<c:url value='/password' />" method='POST'>
                <input type="password" placeholder="Password Anterior" name='lastpassword' required/>
                <input type="password" placeholder="Password Nuevo" name='newpassword' required/>
                <input type="password" placeholder="Confirmar Password" name='confirmpassword' required/>
                <input name="submit" type="submit" value="Cambiar" class="btn btn-success btn-sm" />
                </form>
            </div>
        </div>
    </div>
</div>

	<script src="js/jquery/jquery-1.11.1.min.js"></script>
    <script src="css/bootstrap/js/bootstrap.min.js"></script>
</body>
</html>