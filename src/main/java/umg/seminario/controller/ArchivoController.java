package umg.seminario.controller;

import java.io.FileOutputStream;
import java.io.OutputStream;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.sun.jersey.api.client.Client;
import com.sun.jersey.api.client.ClientResponse;
import com.sun.jersey.api.client.WebResource;

import umg.seminario.pojo.Alumnos;
import umg.seminario.pojo.Password;
import umg.seminario.pojo.RequestObjectJson;

@Controller
public class ArchivoController {
	
	private static final String URI = "http://34.233.183.228:8080/seminario/catedratico/getAlumnos/";
	
	@RequestMapping(value = "/document", method = RequestMethod.POST)
	public void constructDocument(@RequestParam("idCurso") String idCurso, HttpServletRequest request, HttpServletResponse response){
		try {			
			response.setContentType("application/vnd.ms-excel");
	        response.setHeader("Content-disposition", "attachment; filename="+idCurso+"-alumnos.xlsx" );
	        
	        List<Alumnos> alumnos = new ArrayList<Alumnos>();
	        
	        Client client = Client.create();
			ObjectMapper mapper = new ObjectMapper();
			WebResource resource = client.resource(URI+idCurso);

			String value = resource.get(String.class);
			alumnos = mapper.readValue(value, mapper.getTypeFactory().constructCollectionType(List.class, Alumnos.class));
			
		  // int code = clientResponse.getStatus();
			
			
			XSSFWorkbook workbook = new XSSFWorkbook();
            XSSFSheet sheet = workbook.createSheet("Curso "+idCurso);
            Row header = sheet.createRow(0);
            header.createCell(0).setCellValue("Carnet");
            header.createCell(1).setCellValue("Nombres");
            header.createCell(2).setCellValue("Apellidos");
            header.createCell(3).setCellValue("Pagado");
            
            int rowNum = 1;
            
            for(Alumnos alumno: alumnos){
            	Row row  = sheet.createRow(rowNum++);
            	row.createCell(0).setCellValue(alumno.getCarnet());
            	row.createCell(1).setCellValue(alumno.getNombres());
            	row.createCell(2).setCellValue(alumno.getApellidos());
            	row.createCell(3).setCellValue(alumno.isPagado());
            }
            
            
            OutputStream out = response.getOutputStream();
			
            
            workbook.write(out);
            response.getOutputStream().flush();
		
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
	
	

}
