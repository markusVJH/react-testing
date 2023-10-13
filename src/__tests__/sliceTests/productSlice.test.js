import thunk from "redux-thunk"
import configureStore from "redux-mock-store"
import { fetchProducts } from "../../features/productsSlice"

const mockStore = configureStore([thunk])

describe('a test', () => {
  it('should pass', () => {
    expect(true).toBe(true)
  })

})

describe("fetchProducts", () => {
  beforeEach(() => {
    jest.setTimeout(10000); // 10 second timeout
  })

  it("should fetch products from the API", async () => {
    const store = mockStore({ products: [] });
    await store.dispatch(fetchProducts());

    const actions = store.getActions();
    expect(actions[0].type).toEqual("products/fetchProducts/pending");
    expect(actions[1].type).toEqual("products/fetchProducts/fulfilled");

    const products = actions[1].payload;
    expect(products).toHaveLength(20);
  })

})
