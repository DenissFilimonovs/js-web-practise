//Найдите классы кораблей, в которых хотя бы один корабль был потоплен в сражении.


SELECT class 
FROM classes  LEFT JOIN Outcomes  ON outcomes.ship = classes.class
WHERE result = 'sunk'
UNION
SELECT class
FROM Ships LEFT JOIN Outcomes ON Outcomes.ship = ships.name
WHERE result = 'sunk'



//Given a year, return the century it is in.
SELECT (yr+99)/100 AS century 
FROM years
