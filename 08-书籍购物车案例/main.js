const app = new Vue({
    el: '#app',
    data: {
        books: [
            {
                id: 1,
                name: ' 《算法导论》 ',
                date: '2006-9',
                price: 85.00,
                count: 1
            },
            {
                id: 2,
                name: ' 《计算机组成原理》 ',
                date: '2006-10',
                price: 38.00,
                count: 1
            },
            {
                id: 3,
                name: ' 《数据结构》 ',
                date: '2003-8',
                price: 56.00,
                count: 1
            },
            {
                id: 4,
                name: ' 《离散数学》 ',
                date: '2002-9',
                price: 99.00,
                count: 1
            }
        ]
    },
    methods: {
        increment(index) {
            this.books[index].count++
        },
        decrement(index) {
            if (this.books[index].count>1) {
                this.books[index].count--
            }
        },
        remove (index) {
            this.books.splice(index,1)
        }
    },
    filters: {
        showPrice(price) {
            return '￥'+price.toFixed(2)
        }
    },
    computed: {
        sumPrice () {
            let totalPrice = 0;
/*            for(let i=0; i<this.books.length; i++){
                totalPrice += this.books[i].count * this.books[i].price
            }*/
            for(let item of this.books){
                totalPrice+=item.price*item.count
            }
            return totalPrice
        }
    }
})