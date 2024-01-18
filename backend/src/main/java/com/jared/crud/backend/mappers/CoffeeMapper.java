package com.jared.crud.backend.mappers;

import com.jared.crud.backend.dtos.CoffeeDto;
import com.jared.crud.backend.entities.Coffee;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface CoffeeMapper {
    Coffee toCoffee(CoffeeDto coffeeDto);
    CoffeeDto toCoffeeDto(Coffee coffee);

    List<CoffeeDto> toCoffeeDtos(List<Coffee> coffees);
}
