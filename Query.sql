

[EFL-1888-2017].[dbo].[england]


/*  Mode Result   */
SELECT TOP 1 [EFL-1888-2017].[dbo].[england].result
FROM [EFL-1888-2017].[dbo].[england] WHERE home='Arsenal' AND visitor='Manchester United'
GROUP  BY [EFL-1888-2017].[dbo].[england].result
ORDER  BY COUNT(*) DESC


SELECT *
FROM [EFL-1888-2017].[dbo].[england] WHERE home=
GROUP  BY [EFL-1888-2017].[dbo].[england].result
ORDER  BY COUNT(*) DESC


SELECT *
FROM [EFL-1888-2017].[dbo].[england] WHERE home='Wigan Athletic' AND visitor='Manchester United';


/*  Mode Goal Difference   */

SELECT TOP 1 [EFL-1888-2017].[dbo].[england].goaldif
FROM [EFL-1888-2017].[dbo].[england] WHERE home='Wigan Athletic' AND visitor='Manchester United'
GROUP  BY [EFL-1888-2017].[dbo].[england].goaldif
ORDER  BY COUNT(*) DESC

/*  Mode Score  */

SELECT TOP 1 [EFL-1888-2017].[dbo].[england].FT
FROM [EFL-1888-2017].[dbo].[england] WHERE home='Arsenal' AND visitor='Manchester United'
GROUP  BY [EFL-1888-2017].[dbo].[england].FT
ORDER  BY COUNT(*) DESC


