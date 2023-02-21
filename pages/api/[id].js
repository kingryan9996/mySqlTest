// [id].js

import { executeQuery } from './db';

const handler = async (req, res) => {

  // 수정과 삭제는 핸들러를 별도로 만든다. ( [id].js  라우터 같은 느낌으로 )
  // req.query.id : 라우터마냥 뒤에붙은 id값
  // get[id], put, delete


  // <<= hello.js 를 사용했을때는, 상단 url에 /api/hello를 기입해줘야했는데,
  // index.js로 바꾸게되면, 브라우저가 기본값으로 index를 찾는것을 이용해서 그냥 /api만 입력해도 볼 수 있다.
  // 개꿀이다. 당연히 /api/2 등등 원하는 인덱스값만 볼수도있다.

  const { method, body, query } = req;


  const seletDataId = async () => {
    let data = await executeQuery('select * from myTest where id=?', [query.id]);
    res.json(data);
  }

  const updateDataId = async () => {
    let { name, email, date } = body;
    let data = await executeQuery(
      "update myTest set name=?, email=?, date=? where id=?",
      [name, email, date, query.id]);
    res.json(data);
  }

  const deleteDataId = async () => {
    let data = await executeQuery("delete from myTest where id=?", [query.id]);
    res.json(data);
  }

  switch (method) {
    case "GET": seletDataId(); break;
    case "PUT": updateDataId(); break;
    case "DELETE": deleteDataId(); break;
  }
  //get[id], put, delete
}

export default handler;

