import pyodbc 
conn = pyodbc.connect('Driver={SQL Server};'
                      'Server=DESKTOP-BJPH0E1\SQLDB;'
                      'Database=EFL-1888-2017;'
                      'Trusted_Connection=yes;')


def Home_or_Away(Home,Away):
    query = 'SELECT TOP 1 [EFL-1888-2017].[dbo].[england].result FROM [EFL-1888-2017].[dbo].[england] WHERE home=\'' + Home + '\' AND visitor=\'' + Away + '\' GROUP BY [EFL-1888-2017].[dbo].[england].result ORDER  BY COUNT(*) DESC'
    cursor = conn.cursor()
    #print(query)
    cursor.execute(query)
    for row in cursor:
        print(row)
        if 'A' in (row):
            print(Away + ' Win')
        if 'H' in (row):
            print(Home + ' Win')

Home_or_Away('Arsenal','Manchester United')