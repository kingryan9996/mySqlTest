const { createPool } = require('mysql');

// const pool = createPool({
//     host: 'svc.sel3.cloudtype.app',
//     user: 'root',
//     password: '1234',
//     port: 30056,
//     database: 'test', //mySQL프로젝트 이름이 아니고, 프로젝트 안에 SCHEMAS안에 있는 root 이름을 작성해야함/
// });

const pool = createPool({
    host: process.env.NEXT_PUBLIC_HOST,
    user: process.env.NEXT_PUBLIC_USER,
    password: process.env.NEXT_PUBLIC_PASSWORD,
    port: process.env.NEXT_PUBLIC_PORT,
    database: process.env.NEXT_PUBLIC_DATABASE, //mySQL프로젝트 이름이 아니고, 프로젝트 안에 SCHEMAS안에 있는 root 이름을 작성해야함/
});

pool.getConnection(() => {
    console.log('success')
});

const executeQuery = async (query, arraParms) => {
    return await new Promise((resolve) => {
        pool.query(query, arraParms, (err, data) => { //query라는 것을 통해서 작업을 진행한다.
            // 조회 ,추가 ,수정, 삭제 등등
            resolve(data)
        });
    })

}

module.exports = { executeQuery };