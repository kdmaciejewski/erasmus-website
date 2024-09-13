package com.example.erasmus.controllers;


import com.example.erasmus.entities.Card;
import com.example.erasmus.repositories.CardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/cards")
public class CardController {

    @Autowired
    private CardRepository cardRepository;

    @PostMapping
    public Card createCard(@RequestBody Card card) {
        return cardRepository.save(card);
    }

    @GetMapping
    public List<Card> getAllCards() {
        return cardRepository.findAll();
    }
}
