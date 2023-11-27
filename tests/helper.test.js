const { sum, deleteUserById, findUserById, multiplyFirstByRndAndSum, multiplyByRnd } = require("../utils/helpers")


let userdata = [];
console.log(userdata, 'before all functions ')

beforeAll(() => {

    userdata = ['Clement', 'Sarah']
    console.log("runs before all tests", userdata)
})

beforeEach(() => {
    console.log("running before each test")

})

afterEach(() => {
    console.log("running after each test")

})

afterAll(() => {
    userdata = [];
    console.log("running after all tests have run", userdata)
})




describe("Number Operations", () => {
    test("1 plus 1 should be equal to 2", () => {
        // Please fill in the test
    })

    test("5 plus 6 is not equal to 10", () => {
        // Please fill in the test
    })
})

describe("Testing other matcher methods", () => {

    test("Testing that a variable is undefined", () => {
        let number = undefined;
        // Several matchers are possible
    })

    test("Should expect zero to act like zero", () => {

        let number = 0;
        // Several matchers are possible
    })


    test("Number Comparison", () => {
        const a = 1;
        const b = 2;
        // =, <=, >=, !=, <, >
    })


    test("there should be no I in team", () => {
        let string = 'team';

        // Matcher with regExp
    })
    test("there is 'stop' in Christopher", () => {
        let string = 'Christopher';

        // Matcher with regExp
    })
    const shoppingList = ["Milk", "Trash bags", "Paper towels", "Iphones"];
    test("the shopping list doesn't have PS4 but has milk", () => {
        // Matchers with regExp
    })
})

// testing primitive and reference type equality
describe("Testing Reference equality", () => {
    const user = {
        name: "Clement"
    }
    user['age'] = 45;

    test("Should return a user object with name as Clement and age as 45", () => {
        // Working with JSON
    })


    test("Should return  a user with a name and age key", () => {
        // Working with JSON
    })


    // TESTING ARRAY EQUALITY

    test("Array equality", () => {

        const users = [
            "Clement",
            "Sarah",
            "July"
        ]

        users.push("Jacob");

        // Validate the name of all users
        // Check if the array has strings


        const userObjectInArray = [
            {
                user: "Clement",
                age: 12,
            },
            {
                user: "Sarah",
                age: 14,
            },
            {
                user: "July",
                age: 25,

            },
        ]

        userObjectInArray.push({
            name: "Phil",
            age: 57
        })

        // Validate that the array has objects with user and age keys
    })



})



describe("Testing imported functions", () => {
    let users = [
        {
            name: "Clem",
            age: 12,
            id: 1,
        },
        {
            name: "Justin",
            age: 15,
            id: 2,
        },
        {
            name: "Sarah",
            age: 84,
            id: 3,
        },

    ]
    test("Sum function should add 2 numbers", () => {
        // Using sum functions make this assertion
    })

    test("delete by id function should delete a user by their id", () => {
        // validate that the function works, using the Users object (above)
    })

    // done by Test Driven Development
    test("Finds a user by ID from a list of users", () => {
        // Validate this assertion
        // And if I wanted to check if there is a user with ID 10
    })
})

describe("Mocking functions", () => {
    // How to test multiplyFirstByRndAndSum
})