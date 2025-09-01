package com.srdanovic.dentalclinic.backendapi.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.sql.Array;
import java.util.ArrayList;
import java.util.List;

@RestController
public class Users {

    @GetMapping("/users")
    public static List<String> GetUsers(){
        String user = "Test";
        String user2 = "Test";
        String user3 = "Test";
        List<String> list = new ArrayList<>();

        list.add(user);
        list.add(user2);
        list.add(user3);

        return list;
    }
}
