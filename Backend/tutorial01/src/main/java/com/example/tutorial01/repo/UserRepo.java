package com.example.tutorial01.repo;

import com.example.tutorial01.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepo extends JpaRepository<User,Integer>{
}
