package com.yapp.backend.model;

import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

@Entity
@Data
@Table(name = "roles")
public class Role {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;


    // attributes
    @Column(unique = true)
    private String name;

    // relations
    @OneToMany(mappedBy = "role")
    private List<User> users;
}
