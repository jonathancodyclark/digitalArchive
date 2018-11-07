package controller;

import model.AppUsers;
import model.Artifacts;
import model.Exhibits;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.MailException;
import org.springframework.mail.MailSender;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSenderImpl;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.Properties;

/**
 * Created by dmarley on 15-09-15.
 */
@RestController
public class SendController {

    @Autowired
    private MailSender mailSender;

    private SimpleMailMessage templateMessage;

    @Value("${send.from.email}")
    private String fromEmail;

    private String toEmail;

    @RequestMapping(method = RequestMethod.POST, value="/send/{password}")
    public String send(Model model, @RequestBody AppUsers user, @PathVariable("password") String password) {
        System.out.println("Starting Send...");
        JavaMailSenderImpl temp = new JavaMailSenderImpl();
        Properties prop = temp.getJavaMailProperties();
        prop.put("mail.smtp.starttls.enable", "true");
        String response = "OK";
        toEmail = user.getUseremail();
        this.templateMessage = new SimpleMailMessage();

        this.templateMessage.setSubject("Login Info for Sights & Sounds Black Cultural Arts Museum");
        this.templateMessage.setFrom("jieprojecttest@gmail.com");
        this.templateMessage.setTo(toEmail);

        SimpleMailMessage msg = new SimpleMailMessage(this.templateMessage);
        msg.setText("Please login at homepage of Sights and Sound mueseum with your email as the username, and the password " + password);

        try {
            this.mailSender.send(msg);
        } catch (MailException ex) {
            response = "NO_OK";
            System.err.println(ex.getMessage());
        }
        System.out.println("Finished Send...");
        return "Good Send";
    }
}
