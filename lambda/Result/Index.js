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
                .query('SELECT TOP 1 [EFL-1888-2017].[dbo].[england].result FROM [EFL-1888-2017].[dbo].[england] WHERE home=\'' + Home + '\' AND visitor=\'' + Away + '\' GROUP BY [EFL-1888-2017].[dbo].[england].result ORDER  BY COUNT(*) DESC');

            // Close DB Connection
            pool.close();

            // The results of our query
            console.log("Results:", result.recordset);

            const HomeOrAway = Object.keys(result.recordset, callback).forEach(function(key) {
                var row = result.recordset[key];
                console.log(row.result);
                    if(row.result.indexOf("H")>=0) {
                        const Message = (Home + " Win");
                        console.log(Message);
                        callback(null, Message);
                    }
                    if(row.result.indexOf("A")>=0) {
                        const Message = (Away + " Win");
                        console.log(Message);
                        callback(null, Message);
                    }
            });

            
            // Use callback if you need to return values from your lambda function.
            // Callback takes (error, response?) as params.
            callback(null, result.recordset);
        } catch (err) {
            // Error running our SQL Query
            console.error("ERROR: Exception thrown running SQL", err);
        }

        sql.on('error', err => console.error(err, "ERROR: Error raised in MSSQL utility"));
    }
