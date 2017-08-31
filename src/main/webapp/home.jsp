<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ taglib uri = "http://java.sun.com/jsp/jstl/core" prefix = "c" %>
<!DOCTYPE HTML>
<html>
<head>
<title>Home</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<script type="application/x-javascript"> addEventListener("load", function() { setTimeout(hideURLbar, 0); }, false); function hideURLbar(){ window.scrollTo(0,1); } </script>
 <!-- Bootstrap Core CSS -->
<link rel="stylesheet" href="<c:url value='css/bootstrap/css/bootstrap.min.css' />">
<!-- Custom CSS -->
<link rel="stylesheet" href="<c:url value='css/style.css' />">  
<!-- Graph CSS -->
<link rel="stylesheet" href="<c:url value='css/font-awesome.css'/>" > 
<!-- jQuery -->
<!-- lined-icons -->
<link rel="stylesheet" type='text/css' href="<c:url value='css/icon-font.min.css'/>"  />
<!-- //lined-icons -->
<!-- chart -->
<script src="<c:url value='js/Chart.js'/>"></script>
<!-- //chart -->
<!--animate-->
<link rel="stylesheet" type="text/css" media="all" href="<c:url value='css/animate.css'/>" >

<!--//end-animate-->
<!---//webfonts---> 
 <!-- Meters graphs -->
<script src="<c:url value='js/jquery-1.10.2.min.js' />" ></script>
<!-- Placed js at the end of the document so the pages load faster -->

</head> 
   
 <body class="sticky-header left-side-collapsed" >
    <section>
    <!-- left side start-->
		<div class="left-side sticky-left-side">

			<!--logo and iconic logo start-->
			<div class="logo">
				<h1><a style="cursor:pointer;">UMG <span>2017</span></a></h1>
			</div>
			<div class="logo-icon text-center">
				<a href="index.html"><i class="lnr lnr-home"></i> </a>
			</div>

			<!--logo and iconic logo end-->
			<div class="left-side-inner">

				<!--sidebar nav start-->
					<ul class="nav nav-pills nav-stacked custom-nav">
						<li class="menu-list">
							<a href="#"><i class="lnr lnr-cog"></i>
								<span>Tesoreria</span></a>
								<ul class="sub-menu-list">
									<li><a href="ingresos.html" target="iframe_a">Ingresos</a> </li>
									<li><a href="egresos.html" target="iframe_a">Egresos</a></li>
								</ul>
						</li>             
						<li class="menu-list"><a href="#"><i class="lnr lnr-envelope"></i> <span>Alumnos</span></a>
							<ul class="sub-menu-list">
								<li><a href="app/views/ingresos.html">Ingreso</a> </li>
								<li><a href="compose-mail.html">Busqueda</a></li>
							</ul>
						</li>      						
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
							<li class="dropdown">
								<a href="#" class="dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i class="fa fa-envelope"></i><span class="badge">3</span></a>
									
										<ul class="dropdown-menu">
											<li>
												<div class="notification_header">
													<h3>You have 3 new messages</h3>
												</div>
											</li>
											<li><a href="#">
											   <div class="user_img"><img src="<c:url value='images/1.png'/>" alt=""></div>
											   <div class="notification_desc">
												<p>Lorem ipsum dolor sit amet</p>
												<p><span>1 hour ago</span></p>
												</div>
											   <div class="clearfix"></div>	
											 </a></li>
											 <li class="odd"><a href="#">
												<div class="user_img"><img src="<c:url value='images/1.png'/>" alt=""></div>
											   <div class="notification_desc">
												<p>Lorem ipsum dolor sit amet </p>
												<p><span>1 hour ago</span></p>
												</div>
											  <div class="clearfix"></div>	
											 </a></li>
											<li><a href="#">
											   <div class="user_img"><img  alt="" src="<c:url value='images/1.png' />"></div>
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
							</li>
								
							   							   		
							<div class="clearfix"></div>	
						</ul>
					</div>
					<div class="profile_details">		
						<ul>
							<li class="dropdown profile_details_drop">
								<a href="#" class="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
									<div class="profile_img">	
										 <div class="user-name">
											<p>Michael<span>Administrator</span></p>
										 </div>
										 <i class="lnr lnr-chevron-down"></i>
										 <i class="lnr lnr-chevron-up"></i>
										<div class="clearfix"></div>	
									</div>	
								</a>
								<ul class="dropdown-menu drp-mnu">
									<li> <a href="sign-up.html"><i class="fa fa-sign-out"></i> Logout</a> </li>
								</ul>
							</li>
							<div class="clearfix"> </div>
						</ul>
					</div>		        	
					<div class="clearfix"></div>
				</div>
			  </div>
			<!--notification menu end -->
			</div>
		<!-- //header-ends -->
			<iframe src="demo_iframe.htm" name="iframe_a" width="100%" ></iframe>
			<!-- <div id="page-wrapper">
				<div class="graphs">
					<div class="col_3">
						<div class="col-md-3 widget widget1">
							<div class="r3_counter_box">
								<i class="fa fa-mail-forward"></i>
								<div class="stats">
								  <h5>45 <span>%</span></h5>
								  <div class="grow">
									<p>Growth</p>
								  </div>
								</div>
							</div>
						</div>
						<div class="col-md-3 widget widget1">
							<div class="r3_counter_box">
								<i class="fa fa-users"></i>
								<div class="stats">
								  <h5>50 <span>%</span></h5>
								  <div class="grow grow1">
									<p>New Users</p>
								  </div>
								</div>
							</div>
						</div>
						<div class="col-md-3 widget widget1">
							<div class="r3_counter_box">
								<i class="fa fa-eye"></i>
								<div class="stats">
								  <h5>70 <span>%</span></h5>
								  <div class="grow grow3">
									<p>Visitors</p>
								  </div>
								</div>
							</div>
						 </div>
						 <div class="col-md-3 widget">
							<div class="r3_counter_box">
								<i class="fa fa-usd"></i>
								<div class="stats">
								  <h5>70 <span>%</span></h5>
								  <div class="grow grow2">
									<p>Profit</p>
								  </div>
								</div>
							</div>
						</div>
						<div class="clearfix"> </div>
					</div>

		
		<!-- //switches -->
	
				</div>
			<!--body wrapper start-->
			</div>-->
			 <!--body wrapper end-->
		</div>
        <!--footer section end-->

      <!-- main content end-->
   </section>
  
<script src="<c:url value='js/jquery.nicescroll.js'/> " ></script>
<script src="<c:url value='js/scripts.js'/> " ></script>
<!-- Bootstrap Core JavaScript -->
   <script src="<c:url value='css/bootstrap/js/bootstrap.min.js' /> " ></script>
</body>
</html>