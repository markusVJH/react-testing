const { default: createMockStore } = require("redux-mock-store")

describe('a test', () => {
  it('should pass', () => {
    expect(true).toBe(true)
  })

})

describe("fetchProducts", () => {
  beforeEach(() => {
    jest.setTimeout(10000); // 10 second timeout
  })
})

it("should fetch products from the API", async () => {
  const store = createMockStore({ products: [] });
})