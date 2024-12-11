CREATE TABLE ApiUsage(
id INT IDENTITY PRIMARY KEY,
userId INT,
requestMethod varchar(500),
endpoint varchar(500),
timestamp date,
status varchar(500),
errorDetails varchar(500)
)