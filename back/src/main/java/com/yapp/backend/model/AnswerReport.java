package com.yapp.backend.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "answer_reports")
public class AnswerReport {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private long id;

    // attributes
    private String reason;
    private boolean isReasonable;

    // relations
    @ManyToOne
    @JoinColumn(name = "answer_id")
    private Answer answer;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;
}
