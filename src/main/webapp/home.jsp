<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
 <%@ taglib prefix="sec" uri="http://www.springframework.org/security/tags" %>
<%@page session="true"%>
<!DOCTYPE HTML>
<html ng-app="appIngre">
<head>
<title>Home</title>
 <meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<script type="application/x-javascript"> addEventListener("load", function() { setTimeout(hideURLbar, 0); }, false); function hideURLbar(){ window.scrollTo(0,1); } </script>
 <!-- Bootstrap Core CSS -->
<link rel="stylesheet" href="css/bootstrap/css/bootstrap.min.css">
<!-- Custom CSS -->
<link rel="stylesheet" href="css/style.css">  
<!-- Graph CSS -->
<link rel="stylesheet" href="css/font-awesome.css" > 
<!-- jQuery -->
<!-- lined-icons -->
<link rel="stylesheet" type='text/css' href="css/icon-font.min.css"  />
<!-- //lined-icons -->
<!-- chart -->
<script src="js/Chart.js"></script>
<!-- //chart -->
<!--animate-->
<link rel="stylesheet" type="text/css" media="all" href="css/animate.css" >
<link rel="stylesheet" href="vendor/angular-datatables/css/angular-datatables.min.css">
<link rel="stylesheet" type="text/css" href="css/dataTables.bootstrap.min.css" >
<!--//end-animate-->
<!---//webfonts---> 
 <!-- Meters graphs -->
<script src="js/jquery-1.10.2.min.js" ></script>
<!-- Placed js at the end of the document so the pages load faster -->
<style type="text/css">
  .editable-table > tbody > tr > td {
        padding: 4px
      }
      .editable-text {
        padding-left: 4px;
        padding-top: 4px;
        padding-bottom: 4px;
        display: inline-block;
      }
      .editable-table tbody > tr > td > .controls {
        //width: 100%
      }
      .editable-input {
        padding-left: 3px;
      }
      .editable-input.input-sm {
        height: 30px;
        font-size: 14px;
        padding-top: 4px;
        padding-bottom: 4px;
      }
      h3 img {
    max-height: 50px;
}
#map { 
    height: 400px;
    margin: 20px 0;
    border-radius: 5px;
    border: 1px solid silver;
}
.green {
	
	background-color: #94da94;
	color:white;
	font-weight: bold;
}

</style>
</head> 
<!--<body  class="sticky-header left-side-collapsed" ng-controller="bodyController">-->
<body data-ng-app="appIngre">
    <section>
    <!-- left side start-->
		<div class="left-side sticky-left-side">

			<!--logo and iconic logo start-->
			<div class="logo">
				<h1><a style="cursor:pointer;">UMG <span>2017</span></a></h1>
			</div>
			<div class="logo-icon text-center">
				<a href="welcome"><i class="lnr lnr-home"></i> </a>
			</div>

			<!--logo and iconic logo end-->
			<div class="left-side-inner">

				<!--sidebar nav start-->
					<ul class="nav nav-pills nav-stacked custom-nav">
						
						<sec:authorize access="hasRole('ROLE_ADMIN') or hasRole('ROLE_TESORERIA')">
						<li class="menu-list">
							<a href="#"><i class="lnr lnr-cog"></i>
								<span>Tesoreria</span></a>
								<ul class="sub-menu-list">
									<li><a href="#/ingresos" >Ingresos</a> </li>
									<li><a href="#/egresos" >Egresos</a></li>
								</ul>
						</li>             
						</sec:authorize>
						<sec:authorize access="hasRole('ROLE_ADMIN') or hasRole('ROLE_VENTA')">
						<li class="menu-list"><a href="#"><i class="lnr lnr-envelope"></i> <span>Alumnos</span></a>
							<ul class="sub-menu-list">
								<li><a href="#/Alumnos">Ingresos</a> </li>
								
								<li><a href="#/registro" >Agregar Alumno</a></li>
								<!-- <li role="presentation"><a href="#/Tabla">Tabla</a></li> -->
								
							</ul>
						</li>
						</sec:authorize>
						<sec:authorize access="hasRole('ROLE_ADMIN')"> 
						<li class="menu-list">
							<a href="#"><i class="lnr lnr-cog"></i>
								<span>Usuarios</span></a>
								<ul class="sub-menu-list">
									<li><a href="#/usuario" >crear Usuario</a> </li>
								</ul>
						</li>
						</sec:authorize>
						<sec:authorize access="hasRole('ROLE_ALUMNO')">
						<li class="menu-list">
							<a href="#"><i class="lnr lnr-cog"></i>
								<span>Mi información</span></a>
								<ul class="sub-menu-list">
									<li><a href="#/cursos" >Cursos</a> </li>
								</ul>
						</li>       						
						</sec:authorize>
						
						<sec:authorize access="hasRole('ROLE_CATEDRATICO')">
						<li class="menu-list">
							<a href="#"><i class="lnr lnr-cog"></i>
								<span>Catedratico</span></a>
								<ul class="sub-menu-list">
									<li><a href="#/cursos" >Cursos</a> </li>
									<li><a href="#/cursos" >Alumnnos</a> </li>
								</ul>
						</li>       						
						</sec:authorize>
					</ul>
				<!--sidebar nav end-->
			</div>
		</div>
		<!-- left side end-->

		<!-- main content start-->
		<div class="main-content">
			<!-- header-starts -->
			<div class="header-section">
			 
			<!--toggle button start-->
			<a class="toggle-btn  menu-collapsed"><i class="fa fa-bars"></i></a>
			<!--toggle button end-->

			<!--notification menu start -->
			<div class="menu-right">
				<div class="user-panel-top">  	
					<div class="profile_details_left">
						<ul class="nofitications-dropdown">
							<!--<li class="dropdown">
								<a href="#" class="dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i class="fa fa-envelope"></i><span class="badge">3</span></a>
									
										 <ul class="dropdown-menu">
											<li>
												<div class="notification_header">
													<h3>You have 3 new messages</h3>
												</div>
											</li>
											<li><a href="#">
											   <div class="user_img"><img src="images/1.png" alt=""></div>
											   <div class="notification_desc">
												<p>Lorem ipsum dolor sit amet</p>
												<p><span>1 hour ago</span></p>
												</div>
											   <div class="clearfix"></div>	
											 </a></li>
											 <li class="odd"><a href="#">
												<div class="user_img"><img src="images/1.png" alt=""></div>
											   <div class="notification_desc">
												<p>Lorem ipsum dolor sit amet </p>
												<p><span>1 hour ago</span></p>
												</div>
											  <div class="clearfix"></div>	
											 </a></li>
											<li><a href="#">
											   <div class="user_img"><img  alt="" src="images/1.png"></div>
											   <div class="notification_desc">
												<p>Lorem ipsum dolor sit amet </p>
												<p><span>1 hour ago</span></p>
												</div>
											   <div class="clearfix"></div>	
											</a></li>
											<li>
												<div class="notification_bottom">
													<a href="#">See all messages</a>
												</div> 
											</li>
										</ul>
							</li> -->
								
							   							   		
							<div class="clearfix"></div>	
						</ul>
					</div>
					<div class="profile_details">		
						<ul>
							<li class="dropdown profile_details_drop">
								<a href="#" class="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
									<div class="profile_img">	
										 <div class="user-name" ng-controller="homeController" ng-init="getUsername()">
											<p>{{username}}</p>
										 </div>
										 <i class="lnr lnr-chevron-down"></i>
										 <i class="lnr lnr-chevron-up"></i>
										<div class="clearfix"></div>	
									</div>	
								</a>
								<ul class="dropdown-menu drp-mnu">									
									<!-- <li> <a  href="#/passw"><i class="fa fa-sign-out"></i>Cambiar Password</a> </li> -->
									<li> <a href="javascript:formSubmit()"><i class="fa fa-sign-out"></i> Logout</a> </li>
								</ul>
							</li>
							<div class="clearfix"> </div>
						</ul>
						<form action="<c:url value='/login'/>" method="post" id="logoutForm">
							<input type="hidden" name="${_csrf.parameterName}"
								value="${_csrf.token}" />
						</form>
						
					</div>		        	
					<div class="clearfix"></div>
				</div>
			  </div>
			<!--notification menu end -->
			</div>
		  <div id="main">
        <!-- Content will be injected here -->
       <div ng-view></div>
       
    </div> 
				</div>
			<!--body wrapper start-->
			
			 <!--body wrapper end-->
			 
	
        <!--footer section end-->

      <!-- main content end-->
   </section>
  
 

<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyC-Kt1TTebzEMDrNITm3giuQWo-GvztWao&libraries=geometry,places"></script>
<script src="js/jquery.nicescroll.js " ></script>
<script src="js/scripts.js " ></script>
<!-- Bootstrap Core JavaScript -->
   <script src="css/bootstrap/js/bootstrap.min.js " ></script>
   <script type="text/javascript" src="js/angular.js"></script>
 <!--<script type="text/javascript" src="js/angular/angular.min.js"></script>-->
  <script type="text/javascript" src="js/angular/angular-animate.min.js"></script>
  <script type="text/javascript" src="js/angular/ng-table.min.js"></script>
   <script type="text/javascript" src="js/angular/lodash.min.js"></script>
  <script type="text/javascript" src="js/angular/angular-toastr.tpls.min.js"></script>
  <script type="text/javascript" src="js/angular-route.js"></script>
<script type="text/javascript" src="js/angular-resource.js"></script>

  <script type="text/javascript" src="js/ui-bootstrap-tpls.min.js"></script>
<script type="text/javascript" src="js/angular-ui-utils.min.js"></script>
<script type="text/javascript" src="js/angular/moment.js"></script>


  <script type="text/javascript" src="app/app2.js"></script>
  
  <!-- Controladores -->
  <script type="text/javascript" src="app/controllers/AlumnosController.js"></script>
  <script type="text/javascript" src="app/controllers/homeController.js"></script>
  <script type="text/javascript" src="app/controllers/tablaController.js"></script>
  <script type="text/javascript" src="app/controllers/ingresosController.js"></script>
  <script type="text/javascript" src="app/controllers/egresosController.js"></script>
  <script type="text/javascript" src="app/controllers/registroController.js"></script>
  <script type="text/javascript" src="app/controllers/mapController.js"></script>
   <script type="text/javascript" src="app/controllers/usuarioController.js"></script>
   <script type="text/javascript" src="app/controllers/passwordController.js"></script>
  
  <!-- Servicios -->
  <script type="text/javascript" src="app/services/AlumnosService.js"></script>
  <script type="text/javascript" src="app/services/ingresosService.js"></script>
  <script type="text/javascript" src="app/services/egresosService.js"></script>
  <script type="text/javascript" src="app/services/mapService.js"></script>
  <script type="text/javascript" src="app/services/usuarioService.js"></script>
  <script type="text/javascript" src="app/services/passwordService.js"></script>
  
  <!--  Directivas -->
   <script type="text/javascript" src="app/directives/trackedTable.js"></script>
  <script type="text/javascript" src="app/directives/trackedTableCell.js"></script>
  <script type="text/javascript" src="app/directives/trackedTableRow.js"></script>
  
  
  <script type="text/javascript" src="vendor/datatables/js/jquery.dataTables.min.js"></script>
  <script type="text/javascript" src="vendor/angular-datatables/angular-datatables.min.js"></script>

<script>
		function formSubmit() {
			document.getElementById("logoutForm").submit();
		}
	</script>
</body>
</html>