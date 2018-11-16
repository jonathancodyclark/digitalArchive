package security;

import model.JwtAuthenticationToken;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.AbstractAuthenticationProcessingFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class JwtAuthenticationTokenFilter extends AbstractAuthenticationProcessingFilter {

    /*
    As a way of following standards, we construct our token filter by requiring authentication
    for all 'rest' urls
    */
    public JwtAuthenticationTokenFilter() {
        super("/rest/**");
    }

    /*
    This is where we receive the HTTP request of the token and direct this token
    to our AuthenticationManager (JWTAuthenticationProvider) to be authenticated
    */
    @Override
    public Authentication attemptAuthentication(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse) throws AuthenticationException, IOException, ServletException {
        String header = httpServletRequest.getHeader("Authorization");
        if (header == null) {
            throw new RuntimeException("JWT Token is missing");
        }

        String authenticationToken = header;
        JwtAuthenticationToken token = new JwtAuthenticationToken(authenticationToken);
        return getAuthenticationManager().authenticate(token);
    }


    /*
    We resolve successful authentication by pointing to the implementation of the inherited
    AbstractAuthenticationProcessingFilter which is embedded in Spring and does operations
    on our console for logging steps in our authentication
    */
    @Override
    protected void successfulAuthentication(HttpServletRequest request, HttpServletResponse response, FilterChain chain, Authentication authResult) throws IOException, ServletException {
        super.successfulAuthentication(request, response, chain, authResult);
        chain.doFilter(request, response);
    }

}
