package com.jared.crud.backend.controllers;

import com.jared.crud.backend.dtos.CoffeeDto;
import com.jared.crud.backend.services.CoffeeService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;

@RequiredArgsConstructor
@RestController
public class CoffeeController {

    private final CoffeeService coffeeService;

    @GetMapping("/coffees")
    public ResponseEntity<List<CoffeeDto>> allCoffees() {
        return ResponseEntity.ok(coffeeService.allCoffees());
    }

    @GetMapping("/coffees/{id}")
    public ResponseEntity<CoffeeDto> getCoffee(@PathVariable Long id) {
        return ResponseEntity.ok(coffeeService.getCoffee(id));
    }

    @PostMapping("/coffees")
    public ResponseEntity<CoffeeDto> createCoffee(@Valid @RequestBody CoffeeDto coffeeDto) {
        CoffeeDto createdCoffee = coffeeService.createCoffee(coffeeDto);
        return ResponseEntity.created(URI.create("/coffees/" + createdCoffee.getId())).body(createdCoffee);
    }

    @DeleteMapping("/coffees/{id}")
    public ResponseEntity<CoffeeDto> delete(@PathVariable Long id) {
        return ResponseEntity.ok(coffeeService.deleteCoffee(id));
    }

    @PutMapping("/coffees/{id}")
    public ResponseEntity<CoffeeDto> updateCoffee(@PathVariable Long id, @Valid @RequestBody CoffeeDto coffeeDto) {
        return ResponseEntity.ok(coffeeService.updateCoffee(id, coffeeDto));
    }
}
