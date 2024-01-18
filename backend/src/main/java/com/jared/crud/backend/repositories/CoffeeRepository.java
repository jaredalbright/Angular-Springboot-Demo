package com.jared.crud.backend.repositories;

import com.jared.crud.backend.entities.Coffee;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CoffeeRepository extends JpaRepository<Coffee, Long> {

}
