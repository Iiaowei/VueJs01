const app = new Vue({
  el: '#app',
  data: {
    books: [
      {
        id: 1,
        name: "《算法导论》",
        date: '2009-09',
        price: 89.00,
        count: 1
      },
      {
        id: 2,
        name: "《UNIX编程艺术》",
        date: '2019-09',
        price: 89.00,
        count: 1
      },
      {
        id: 3,
        name: "《编程珠玑》",
        date: '2009-09',
        price: 89.00,
        count: 1
      },
      {
        id: 5,
        name: "《操作系统》",
        date: '2009-09',
        price: 89.00,
        count: 1
      }
    ]
  },
  methods: {
    increment(index) {
      this.books[index].count++
    },
    decrement(index) {
      this.books[index].count--
    },
    remove(index) {
      this.books.splice(index, 1)
    }
  },
  computed: {
    totalPrice() {
      let totalPrice = 0
      for (let i = 0; i < this.books.length; i++) {
        totalPrice += this.books[i].price * this.books[i].count
      }
      return totalPrice
    }
  },
  filters: {
    showPrice(price) {
      return '￥' + price.toFixed(2)
    }
  }
})