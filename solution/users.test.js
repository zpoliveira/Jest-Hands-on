const axios = require('axios');
const Users = require('../users');

jest.mock('axios');

test('should fetch users', async () => {

    const users = [{
        "id": 1,
        "first_name": "Robert",
        "last_name": "Schwartz",
        "email": "rob23@gmail.com"
    }, {
        "id": 2,
        "first_name": "Lucy",
        "last_name": "Ballmer",
        "email": "lucyb56@gmail.com"
    }];

    const resp = { data : users };

    axios.get = jest.fn().mockResolvedValue(resp);
    const allUsers = await Users.all()

    expect(resp).toEqual(allUsers);
});