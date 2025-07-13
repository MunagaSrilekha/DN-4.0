package com.cognizant.springlearn.service;

import java.util.HashMap;
import java.util.Map;

import org.springframework.stereotype.Service;

import com.cognizant.springlearn.model.Country;

@Service
public class CountryService {
    private static final Map<String, Country> countryMap = new HashMap<>();

    static {
        countryMap.put("IN", new Country("IN", "India"));
        countryMap.put("US", new Country("US", "United States"));
        // Add more countries as needed
    }

    public Country getCountry(String code) {
        return countryMap.get(code.toUpperCase());
    }
}
