import Vue from 'vue'
import Vuex from 'vuex'
import { v4 as uuidv4 } from 'uuid'


Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    products: [
      {
        id: uuidv4(),
        name: 'Shoe',
        price: '25,000',
        image: require("@/assets/1.jpg"),
        categoryId: 2,
        minidescription: 'Light Weight Unisex Black Summer Sneakers',
        productCode: 'SJDI2020',
        availability: 'Almost sold out!',
        condition: 'New',
        brand: 'Nike',
        fullDescription: ''
      },
      {
        id: uuidv4(),
        name: 'Shoe',
        price: '20,000',
        image: require("@/assets/2.jpg"),
        categoryId: 3,
        minidescription: 'Light Weight Unisex Black Summer Sneakers',
        productCode: 'SGDY2020',
        availability: 'Sold Out!',
        condition: 'Old',
        brand: 'Timberland',
        fullDescription: ' '
      },
      {
        id: uuidv4(),
        name: 'Shoe',
        price: '25,000',
        image: require("@/assets/3.jpg"),
        categoryId: 1,
        minidescription: 'Light Weight Unisex Black Summer Sneakers',
        productCode: 'SBYD2020',
        availability: 'In Stock',
        condition: 'New',
        brand: 'Dr Martens',
        fullDescription: ' '
      },
      {
        id: uuidv4(),
        name: 'Shoe',
        price: '25,000',
        image: require("@/assets/4.jpg"),
        categoryId: 5,
        minidescription: 'Light Weight Unisex Black Summer Sneakers',
        productCode: 'GYUG2020',
        availability: 'Almost sold out!',
        condition: 'Old',
        brand: ' Balenciaga',
        fullDescription: ' '
      },
      {
        id: uuidv4(),
        name: 'Shoe',
        price: '25,000',
        image: require("@/assets/5.jpg"),
        categoryId: 1,
        minidescription: 'Light Weight Unisex Black Summer Sneakers',
        productCode: ' DJDH2020',
        availability: 'In Stock',
        condition: 'New',
        brand: 'Sketchers',
        fullDescription: ' ',
      },
      {
        id: uuidv4(),
        name: 'IPhone 11',
        price: '25,000',
        image: require("@/assets/6.jpg"),
        categoryId: 4,
        minidescription: 'Light Weight Unisex Black Summer Sneakers',
        productCode: 'DHSK2020',
        availability: 'Almost sold out!',
        condition: 'New',
        brand: 'Lacoste',
        fullDescription: ' ',
      },
      {
        id: uuidv4(),
        name: 'Shoe',
        price: '25,000',
        image: require("@/assets/7.jpg"),
        categoryId: 4,
        minidescription: 'Light Weight Unisex Black Summer Sneakers',
        productCode: 'GADH2020',
        availability: 'Out of Stock',
        condition: 'New',
        brand: 'Dr Martens',
        fullDescription: ' ',
      },
      {
        id: uuidv4(),
        name: 'Shoe',
        price: '25,000',
        image: require("@/assets/8.jpg"),
        categoryId: 3,
        minidescription: 'Light Weight Unisex Black Summer Sneakers',
        productCode: 'SCFI2020',
        availability: 'Almost sold out!',
        condition: 'New',
        brand: 'Walk London',
        fullDescription: ' ',
      },
      {
        id: uuidv4(),
        name: 'Shoe',
        price: '25,000',
        image: require("@/assets/9.jpg"),
        categoryId: 2,
        minidescription: 'Light Weight Unisex Black Summer Sneakers',
        productCode: 'HFGD2020',
        availability: 'In Stock',
        condition: 'New',
        brand: 'Adidas',
        fullDescription: ' '
      },
      {
        id: uuidv4(),
        name: 'Shoe',
        price: '25,000',
        image: require("@/assets/10.jpg"),
        categoryId: 1,
        minidescription: 'Light Weight Unisex Black Summer Sneakers',
        productCode: ' DSSE2020',
        availability: ' Out of Stock',
        condition: 'Old',
        brand: 'Nike',
        fullDescription: ' ',
      }
    ],

    // categories: [
    //   {
    //     id: 1,
    //     categoryName: 'Clothing'
    //   },
    //   {
    //     id: 2,
    //     categoryName: 'Shoes'
    //   },
    //   {
    //     id: 3,
    //     categoryName: 'Accessories'
    //   },
    //   {
    //     id: 4,
    //     categoryName: 'Fitness'
    //   },
    //   {
    //     id: 5,
    //     categoryName: 'Face + Body'
    //   }
    // ],

    chosenProduct: null
  },
  mutations: {
    setSelectedProductValue(state, product) {
      state.chosenProduct = product;
    }
  },
  actions: {
  },
  modules: {
  }
})
