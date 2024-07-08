package ch08.initializer;

import javax.servlet.Filter;
import ch08.config.WebConfig;
import org.springframework.web.filter.CharacterEncodingFilter;
import org.springframework.web.servlet.support.AbstractAnnotationConfigDispatcherServletInitializer;
public class Ch08WebApplicationInitializer
    extends AbstractAnnotationConfigDispatcherServletInitializer {


  @Override
  // Root Application Context 초기화하 설정 클래스 
  protected Class<?>[] getRootConfigClasses() {
    return new Class<?>[] {}; //안만들어 -> 서비스/db 안만들 예정이므로 
  }

  @Override
  // Web Application Context 초기화하는 설정 클래스
  protected Class<?>[] getServletConfigClasses() {
    return new Class<?>[] {WebConfig.class};
  }

  @Override
  // Encoding Filter 설정하는 클래스
  // body로 들어오는 데이터 encoding하는 역할 
  protected Filter[] getServletFilters() {
    return new Filter[] {new CharacterEncodingFilter("UTF-8")};
  }

  @Override
  // DispatcherServlet 만들 때 매핑시킬 URL
  protected String[] getServletMappings() {
    return new String[] {"/"};
  }
}
