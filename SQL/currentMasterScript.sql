//Author: Kenton Goodling

DROP TABLE IF EXISTS CHAT;
DROP TABLE IF EXISTS QUEUE;
DROP TABLE IF EXISTS PAIR;
DROP TABLE IF EXISTS MOVE;
DROP TABLE IF EXISTS GAME;
DROP TABLE IF EXISTS ACCOUNT;


CREATE TABLE ACCOUNT(
	firstname varchar(50), 
	lastname varchar(50), 
	username varchar(50) NOT NULL PRIMARY KEY, 
	password varchar(50) NOT NULL, 
	temp_password varchar(50) NOT NULL, 
	email_address varchar(50) NOT NULL, 
	security_question varchar(140), 
	security_question_answer varchar(140), 
	date_of_birth date, 
	alias varchar(50), 
	skill_level int(1), 
	chess_rank int(11), 
	win int(10), 
	loss int(10), 
	phone_number varchar(12), 
	profile_privacy int(1), 
	hash varchar(50), 
	account_flag int(1), 
	player_status int(1), 
	temp_email_attribute varchar(50)
);

INSERT INTO ACCOUNT (firstname, lastname, username, password, temp_password, email_address,security_question, security_question_answer, date_of_birth, 
alias,skill_level, chess_rank, win, loss, phone_number, profile_privacy, hash, account_flag, player_status, temp_email_attribute) 
VALUES ('Susan', 'Strayer', 'sstrayer', 'password123', 'temp_password', 'sstrayer@internet.com','What is your job?', 'Professor', '2000-01-01', 
'SStrayer', 2, '2000', 0,0,'555-555-5555','0','abcdef123456789abcdef123456789','NULL', 0, 'tempemail@lhup.edu');

INSERT INTO ACCOUNT (firstname, lastname, username, password, temp_password, email_address,security_question, security_question_answer, date_of_birth, 
alias,skill_level, chess_rank, win, loss, phone_number, profile_privacy, hash, account_flag, player_status, temp_email_attribute) 
VALUES ('Kyle', 'Leber', 'kleber', 'password', 'temporarypassword', 'kleber@potatoe.com','What is your job?', 'Hobo', '2123-11-05', 
'kleber', 2, '2000', 0,0,'665-455-3555','0','abc53453224562bcdef456789','NULL', 0, 'tempemail@lhup.edu');

INSERT INTO ACCOUNT (firstname, lastname, username, password, temp_password, email_address,security_question, security_question_answer, date_of_birth, 
alias,skill_level, chess_rank, win, loss, phone_number, profile_privacy, hash, account_flag, player_status,temp_email_attribute) 
VALUES ('Wes', 'Hulsize', 'whulsize', 'password456', 'passwordtemp', 'whulsize@internet.com','What is your job?', 'ice cream man', '2005-01-01',
 'WHulsize', 0, '2000', 0,0,'999-555-2222', '0','abcdef1abdfe89abcdef123456789','NULL', 0, 'temporaryEmail@lhup.edu');
 
 INSERT INTO ACCOUNT (firstname, lastname, username, password, temp_password, email_address,security_question, security_question_answer, date_of_birth, 
alias,skill_level, chess_rank, win, loss, phone_number, profile_privacy, hash, account_flag, player_status,temp_email_attribute) 
VALUES ('Kenton', 'Goodling', 'kgood', 'datpass', 'datetmp', 'kgood@internet.com','How do you feel?', 'FTS', '2006-02-02',
 'kag', 0, '2000', 0,0,'999-555-1111', '0','abcdef2abdfe89abcdef123456789','NULL', 0, 'tempmail@lhup.edu');

CREATE TABLE QUEUE (
	queue_id INTEGER PRIMARY KEY,
	username VARCHAR(50), 
	skill int(1), 
	status VARCHAR(4),
	FOREIGN KEY(username) REFERENCES ACCOUNT(username)
);

INSERT INTO QUEUE (queue_id, username, skill, status) Values (1, 'kleber', '2', 2);
INSERT INTO QUEUE (queue_id, username, skill, status) Values (2, 'sstrayer', '2', 2);
INSERT INTO QUEUE (queue_id, username, skill, status) Values (3, 'whulsize', '0', 2);
INSERT INTO QUEUE (queue_id, username, skill, status) Values (4, 'kgood', '0', 2);

CREATE TABLE GAME (
	game_num INTEGER PRIMARY KEY, 
	player_w VARCHAR(30), 
	player_b VARCHAR(30), 
	winner VARCHAR(30),
	loser VARCHAR(30),
	FOREIGN KEY(player_w) REFERENCES ACCOUNT(username),
	FOREIGN KEY(player_b) REFERENCES ACCOUNT(username)
);

INSERT INTO GAME (game_num, player_w, player_b) Values (1234, 'kleber', 'sstrayer');
INSERT INTO GAME (game_num, player_w, player_b) Values (3456, 'whulsize', 'kgood');

CREATE TABLE MOVE (
	move_num INTEGER,
	game_num INTEGER,
	PRIMARY KEY(move_num, game_num),
	FOREIGN KEY(game_num) REFERENCES GAME(game_num),
	color char(1),
	end_loc INTEGER
);

CREATE TABLE PAIR (
	pair_id INTEGER PRIMARY KEY, 
	player_w VARCHAR(30), 
	pw_answer int(1), 
	player_b VARCHAR(30), 
	pb_answer int(1), 
	FOREIGN KEY(player_w) REFERENCES ACCOUNT(username),
	FOREIGN KEY(player_b) REFERENCES ACCOUNT(username)
);

INSERT INTO PAIR (pair_id, player_w, player_b) Values (1234, 'kleber', 'sstrayer');
INSERT INTO PAIR (pair_id, player_w, player_b) Values (3456, 'whulsize', 'kgood');


CREATE TABLE CHAT(
	message VARCHAR(120),
	username VARCHAR(50)
);
