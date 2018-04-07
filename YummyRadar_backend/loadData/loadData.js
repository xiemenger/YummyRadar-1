var oracledb = require('oracledb');

//var obj = require('./test.json');

var jsonlines = require('jsonlines')
var parser = jsonlines.parse({ emitInvalidLines: true })

parser.on('test.json', function (data) {
    console.log('Got json:', data)
});
parser.on('invalid-line', function (err) {
    console.log('Got text:', err.source)
});


oracledb.getConnection(
    {
        user          : "jingmin",
        password      : "jmyu1994",
        connectString : "oracle.cise.ufl.edu:1521/orcl"
    },
    function(err, connection)
    {
        if (err) {
            console.error(err.message);
            return;
        }
        connection.execute(
            'select * from country',  // bind value for :id
            function(err, result)
            {
                if (err) {
                    console.error(err.message);
                    doRelease(connection);
                    return;
                }
                //console.log(result.rows);
                doRelease(connection);
            });

    });

function doRelease(connection)
{
    connection.close(
        function(err) {
            if (err)
                console.error(err.message);
        });
}

// check whether ignore works
// push to jimmy branch