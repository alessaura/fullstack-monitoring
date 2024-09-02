package com.ale.braxxy.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.ale.braxxy.model.User;

public interface UserRepository extends JpaRepository<User, Long> {

    User findByEmail(String email);
}
