

[EFL-1888-2017].[dbo].[england]

SELECT TOP 1 [EFL-1888-2017].[dbo].[england].result
FROM [EFL-1888-2017].[dbo].[england] WHERE home='Wigan Athletic' AND visitor='Manchester United'
GROUP  BY [EFL-1888-2017].[dbo].[england].result
ORDER  BY COUNT(*) DESC


SELECT *
FROM [EFL-1888-2017].[dbo].[england] WHERE home='Tottenham Hotspur' AND visitor='Arsenal'
GROUP  BY [EFL-1888-2017].[dbo].[england].result
ORDER  BY COUNT(*) DESC


SELECT *
FROM [EFL-1888-2017].[dbo].[england] WHERE home='Wigan Athletic' AND visitor='Manchester United';

