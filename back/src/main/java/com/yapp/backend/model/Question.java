package com.yapp.backend.model;

import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

@Entity
@Data
@Table(name = "questions")
public class Question {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;

    // attributes
    private String content;
    @Column(nullable = false)
    private boolean isVisible = true;
    @Column(nullable = false)
    private boolean isBanned = false;

    // relations
    @OneToMany(mappedBy = "question")
    private List<Answer> answers;

    @OneToMany(mappedBy = "question")
    private List<QuestionReport> questionReports;

    @OneToMany(mappedBy = "question")
    private List<QuestionLike> questionLikes;

    @OneToMany(mappedBy = "question")
    private List<QuestionAuthor> questionAuthors;
}

