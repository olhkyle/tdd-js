const UserService = require("../user_service");
const UserClient = require("../user_client");

jest.mock("../user_client");

describe("User Service", () => {
  const login = jest.fn(async () => "success");

  UserClient.mockImplementation(() => {
    return {
      login,
    };
  });

  let userService;

  beforeEach(() => {
    userService = new UserService(new UserClient());
    login.mockClear();
    UserClient.mockClear();
  });

  it("calls login() on UserClient when tries to login", async () => {
    await userService.login("abc", "abc");
    expect(login.mock.calls.length).toBe(1);
    // expect(login).toHaveBeenCalledTimes(1);
  });

  it("should not call login() on UserClient again if already being logged in", async () => {
    await userService.login("abc", "abc");
    await userService.login("abc", "abc");

    expect(login).toHaveBeenCalledTimes(1);
  });
});
