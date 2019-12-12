-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema marthub
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema marthub
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `marthub` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `marthub` ;

-- -----------------------------------------------------
-- Table `marthub`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `marthub`.`user` (
  `us_id` INT(11) NOT NULL AUTO_INCREMENT,
  `us_first_name` TINYTEXT NULL DEFAULT NULL,
  `us_last_name` TINYTEXT NULL DEFAULT NULL,
  `us_age` INT(2) NOT NULL,
  `us_gender` VARCHAR(10) NOT NULL,
  `us_contact_number` BIGINT(10) NULL DEFAULT NULL,
  `us_user_id` TINYTEXT NOT NULL,
  `us_password` VARCHAR(255) NOT NULL,
  `us_user_type` TINYTEXT NOT NULL,
  `us_reward_points` DECIMAL(8,2) NOT NULL DEFAULT 0,
  `us_status` TINYTEXT NOT NULL,
  `us_ques_1` TINYTEXT NOT NULL,
  `us_ans_1` TINYTEXT NOT NULL,
  `us_ques_2` TINYTEXT NOT NULL,
  `us_ans_2` TINYTEXT NOT NULL,
  `us_ques_3` TINYTEXT NOT NULL,
  `us_ans_3` TINYTEXT NOT NULL,
  PRIMARY KEY (`us_id`))
ENGINE = InnoDB
AUTO_INCREMENT = 10
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `marthub`.`bill`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `marthub`.`bill` (
  `b_id` INT(11) NOT NULL AUTO_INCREMENT,
  `b_purchase_date` DATE NOT NULL,
  `b_total_amount` DECIMAL(8,2) NOT NULL,
  `b_discounted_amount` DECIMAL(8,2) NOT NULL,
  `b_reward_points` DECIMAL(8,2) NOT NULL,
  `b_user_reward_points` DECIMAL(8,2) NOT NULL,
  `b_us_id` INT(11) NOT NULL,
  PRIMARY KEY (`b_id`),
  INDEX `fk_b_us_idx` (`b_us_id` ASC),
  CONSTRAINT `fk_b_us`
    FOREIGN KEY (`b_us_id`)
    REFERENCES `marthub`.`user` (`us_id`))
ENGINE = InnoDB
AUTO_INCREMENT = 2
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `marthub`.`product`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `marthub`.`product` (
  `pr_id` INT(11) NOT NULL AUTO_INCREMENT,
  `pr_code` VARCHAR(50) NOT NULL AUTO_INCREMENT,
  `pr_name` VARCHAR(50) NOT NULL,
  `pr_type` INT(2) NOT NULL,
  `pr_brand` VARCHAR(50) NOT NULL,
  `pr_quantity_type` INT(10) NULL DEFAULT NULL,
  `pr_rate` DECIMAL(8,2) NOT NULL,
  `pr_stock_count` INT(15) NOT NULL,
  `pr_add_date` DATE NOT NULL,
  `pr_aisle` VARCHAR(15) NOT NULL,
  `pr_shelf` VARCHAR(15) NOT NULL,
  `pr_date_of_manufacture` DATE NOT NULL,
  `pr_date_of_expiry` DATE NOT NULL,
  `pr_image` VARCHAR(200) NOT NULL,
  PRIMARY KEY (`pr_id`))
ENGINE = InnoDB
AUTO_INCREMENT = 26
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `marthub`.`bill_details`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `marthub`.`bill_details` (
  `bd_id` INT(10) NOT NULL AUTO_INCREMENT,
  `product_pr_id` INT(11) NOT NULL,
  `bill_b_id` INT(11) NOT NULL,
  `quantity` INT(10) NOT NULL DEFAULT '0',
  PRIMARY KEY (`bd_id`),
  INDEX `fk_product_has_bill_bill1_idx` (`bill_b_id` ASC),
  INDEX `fk_product_has_bill_product1_idx` (`product_pr_id` ASC),
  CONSTRAINT `fk_product_has_bill_bill1`
    FOREIGN KEY (`bill_b_id`)
    REFERENCES `marthub`.`bill` (`b_id`),
  CONSTRAINT `fk_product_has_bill_product1`
    FOREIGN KEY (`product_pr_id`)
    REFERENCES `marthub`.`product` (`pr_id`))
ENGINE = InnoDB
AUTO_INCREMENT = 2
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `marthub`.`offer`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `marthub`.`offer` (
  `of_id` INT(11) NOT NULL AUTO_INCREMENT,
  `of_date` DATE NOT NULL,
  `of_discount_percentage` INT(11) NOT NULL,
  `of_offer` VARCHAR(100) NOT NULL,
  `product_pr_id` INT(11) NOT NULL,
  PRIMARY KEY (`of_id`),
  INDEX `fk_offer_product1_idx` (`product_pr_id` ASC),
  CONSTRAINT `fk_offer_product1`
    FOREIGN KEY (`product_pr_id`)
    REFERENCES `marthub`.`product` (`pr_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
AUTO_INCREMENT = 2
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

SELECT * FROM offer WHERE DATE(of_date) = CURDATE() AND product_pr_id = 2 ;
SELECT * FROM offer WHERE DATE(of_date) = CURDATE();

INSERT into   marthub.product   values (1,'01','Spoon',1,'Milton','1',15,50,'2019-03-15','1','1','2017-05-24','2020-04-09','https://images.unsplash.com/photo-1526434426615-1abe81efcb0b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80');
INSERT into   marthub.product   values (2,'02','Plate',1,'Milton','1','150','50','2019-03-15','1','1','2017-05-24','2020-04-09','https://images.unsplash.com/photo-1529060256154-8dca470c3325?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80');
INSERT into   marthub.product   values (3,'03','Bottle',1,'Milton','1','50','100','2019-03-15','2','1','2017-05-24','2020-04-09','https://images.unsplash.com/photo-1574269910274-86467689cf2c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1055&q=80');
INSERT into   marthub.product   values (4,'04','Tumbler',1,'Milton','1','70','100','2019-03-15','2','1','2017-05-24','2020-04-09','https://images.unsplash.com/photo-1503536882745-fa1ce53c4928?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80');
INSERT into   marthub.product   values (5,'05','Pressure Cooker',1,'Milton','1','1000','50','2019-03-15','2','1','2017-05-24','2020-04-09','https://images-na.ssl-images-amazon.com/images/I/71sliJ2-t5L._SL1500_.jpg');
INSERT into   marthub.product   values (6,'06','Garlic Bread',2,'Bakers Fresh','1','70','20','2019-03-15','2','1','2017-05-24','2020-04-09','https://images.unsplash.com/photo-1558679582-dac5f374f01c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80');
INSERT into   marthub.product   values (7,'07','Fruit Jam',2,'Bakers Fresh','1','50','30','2019-03-15','2','1','2017-05-24','2020-04-09','https://images.unsplash.com/photo-1511870535127-cfd904aab3a8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1052&q=80');
INSERT into   marthub.product   values (8,'08','Cupcakes',2,'Bakers Fresh','1','25','100','2019-03-15','2','1','2017-05-24','2020-04-09','https://images.unsplash.com/photo-1519869325930-281384150729?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1047&q=80');
INSERT into   marthub.product   values (9,'09','Cookies',2,'Bakers Fresh','1','30','50','2019-03-15','2','1','2017-05-24','2020-04-09','https://images.unsplash.com/photo-1568051243858-533a607809a5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80');
INSERT into   marthub.product   values (10,'10','Homemade chocolate',2,'Bakers Fresh','1','70','10','2019-03-15','2','1','2017-05-24','2020-04-09','https://images.unsplash.com/photo-1542843137-8791a6904d14?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80');
INSERT into   marthub.product   values (11,'11','Orange',3,'Farm Fresh','1','150','100','2019-03-15','2','1','2017-05-24','2020-04-09','https://images.unsplash.com/photo-1568051243858-533a607809a5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80');
INSERT into   marthub.product   values (12,'12','Apple',3,'Farm Fresh','1','150','100','2019-03-15','2','1','2017-05-24','2020-04-09','https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80');
INSERT into   marthub.product   values (13,'13','Banana',3,'Farm Fresh','1','150','100','2019-03-15','2','1','2017-05-24','2020-04-09','https://images.unsplash.com/photo-1566393028639-d108a42c46a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1027&q=80');
INSERT into   marthub.product   values (14,'14','Dragon Fruit',3,'Farm Fresh','1','150','100','2019-03-15','2','1','2017-05-24','2020-04-09','https://images.unsplash.com/photo-1455753141069-7f1d73813b22?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1453&q=80');
INSERT into   marthub.product   values (15,'15','Papaya',3,'Farm Fresh','1','150','100','2019-03-15','2','1','2017-05-24','2020-04-09','https://images.unsplash.com/photo-1541472596887-494ee5c0fe30?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1434&q=80');
INSERT into   marthub.product   values (16,'16','Popcorn',4,'Aci2','1','150','100','2019-03-15','2','1','2017-05-24','2020-04-09','https://images.unsplash.com/photo-1505686994434-e3cc5abf1330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1052&q=80');
INSERT into   marthub.product   values (17,'17','Walnut',4,'Aci2','1','150','100','2019-03-15','2','1','2017-05-24','2020-04-09','https://images.unsplash.com/photo-1571645099557-18b03f72c3e3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80');
INSERT into   marthub.product   values (18,'18','Cashew',4,'Aci2','1','150','100','2019-03-15','2','1','2017-05-24','2020-04-09','https://images.unsplash.com/photo-1509912760195-4f6cfd8cce2c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80');
INSERT into   marthub.product   values (19,'19','Cola',4,'Aci2','1','150','100','2019-03-15','2','1','2017-05-24','2020-04-09','https://images.unsplash.com/photo-1473360526459-100c8e8ec8d8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80');
INSERT into   marthub.product   values (20,'20','RedBull',4,'Aci2','1','150','100','2019-03-15','2','1','2017-05-24','2020-04-09','https://images.unsplash.com/photo-1546527050-7e08a7f44112?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80');
