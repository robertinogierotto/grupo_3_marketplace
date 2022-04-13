CREATE TABLE `products` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `name` VARCHAR(100) NOT NULL,
   `price` INT NOT NULL,
   `discount` INT,
   `caract1` VARCHAR(70) NOT NULL,
   `caract2` VARCHAR(70) NOT NULL,
   `caract3` VARCHAR(70),
   `caract4` VARCHAR(70),
   `dailyOnSale` INT NOT NULL,
   `description` VARCHAR(1000) NOT NULL,
   `image` VARCHAR(50) NOT NULL,
   `productsCategoryId` INT NOT NULL,
   PRIMARY KEY (`id`)
);

CREATE TABLE `users` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `name` VARCHAR(50) NOT NULL,
   `lastName` VARCHAR(50) NOT NULL,
   `email` VARCHAR(100) NOT NULL,
   `password` VARCHAR(100) NOT NULL,
   `profilePicture` VARCHAR(50) NOT NULL,
   `terms` VARCHAR(10) NOT NULL,
   `categoryId` INT NOT NULL,
   PRIMARY KEY (`id`)
);

CREATE TABLE `usersLog` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `token` VARCHAR(200) NOT NULL,
   `userId` INT NOT NULL,
   PRIMARY KEY (`id`)
);

CREATE TABLE `productsCategory` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `name` VARCHAR(15) NOT NULL,
   PRIMARY KEY (`id`)
);

CREATE TABLE `usersCategory` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `name` VARCHAR(10) NOT NULL,
   PRIMARY KEY (`id`)
);


ALTER TABLE `products` ADD CONSTRAINT `FK_86652ee9-9c2d-4ca2-a1d5-e44cb18a9d10` FOREIGN KEY (`productsCategoryId`) REFERENCES `productsCategory`(`id`)  ;

ALTER TABLE `users` ADD CONSTRAINT `FK_48befb0f-ebf6-4d1e-a562-7f6bc803e5bd` FOREIGN KEY (`categoryId`) REFERENCES `usersCategory`(`id`)  ;

ALTER TABLE `usersLog` ADD CONSTRAINT `FK_cff6bcf9-4d22-4959-8cbb-1136545c1acd` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE CASCADE ;
