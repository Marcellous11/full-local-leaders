CREATE TABLE users (
  username VARCHAR(25) PRIMARY KEY,
  password TEXT NOT NULL,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL
    CHECK (position('@' IN email) > 1),
  is_admin BOOLEAN NOT NULL DEFAULT FALSE
);
CREATE TABLE leaders (
  twitId VARCHAR(25) PRIMARY KEY,
  full_name TEXT NULL,
  imgUrl TEXT  NULL,
  approve INT NULL,
  disapprove INT NULL
    
);