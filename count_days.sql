SELECT 
    MONTHNAME(CONCAT('01.', m.month, '.2021')) as month, 
    DAY(LAST_DAY(CONCAT('01.', m.month, '.2001'))) as days_count 
FROM (
	SELECT 1 AS month
    UNION SELECT 2 AS month
    UNION SELECT 3 AS month
    UNION SELECT 4 AS month
    UNION SELECT 5 AS month
    UNION SELECT 6 AS month
    UNION SELECT 7 AS month
    UNION SELECT 8 AS month
    UNION SELECT 9 AS month
    UNION SELECT 10 AS month
    UNION SELECT 11 AS month
    UNION SELECT 12 AS month
) as m