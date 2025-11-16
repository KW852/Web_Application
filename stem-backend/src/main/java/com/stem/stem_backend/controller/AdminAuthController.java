package com.stem.stem_backend.controller;

import com.stem.stem_backend.model.Admin;
import com.stem.stem_backend.security.JwtService;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;
import java.util.Map;

@RestController
@RequestMapping("/stem/admin")
@CrossOrigin(origins = "http://localhost:3000")
public class AdminAuthController {

    private final JwtService jwt;

    public AdminAuthController(JwtService jwt) {
        this.jwt = jwt;
    }

    @PostMapping("/login")
    public Map<String, String> login(@RequestBody Admin admin) {

        if ("admin".equals(admin.getId()) && "1234".equals(admin.getPassword())) {
            String token = jwt.generateToken(admin.getId());
            return Map.of("token", token);
        }

        throw new ResponseStatusException(HttpStatus.UNAUTHORIZED, "Invalid credentials");
    }
}
