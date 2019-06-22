ALTER TABLE places CHANGE COLUMN createdAt createdAt datetime NOT NULL DEFAULT CURRENT_TIMESTAMP;
ALTER TABLE places CHANGE COLUMN updatedAt updatedAt datetime NOT NULL DEFAULT CURRENT_TIMESTAMP;

INSERT INTO places (name,type,address,zone,lat,lon,url,budget)
VALUES ("Tacos Tony","Tacos","Torres Adalid s/n, entre Peten y Universidad, Narvarte","Narvarte","19.3889184","-99.1531497","https://goo.gl/maps/SvhVtHi8joHDFeTJ9","barato"),
("Esquites de tuetano","Antojitos","Xola esquina con Eje Central, Narvarte","Narvarte","19.3953093","-99.1462574","https://goo.gl/maps/8Z2wjPTJpwC8aonf9","barato"),
("Tacos de hamburguesa Don Toño","Tacos","Dr. Lavista 143, Doctores","Doctores","19.424356","-99.149940","https://goo.gl/maps/gjqGBCsc9vKHqvXK7","barato"),
("La esquina del chilaquil","Mexicana"," Alfonso Reyes 139, Condesa","Condesa","19.408409","-99.1786978","https://goo.gl/maps/WKyH7u8ZHNE364m6A","barato"),
("El Moustron Narvarte","Americana","Esperanza 1205, Narvarte","Narvarte","19.3998441","-99.1518949","https://goo.gl/maps/QxxfPi1mF4KF9SMW7","barato"),
("Los Milanesos","Tacos","avenida Toluca y Glaciar, Olivar de los Padres","Olivar de los Padres","19.3380194","-99.2207432","https://goo.gl/maps/dyxay1C8jcS49r1R8","barato"),
("El Caguamo","Mariscos","Ayuntamiento 10, Centro","Centro","19.4303635","-99.1426896","https://goo.gl/maps/jCg2s6Zwv2LqdtLK9","barato"),
("El Cardenal","Mexicana","Av. de la Paz 32, San Ángel, CDMX","San Angel","19.3466678","-99.1892893","https://goo.gl/maps/HSyyaaUtaCXveGSC7","caro"),
("Azul Historico","Mexicana","Isabel la Católica 30, Centro Histórico de la Cdad. ","Centro","19.4328594","-99.1384087","https://goo.gl/maps/hV6MkWUd2B1xqKP4A","caro"),
("Chilakiller's Loungería","Mexicana","Local 3 y 5, Av. Revolución 23, Tacubaya,","Tacubaya","19.4068567","-99.18671","https://goo.gl/maps/Aa5aga9JkQA5qT15A","barato"),
("La muertita","Quesadillas","Bosques de la Reforma 1294, Lomas del Chamizal","Bosques","19.3906226","-99.2616423","https://goo.gl/maps/CQpkVmgtFAKYXtj7A","barato"),
("El autentico pato manila","Asiatica","Culiacan 91, Hipódromo, 06100 Ciudad de México, CDMX","Hipodromo","19.4042218","-99.172574","https://goo.gl/maps/FXidLQiLSLfHo3k3A","moderado"),
("Los panchos","Mexicana","Tolstoi 9, col. Anzures","Anzures","19.4254758","-99.1794514","https://goo.gl/maps/gsDSzVAKgi4VJcAy6","moderado"),
("Tamales Doña Emi","Mexicana","Jalapa esquina con Tlaxcala, local B, Roma","Roma","19.408452","-99.1603603","https://goo.gl/maps/AkvM3vvtSx4vduiU8","barato"),
("Tamales Teresita","Mexicana","Héroes 179, colonia Guerrero","Guerrero","19.4484969","-99.1452623","https://goo.gl/maps/BxJx42z74XrwYPBMA","barato"),
("Los tolucos","Mexicana","Calle Juan E. Hernández y Dávalos 40, colonia Algarín","Algarín","19.4068466","-99.144734","https://goo.gl/maps/JU6B1duUaTTg1k669","moderado"),
("La Casa de Toño","Mexicana","Avenida Cuauhtémoc 439, Piedad Narvarte","Piedad","19.4033022","-99.1570005","https://goo.gl/maps/cDX4qUFFYBaEVrUc9","barato"),
("Pozoleria Moctezuma","Mexicana"," Moctezuma 12, Guerrero","Guerrero","19.4430532","-99.1410192","https://goo.gl/maps/ZVjmAqA3CzPqhMJfA","barato"),
("Al-Andalus","Libanesa","Calle de Mesones 171, Centro Histórico","Centro","19.4280988","-99.1320782","https://goo.gl/maps/6hW9hRVrcGRcQ5Wh7","moderado"),
("El Pambazo Loco","Antojitos","Magdalena Mixiuhca 15","Magdalena Mixuca","19.4109482","-99.1210522","https://goo.gl/maps/NgWPKrDjhivzwpmt7","barato"),
("Bog Bistro","Asiatica"," Frontera 168, Roma Norte","Roma","19.4170553","-99.156573","https://goo.gl/maps/b6NYm91UY7tiU45H6","moderado");

