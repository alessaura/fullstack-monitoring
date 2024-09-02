package com.ale.braxxy.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.ale.braxxy.model.User;
import com.ale.braxxy.service.UserService;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "http://localhost:3000") 
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public ResponseEntity<String> registerUser(@RequestBody User user) {
        try {

            if (userService.findByEmail(user.getEmail()) != null) {
                return new ResponseEntity<>("Usuário já existe", HttpStatus.CONFLICT);
            }


            userService.registerNewUser(user.getEmail(), user.getPasswordHash());
            return new ResponseEntity<>("Usuário registrado com sucesso", HttpStatus.CREATED);
        } catch (Exception e) {

            e.printStackTrace(); 
            return new ResponseEntity<>("Erro ao registrar usuário", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("/login")
    public ResponseEntity<String> loginUser(@RequestBody User user) {
        User existingUser = userService.findByEmail(user.getEmail());
        if (existingUser != null && userService.checkPassword(existingUser, user.getPasswordHash())) {
            return new ResponseEntity<>("Sucesso ao logar", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Credenciais inválidas", HttpStatus.UNAUTHORIZED);
        }
    }

 
    @GetMapping("/{id}")
    public ResponseEntity<User> getUserById(@PathVariable Long id) {
        User user = userService.findById(id).orElse(null);
        if (user != null) {
            return new ResponseEntity<>(user, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }


    @PutMapping("/{id}")
    public ResponseEntity<User> updateUser(@PathVariable Long id, @RequestBody User userDetails) {
        User updatedUser = userService.updateUser(id, userDetails);
        if (updatedUser != null) {
            return new ResponseEntity<>(updatedUser, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }


    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable Long id) {
        if (userService.deleteUser(id)) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}