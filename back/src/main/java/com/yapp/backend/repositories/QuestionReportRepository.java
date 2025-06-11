package com.yapp.backend.repositories;

import com.yapp.backend.model.QuestionReport;
import org.springframework.data.jpa.repository.JpaRepository;

public interface QuestionReportRepository extends JpaRepository<QuestionReport, Long> {
}
