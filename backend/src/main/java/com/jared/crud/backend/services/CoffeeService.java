package com.jared.crud.backend.services;

import com.jared.crud.backend.dtos.CoffeeDto;
import com.jared.crud.backend.entities.Coffee;
import com.jared.crud.backend.exceptions.AppException;
import com.jared.crud.backend.mappers.CoffeeMapper;
import com.jared.crud.backend.repositories.CoffeeRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Arrays;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class CoffeeService {
    private final CoffeeRepository coffeeRepository;
    private final CoffeeMapper coffeeMapper;

    public List<CoffeeDto> allCoffees() {
        List<Coffee> all = coffeeRepository.findAll();
        return coffeeMapper.toCoffeeDtos(all);
    }

    public CoffeeDto getCoffee(Long id) {
        Coffee coffee = coffeeRepository.findById(id)
                .orElseThrow(() -> new AppException("Coffee not found", HttpStatus.NOT_FOUND));
        return coffeeMapper.toCoffeeDto(coffee);
    }

    public CoffeeDto createCoffee(CoffeeDto coffeeDto) {
        Coffee coffee = coffeeMapper.toCoffee(coffeeDto);
        Coffee createdCoffee = coffeeRepository.save(coffee);
        return coffeeMapper.toCoffeeDto(createdCoffee);
    }

    public CoffeeDto deleteCoffee(Long id) {
        Coffee coffee = coffeeRepository.findById(id)
                .orElseThrow(() -> new AppException("Coffee Not Found", HttpStatus.NOT_FOUND));

        coffeeRepository.deleteById(id);

        return coffeeMapper.toCoffeeDto(coffee);
    }

    public CoffeeDto updateCoffee(Long id, CoffeeDto coffeeDto) {
        Coffee coffee = coffeeRepository.findById(id)
                .orElseThrow(() -> new AppException("Coffee Not Found", HttpStatus.NOT_FOUND));
        coffeeMapper.updateCoffee(coffee, coffeeMapper.toCoffee(coffeeDto));
        Coffee updatedCoffee = coffeeRepository.save(coffee);
        return coffeeMapper.toCoffeeDto(updatedCoffee);
    }
}
