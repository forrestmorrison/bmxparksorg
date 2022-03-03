DROP TABLE IF EXISTS comments, parks, users;

CREATE TABLE users (
  id INT NOT NULL AUTO_INCREMENT,
  username VARCHAR(50),
  password VARCHAR(50),
  email VARCHAR(50),
  PRIMARY KEY (id)
);

CREATE TABLE parks (
  id INT NOT NULL AUTO_INCREMENT,
  user_id INT NOT NULL,
  park_name VARCHAR(50),
  park_address VARCHAR(100),
  park_hours VARCHAR(200),
  park_type VARCHAR(50),
  PRIMARY KEY (id),
  FOREIGN KEY (user_id)
  REFERENCES users (id)
    ON DELETE CASCADE
);

CREATE TABLE comments (
  id INT NOT NULL AUTO_INCREMENT,
  park_id INT NOT NULL,
  user_id INT NOT NULL,
  google_id VARCHAR(50),
  username VARCHAR(50),
  comment VARCHAR(50),
  date VARCHAR(50),
  time VARCHAR(50),
  PRIMARY KEY (id),
  FOREIGN KEY (user_id)
  REFERENCES users (id),
  FOREIGN KEY (park_id)
  REFERENCES parks (id)
    ON DELETE CASCADE
);



INSERT INTO users
	(username, password, email)
VALUES 
  ("fakeuserATX", "fakeP@ssword123", "fakeuserATX@gmail.com");


INSERT INTO parks
	(user_id, park_name, park_address, park_hours, park_type)
VALUES 
    (1, "Rockstar Energy Bike Park", "12257 Kuykendahl Rd, Houston, TX 77067", "Mon 10AM-9PM, Tues Closed, Wed 10AM-9PM, Thu 10AM-9PM, Fri 10AM-9PM, Sat 8AM-10PM, Sun 10AM-9PM", "dirt, race, street");


INSERT INTO comments
	(park_id, user_id, google_id, username, comment, date, time)
VALUES 
  (1, 1, "F11", "fakeuserATX", "This is the best BMX park in the world probably.", "3/2/2022", "12:45 PM");