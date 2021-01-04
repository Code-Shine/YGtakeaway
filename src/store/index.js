import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        cartarry: [], //存储购物车商品的数组

    },
    mutations: {
        //添加商品到购物车
        tocart(state, tag) {

            let goods = state.cartarry.find(v => v.title == tag.label)

            if (goods) {
                goods.count += 1
                goods.price += tag.price

            } else {
                state.cartarry.push({
                    title: tag.label,
                    count: 1,
                    price: tag.price
                })
            }
        },

        //购物车商品数量加一
        cartadd(state, index) {
            // 计算当前商品的单价
            let pri = state.cartarry[index].price / state.cartarry[index].count
            state.cartarry[index].count++
                // 计算当前商品的总价
                state.cartarry[index].price = pri * state.cartarry[index].count



        },
        //购物车商品数量减一
        cartremove(state, index) {
            if (state.cartarry[index].count > 1) {
                let pri = state.cartarry[index].price / state.cartarry[index].count
                state.cartarry[index].count--
                    state.cartarry[index].price = pri * state.cartarry[index].count
            } else {
                if (window.confirm('确定从购物车移除商品吗？')) {
                    state.cartarry.splice(index, 1)
                }
            }
        },
        //清空购物车
        clearcart(state) {
            state.cartarry = []
        }
    },
    actions: {},
    modules: {},
    // 计算购物车中的商品总数
    getters: {
        countsum: state => {
            let num = 0
            state.cartarry.forEach(v => {
                num += v.count
            })
            return num
        },
        // 计算商品的总价
        pricesum: state => {
            let total = 0
            state.cartarry.forEach(v => {
                total += v.price
            })
            return total
        },


    }
})