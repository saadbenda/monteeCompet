
package com.example.resource;

import model.User;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RequestMapping("/rest")
@RestController()
public class UserResource {

    @GetMapping(value = "/users", produces = "application/json")
    public User getUsers(){
    	System.out.println("I'm in getUsers");
        User u = new User();
        u.setName("Saad");
    	return u;
    }


}
