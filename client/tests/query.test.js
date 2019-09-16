import * as axios from "axios/index";

jest.mock("axios");


test('get query by user id', () => {
  const user = [];

  const resp = {data: user};

  axios.get.mockResolvedValue(resp);

  return axios.get('api/queries/user').then(data => expect(data.data).toEqual(user));
});