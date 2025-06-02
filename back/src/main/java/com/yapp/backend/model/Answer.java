package com.yapp.backend.model;

import jakarta.persistence.*;
import lombok.Data;

import java.util.ArrayList;
import java.util.List;

@Entity
@Data
@Table(name = "answers")
public class Answer {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;
    // attributes
    private String content;
    @Column(nullable = false)
    private boolean isBanned = false;
    @Column(nullable = false)
    private boolean isVisible = true;

    // relations
    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToOne
    @JoinColumn(name = "parent_id")
    private Answer parent;

    @OneToMany(mappedBy = "parent", cascade = CascadeType.ALL)
    private List<Answer> children = new ArrayList<>();

    @OneToMany(mappedBy = "answer")
    private List<AnswerReport> answerReports;

    @ManyToOne
    @JoinColumn(name = "question_id")
    private Question question;
}
