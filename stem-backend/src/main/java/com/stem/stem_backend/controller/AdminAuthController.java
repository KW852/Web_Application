package com.stem.stem_backend.controller;

import com.stem.stem_backend.model.Admin;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/stem/admin")
@CrossOrigin(origins = "http://localhost:3000")
public class AdminAuthController {

    private static final String SECRET_KEY = "z8N3nD9fKp2Lq4Tx7Vv9z6Ys3cDf8gGh1jKl2pQr5tUv7wXy";

    @PostMapping("/login")
    public Map<String, String> login(@RequestBody Admin admin) {
        Map<String, String> response = new HashMap<>();

        if ("admin".equals(admin.getId()) && "1234".equals(admin.getPassword())) {
            String token = Jwts.builder()
                    .setSubject(admin.getId())
                    .setIssuedAt(new Date())
                    .setExpiration(new Date(System.currentTimeMillis() + 60 * 60 * 1000))
                    .signWith(SignatureAlgorithm.HS256, SECRET_KEY)
                    .compact();

            response.put("token", token);
        } else {
            response.put("error", "Invalid credentials");
        }

        return response;
    }
}
