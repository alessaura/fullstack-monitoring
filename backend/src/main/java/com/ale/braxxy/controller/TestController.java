package com.ale.braxxy.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.sql.DataSource;
import java.sql.Connection;
import java.sql.SQLException;

@RestController
@RequestMapping("/test")
public class TestController {

    @Autowired
    private DataSource dataSource;

    @GetMapping("/db")
    public String testDatabase() {
        try (Connection connection = dataSource.getConnection()) {
            return "Conexão com o banco de dados estabelecida com sucesso!";
        } catch (SQLException e) {
            return "Erro ao conectar ao banco de dados: " + e.getMessage();
        }
    }
}
