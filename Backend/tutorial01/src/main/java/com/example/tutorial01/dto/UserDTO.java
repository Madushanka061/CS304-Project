package com.example.tutorial01.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class UserDTO {
    private int role_id;
    private String username;
    private String address;
    private String role_type;
    private String password;

}
