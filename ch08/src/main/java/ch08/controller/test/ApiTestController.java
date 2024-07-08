package ch08.controller.test;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/test") //ch08/test로 들어오는 요청
public class ApiTestController {
	
	@RequestMapping("/text")
	public String text() {
		return "text";
	}

}
