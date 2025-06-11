package com.yapp.backend.controllers;

import com.yapp.backend.dto.AuthRequest;
import com.yapp.backend.dto.AuthResponse;
import com.yapp.backend.dto.SignUpRequest;
import com.yapp.backend.model.Role;
import com.yapp.backend.model.User;
import com.yapp.backend.repositories.RoleRepository;
import com.yapp.backend.security.JwtUtil;
import com.yapp.backend.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.security.authentication.*;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;

import java.util.Optional;


@RestController
@RequestMapping("/auth")
public class AuthController {


    @Autowired
    private UserRepository userRepository;

    @Autowired
    private RoleRepository roleRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private JwtUtil jwtUtil;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody AuthRequest req) {
        //TODO:
        //validate login and password

        Optional<User> mbyUser = userRepository.findByLogin(req.login());
        if(mbyUser.isEmpty()) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Bad credentials");
        }

        User user = mbyUser.get();

        if (!passwordEncoder.matches(req.password(), user.getPassword())) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Bad credentials");
        }

        String token = jwtUtil.generateToken(user.getLogin(), user.getRole().getName());
        return ResponseEntity.ok(new AuthResponse(token));
    }

    @PostMapping("/sign-up")
    public ResponseEntity<?> signup(@RequestBody SignUpRequest req) {
        if (userRepository.findByLogin(req.login()).isPresent()) {
            return ResponseEntity
                    .status(HttpStatus.BAD_REQUEST)
                    .body("Login already exists");
        }

        // TODO:
        // validate login and password

        String encodedPassword = passwordEncoder.encode(req.password());

        Role defaultRole = roleRepository.findByName("USER").get();

        User newUser = new User();
        newUser.setLogin(req.login());
        newUser.setPassword(encodedPassword);
        newUser.setDisplayName(req.login());
        newUser.setRole(defaultRole);

        userRepository.save(newUser);

        String token = jwtUtil.generateToken(req.login(), defaultRole.getName());
        return ResponseEntity.ok(new AuthResponse(token));
    }
}
