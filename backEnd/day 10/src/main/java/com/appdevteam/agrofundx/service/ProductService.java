package com.appdevteam.agrofundx.service;

import org.springframework.stereotype.Service;


@Service
public class ProductService {

    // List<Product> productList = null;

    // @Autowired
    // private UserInfoRepository repository;

    // @Autowired
    // private PasswordEncoder passwordEncoder;

    // @PostConstruct
    // public void loadProductsFromDB() {
    //     productList = IntStream.rangeClosed(1, 100)
    //             .mapToObj(i -> Product.builder()
    //                     .productId(i)
    //                     .name("product " + i)
    //                     .qty(new Random().nextInt(10))
    //                     .price(new Random().nextInt(5000)).build())
    //             .collect(Collectors.toList());
    // }

    // public List<Product> getProducts() {
    //     return productList;
    // }

    // public Product getProduct(int id) {
    //     return productList.stream()
    //             .filter(product -> product.getProductId() == id)
    //             .findAny()
    //             .orElseThrow(() -> new RuntimeException("product " + id + " not found"));
    // }

    // public String addUser(UserInfo userInfo) {
    //     userInfo.setPassword(passwordEncoder.encode(userInfo.getPassword()));
    //     repository.save(userInfo);
    //     return "user added to system ";
    // }
}