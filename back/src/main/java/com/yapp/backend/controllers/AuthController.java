package com.yapp.backend.controllers;

import com.yapp.backend.dto.AuthRequest;
import com.yapp.backend.dto.AuthResponse;
import com.yapp.backend.security.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.security.authentication.*;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;


@RestController
@RequestMapping("/auth")
public class AuthController {
    @Autowired
    private AuthenticationManager authManager;

    @Autowired
    private JwtUtil jwtUtil;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody AuthRequest req) {
        try {
            authManager.authenticate(
                    new UsernamePasswordAuthenticationToken(req.getUsername(), req.getPassword())
            );
        } catch(BadCredentialsException e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("");
        }
        String token = jwtUtil.generateToken(req.getUsername());
        return ResponseEntity.ok(new AuthResponse(token));
    }
}
