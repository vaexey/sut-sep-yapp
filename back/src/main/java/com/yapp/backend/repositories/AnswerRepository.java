package com.yapp.backend.repositories;

import com.yapp.backend.model.Answer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface AnswerRepository extends JpaRepository<Answer, Long> {
}
