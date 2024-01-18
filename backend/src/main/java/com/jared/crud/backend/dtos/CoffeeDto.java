package com.jared.crud.backend.dtos;

import jakarta.validation.constraints.NotNull;
import lombok.*;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class CoffeeDto {
    private Long id;

    @NotNull
    private String shop;
    @NotNull
    private String type;
    @NotNull
    private double price;
    @NotNull
    private double rating;
}
