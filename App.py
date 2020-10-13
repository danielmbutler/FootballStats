import pyodbc 
conn = pyodbc.connect('Driver={SQL Server};'
                      'Server=SERVERNAME'
                      'Database=EFL-1888-2017;'
                      'Trusted_Connection=yes;')


def Home_or_Away(Home,Away):
    query = 'SELECT TOP 1 [EFL-1888-2017].[dbo].[england].result FROM [EFL-1888-2017].[dbo].[england] WHERE home=\'' + Home + '\' AND visitor=\'' + Away + '\' GROUP BY [EFL-1888-2017].[dbo].[england].result ORDER  BY COUNT(*) DESC'
    cursor = conn.cursor()
    #print(query)
    cursor.execute(query)
    for row in cursor:
        if 'A' in (row):
            print(Away + ' Win')
        if 'H' in (row):
            print(Home + ' Win')

def Average_Score(Home,Away):
        query = 'SELECT TOP 1 [EFL-1888-2017].[dbo].[england].FT FROM [EFL-1888-2017].[dbo].[england] WHERE home=\'' + Home + '\' AND visitor=\'' + Away + '\' GROUP BY [EFL-1888-2017].[dbo].[england].FT ORDER  BY COUNT(*) DESC'
        cursor = conn.cursor()
        #print(query)
        cursor.execute(query)
        for row in cursor:
            print("average result", row)


Home_or_Away('Arsenal','Manchester United')
Average_Score('Arsenal','Manchester United')