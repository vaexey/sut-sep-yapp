package com.yapp.backend.model;

import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

@Entity
@Data
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;

    // attributes
    @Column(unique = true)
    private String login;
    private String password;
    @Column(unique = true)
    private String displayName;

    // relations
    @ManyToOne
    @JoinColumn(name = "role_id")
    private Role role;

    @OneToMany(mappedBy = "user")
    private List<Answer> answers;

    @OneToMany(mappedBy = "user")
    private List<AnswerReport> answerReports;

    @OneToMany(mappedBy = "user")
    private List<QuestionReport> questionReports;

    @OneToMany(mappedBy = "user")
    private List<QuestionLike> questionLikes;

    @OneToMany(mappedBy = "user")
    private List<QuestionAuthor> questionAuthors;
}
