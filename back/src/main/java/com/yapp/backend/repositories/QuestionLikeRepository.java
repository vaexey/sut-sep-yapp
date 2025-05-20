package com.yapp.backend.repositories;

import com.yapp.backend.model.QuestionLike;
import org.springframework.data.jpa.repository.JpaRepository;

public interface QuestionLikeRepository extends JpaRepository<QuestionLike, Long> {
}
