package com.example.backend;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin(origins = "http://localhost:3000/")
public class Controller {

    @GetMapping("/level1/{num1}/level2/{num2}/level3/{num3}")
    public ResponseEntity<?> getNumbers(@PathVariable Integer num1, @PathVariable Integer num2, @PathVariable Integer num3){
        List<Integer> list = new ArrayList<>();
        list.add(num1);
        list.add(num2);
        list.add(num3);
        Map<Object, Object> responseBody = new HashMap<>();
        responseBody.put("data",list);
        return ResponseEntity.ok(responseBody);
    }
}
