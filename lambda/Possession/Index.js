const sql = require('mssql');


exports.handler = async (event, context, callback) => {
    console.log(event);
    let lookupValue = event.lookupValue; 
    var Home =  (event.event.Home);
    var Away =  (event.event.Away);

        // Take DB Config from environment variables set in Lambda config
        const config = {
            user: process.env.DB_USERNAME,
            password: process.env.DB_PASSWORD,
            server: process.env.DB_SERVER,
            database: process.env.DB_DATABASE,
        }

        try {
            // Open DB Connection
            let pool = await sql.connect(config)

            // Query Database
            let result = await pool.request()
                .input('lookupValue', sql.Int, lookupValue)
                .query('SELECT [england-premier-league-matches-2018-19-stats].home_team_possession,away_team_possession FROM [england-premier-league-matches-2018-19-stats] WHERE home_team_name=\'' + Home + '\' AND away_team_name=\'' + Away + '\'');
                
            // Close DB Connection
            pool.close();

            // The results of our query
            console.log("Results:", result.recordset);   
            // Use callback if you need to return values from your lambda function.
            // Callback takes (error, response?) as params.
                callback(null, result.recordset);
            
        } catch (err) {
            // Error running our SQL Query
            console.error("ERROR: Exception thrown running SQL", err);
        }

        sql.on('error', err => console.error(err, "ERROR: Error raised in MSSQL utility"));
    }
