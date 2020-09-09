import axios from 'axios'

const initialState = {
  products: [],
  isLoading: false,
  product: {},
}

const GET_ALL_PRODUCTS = 'GET_ALL_PRODUCTS'
const GET_PRODUCT = 'GET_PRODUCT'

export function getAllProducts() {
  const payload = axios.get('/api/products')

  return {
    type: GET_ALL_PRODUCTS,
    payload: payload,
  }
}

export function getProduct(id) {
  const payload = axios.get(`/api/products/${id}`)

  return {
    type: GET_PRODUCT,
    payload: payload,
  }
}

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ALL_PRODUCTS + '_PENDING':
      return { ...state, isLoading: true }
    case GET_ALL_PRODUCTS + '_FULFILLED':
      return { ...state, isLoading: false, products: action.payload.data }
    case GET_ALL_PRODUCTS + '_REJECTED':
      return { ...state, isLoading: false }
    case GET_PRODUCT + '_PENDING':
      return { ...state, isLoading: true }
    case GET_PRODUCT + '_FULFILLED':
      return { ...state, isLoading: false, product: action.payload.data }
    case GET_PRODUCT + '_REJECTED':
      return { ...state, isLoading: false }
    default:
      return state
  }
}
