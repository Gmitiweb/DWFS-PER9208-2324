package com.unir.calculatorapimongodb.model.request;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class DivisionRequest {
    private Double dividend;
    private Double divisor;
}
