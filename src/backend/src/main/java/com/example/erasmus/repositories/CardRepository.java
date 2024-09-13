package com.example.erasmus.repositories;


import com.example.erasmus.entities.Card;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CardRepository extends JpaRepository<Card, Long> {
}

