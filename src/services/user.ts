import * as constants from "../utility/constants";
import config from '../config/config';

export async function welcomeService(req, res) {

    const oracledb = require('oracledb');
    let connection;
    try {
      connection = await oracledb.getConnection(
        {
          user: config.user,
          password: config.password,
          connectString: config.connectString
        });
      console.log('connection', connection);
      // Create a table

    await connection.execute(`begin
                                execute immediate 'drop table todoitem';
                                exception when others then if sqlcode <> -942 then raise; end if;
                              end;`);

    await connection.execute(`create table todoitem (
                                id number generated always as identity,
                                description varchar2(4000),
                                creation_ts timestamp with time zone default current_timestamp,
                                done number(1,0),
                                primary key (id))`);

    // Insert some data

    const sql = `insert into todoitem (description, done) values(:1, :2)`;

    const rows =
          [ ["Task 1", 0 ],
            ["Task 2", 0 ],
            ["Task 3", 1 ],
            ["Task 4", 0 ],
            ["Task 5", 1 ] ];

    let result = await connection.executeMany(sql, rows);

    console.log(result.rowsAffected, "Rows Inserted");

    connection.commit();

    // Now query the rows back

    result = await connection.execute(
      `select description, done from todoitem`,
      [],
      { resultSet: true, outFormat: oracledb.OUT_FORMAT_OBJECT });

    const rs = result.resultSet;
    let row;
    let records = [];

    while ((row = await rs.getRow())) {
      records.push(row);
    }
    
    await rs.close();
    return res.status(constants.statusCode200).send(JSON.stringify({
        message: records,
      }));
    }
    catch (e) {
      console.log('connection error', e)
      return {
        statusCode: 500,
        body: JSON.stringify({
          message: 'Failed to connnect!',
          error: e,
          input: event,
        }),
      };
    }
    finally {
      if (connection) {
        try {
          await connection.close();
        } catch (err) {
          console.error(err);
        }
      }
    }
}
