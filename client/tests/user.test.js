import * as axios from "axios/index";

jest.mock("axios");


test('get current user with correct credentials', () => {
  const user = [{
    "_id": "5d6d850a7c79c936f1709692",
    "firstName": "Graham",
    "surname": "Yellow",
    "email": "graham.yellow@googlemail.com",
    "date": "2019-09-02T21:09:30.696Z",
    "__v": 0
  }];

  const resp = {data: user};

  axios.get.mockResolvedValue(resp);

  return axios.get('/api/users/me').then(data => expect(data.data).toEqual(user));
});

test('get current user with incorrect token', () => {

  const errorMsg = {
    "msg": "token is not valid"
  };

  axios.get.mockResolvedValue(errorMsg);

  return axios.get('/api/users/me').then(data => expect(data).toEqual(errorMsg));
});

test('login user with incorrect data', () => {

  const body = {
    "email": "peter.green@gmail.com",
    "password": "123456"
  };

  const errorMsg = {
    "errors": [
      {
        "msg": "invalid credentials"
      }
    ]
  };

  axios.post.mockResolvedValue(errorMsg);

  return axios.post('api/auth', body).then(data => expect(data).toEqual(errorMsg));
});

test('login user', () => {

  const body = {
    "email": "adam@gmail.com",
    "password": "123456"
  };

  const res = {
    "token": Math.random(12),
    "user_id": Math.random(7)
  };

  axios.post.mockResolvedValue(res);

  return axios.post('api/auth', body).then(data => expect(data).toEqual(res));
});

test('delete user where token invalid', () => {

  const body = {
    "email": "adam@gmail.com",
    "password": "123456"
  };

  const res = {
    "msg": "token is not valid"
  };

  axios.delete.mockResolvedValue(res);

  return axios.delete('api/auth', body).then(data => expect(data).toEqual(res));
});



//
// describe('authentication actions', () => {
//   it('returns data when sendMessage is called', done => {
//
//     store.dispatch(loadUser());
//     let action = store.getActions();
//
//     console.log(action);
//     expect(action[0].type).toBe(FETCH_POSTS);
//   });
// });
// test("test if server is working", async () => {
//
//   const res = await axios.get('localhost:3000').then(response =>{ return response});
//
//   console.log('----------');
//   console.log(res);
//  console.log('----------');
// });