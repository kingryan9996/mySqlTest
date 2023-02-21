
import { executeQuery } from './db';

const handler = async (req, res) => {
  // 수정과 삭제는 핸들러를 별도로 만든다. ( [id].js  라우터 같은 느낌으로 )
  // req.query.id : 라우터마냥 뒤에붙은 id값


  // 데이터 조회 방법 1
  // let data = await executeQuery('select * from myTest', []);

  // 데이터 조회 방법 2
  // DESC(내림차순), ASC(오름차순)
  // let data = await executeQuery('select * from myTest order by id DESC', []); // DESC
  // let data = await executeQuery('select * from myTest order by id ASC', []); // ASC

  // 데이터 수정 방법
  // let data = await executeQuery(
  //   // 해석 : test테이블에 (name,email,date)라는 곳에 (?,?,?)라는 값들을 넣겠다.
  //   'insert into myTest (name,email,date) value (?,?,?)',
  //   ['홍길동', 'df', '2013']
  // )

  // 내가 mySQL에서 설정한 테이블 들 ( id를 적지않은 이유는,\
  // mySQL에서 id의 값을 오토인크리트를 이용해서 값이 증가하게끔 해둬서 굳이 안적었다. )


  // Update : 값을 바꿀떄, 3번을 찾아서 값을 바꾸겠다.
  // let data = await executeQuery(
  //   'update myTest set name=? where id=?',
  //   ['콩돌이', 3]
  // )

  // Delete : 값을 삭제할때, 3번째 값을 삭제하겠다.
  // let data = await executeQuery(
  //   'delete from myTest where id=?', [3]
  // )

  // 'select * from myTest' <= 테이블이름 반드시 확인할것.



  // ====================================================
  // ====================================================
  // ====================================================

  // DESC(내림차순), ASC(오름차순)
  const { method, body } = req;

  const seletData = async () => {
    try {
      let data = await executeQuery('select * from myTest order by id DESC', []);
      res.json(data)
    } catch (err) {
      res.send(err);
    }
  }

  const insertData = async () => {
    let { name, email, tel } = body;

    let data = await executeQuery(
      'insert into myTest (name,email,date) value (?,?,?)',
      [name, email, tel]
    );
    res.json(data)
  }

  switch (method) {
    case "GET": seletData(); break;
    case "POST": insertData(); break;
  }
}

export default handler;

