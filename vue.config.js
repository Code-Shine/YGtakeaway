module.exports = {
    configureWebpack: {
        devServer: {
            //Mock编写的地方,每次更改都需要重启项目才会生效
            before(app) {
                //获取分类页的分类接口
                app.get('/api/classify', (req, res) => {
                    switch (req.query.type) {
                        case '0':
                            res.json({
                                data: [{
                                        image: 'http://pic.51yuansu.com/backgd/cover/00/57/60/5c24b783f3957.jpg!/fw/780/quality/90/unsharp/true/compress/true',
                                        label: '麻辣小龙虾',
                                        price: 30
                                    },
                                    {
                                        image: 'http://pic.51yuansu.com/backgd/cover/00/06/69/5b684ec4dd9e6.jpg!/fw/780/quality/90/unsharp/true/compress/true',
                                        label: '水果芝士披萨',
                                        price: 35

                                    },
                                    {
                                        image: 'http://pic.51yuansu.com/backgd/cover/00/06/63/5b684474935c0.jpg!/fw/780/quality/90/unsharp/true/compress/true',
                                        label: '新奥尔良鸡腿',
                                        price: 20
                                    },
                                    {
                                        image: 'http://pic.51yuansu.com/backgd/cover/00/01/69/5b51bc4b27d19.jpg!/fw/780/quality/90/unsharp/true/compress/true',
                                        label: '黑胡椒牛排',
                                        price: 50
                                    },

                                ]
                            });
                            break;
                        case '1':
                            res.json({
                                data: [{
                                        image: 'http://pic.51yuansu.com/backgd/cover/00/10/46/5b74aa1ac8ba1.jpg!/fw/780/quality/90/unsharp/true/compress/true',
                                        label: '炭烤内牛柳',
                                        price: 45
                                    },
                                    {
                                        image: 'http://pic.51yuansu.com/backgd/cover/00/15/06/5b84af7ec0c11.jpg!/fw/780/quality/90/unsharp/true/compress/true',
                                        label: '红烧牛肉面',
                                        price: 20
                                    },
                                    {
                                        image: 'http://pic.51yuansu.com/backgd/cover/00/05/94/5b64ef470a0bd.jpg!/fw/780/quality/90/unsharp/true/compress/true',
                                        label: '巨无霸汉堡',
                                        price: 30
                                    },
                                    {
                                        image: 'http://pic.51yuansu.com/backgd/cover/00/06/66/5b6849b81399a.jpg!/fw/780/quality/90/unsharp/true/compress/true',
                                        label: '夏日缤纷大披萨',
                                        price: 40
                                    },
                                ]
                            });
                            break;
                        case '2':
                            res.json({
                                data: [{
                                        image: 'http://pic.51yuansu.com/backgd/cover/00/11/52/5b77683abd62e.jpg!/fw/780/quality/90/unsharp/true/compress/true',
                                        label: '美味汉堡套餐',
                                        price: 60
                                    },
                                    {
                                        image: 'http://pic.51yuansu.com/backgd/cover/00/10/62/5b74c7edba258.jpg!/fw/780/quality/90/unsharp/true/compress/true',
                                        label: '美味牛排套餐',
                                        price: 70
                                    },
                                    {
                                        image: 'http://pic.51yuansu.com/backgd/cover/00/57/53/5c24ac44d2899.jpg!/fw/780/quality/90/unsharp/true/compress/true',
                                        label: '牛肉小面套餐',
                                        price: 45
                                    }

                                ]
                            });
                            break;
                        case '3':
                            res.json({
                                data: [{
                                        image: 'http://pic.51yuansu.com/backgd/cover/00/02/97/5b58548e78868.jpg!/fw/780/quality/90/unsharp/true/compress/true',
                                        label: '香蕴奶茶',
                                        price: 15
                                    },
                                    {
                                        image: 'http://pic.51yuansu.com/backgd/cover/00/06/90/5b68e7e40487d.jpg!/fw/780/quality/90/unsharp/true/compress/true',
                                        label: '浓醇咖啡',
                                        price: 20
                                    },
                                    {
                                        image: 'http://pic.51yuansu.com/backgd/cover/00/14/27/5b80979a7d1a1.jpg!/fw/780/quality/90/unsharp/true/compress/true',
                                        label: '健康果汁',
                                        price: 10
                                    },
                                    {
                                        image: 'http://pic.51yuansu.com/backgd/cover/00/53/69/5c182c55c869a.jpg!/fw/780/quality/90/unsharp/true/compress/true',
                                        label: '可乐汽水',
                                        price: 10
                                    },
                                ]
                            });
                            break;

                    }
                })

                //获取分类页的分类接口
                app.get('/api/getData', (req, res) => {
                    let List = [{
                            food1: 3132,
                            food2: 4122,
                            food3: 4245,
                            food4: 4232,
                            food5: 4242,
                            food6: 4252
                        },
                        {
                            food1: 3224,
                            food2: 1423,
                            food3: 2435,
                            food4: 2432,
                            food5: 3524,
                            food6: 5242
                        },
                        {
                            food1: 4234,
                            food2: 6432,
                            food3: 6424,
                            food4: 5325,
                            food5: 4256,
                            food6: 3456
                        },
                        {
                            food1: 3342,
                            food2: 4222,
                            food3: 5245,
                            food4: 2432,
                            food5: 1342,
                            food6: 3252
                        },
                        {
                            food1: 3422,
                            food2: 4422,
                            food3: 5445,
                            food4: 4324,
                            food5: 7544,
                            food6: 4255
                        },
                        {
                            food1: 3342,
                            food2: 7543,
                            food3: 6244,
                            food4: 5768,
                            food5: 5325,
                            food6: 4424
                        },
                        {
                            food1: 3932,
                            food2: 4622,
                            food3: 4248,
                            food4: 4832,
                            food5: 4762,
                            food6: 4757
                        },
                        {
                            food1: 7332,
                            food2: 5422,
                            food3: 4745,
                            food4: 7532,
                            food5: 4742,
                            food6: 4287
                        },
                    ]
                    res.json({
                        data: {
                            // 饼图
                            videoData: [{
                                    name: '麻辣小龙虾',
                                    value: 12
                                },
                                {
                                    name: '水果芝士披萨',
                                    value: 34
                                },
                                {
                                    name: '新奥尔良鸡腿',
                                    value: 56
                                },
                                {
                                    name: '黑胡椒牛排',
                                    value: 78
                                },
                                {
                                    name: '炭烤内牛柳',
                                    value: 90
                                },
                                {
                                    name: '巨无霸汉堡',
                                    value: 11
                                }
                            ],
                            // 柱状图
                            userData: [{
                                    date: '周一',
                                    new: 10,
                                    active: 100
                                },
                                {
                                    date: '周二',
                                    new: 20,
                                    active: 200
                                },
                                {
                                    date: '周三',
                                    new: 30,
                                    active: 300
                                },
                                {
                                    date: '周四',
                                    new: 40,
                                    active: 400
                                },
                                {
                                    date: '周五',
                                    new: 50,
                                    active: 50
                                },
                                {
                                    date: '周六',
                                    new: 60,
                                    active: 600
                                },
                                {
                                    date: '周日',
                                    new: 70,
                                    active: 700
                                }
                            ],
                            // 折线图
                            orderData: {
                                date: ['2020/1/1', '2020/2/1', '2020/3/1', '2020/4/1', '2020/5/1', '2020/6/1', '2020/7/1'],
                                data: List
                            },

                            // 表格数据
                            tableData: [{
                                    name: '麻辣小龙虾',
                                    todayBuy: 124,
                                    monthBuy: 3530,
                                    totalBuy: 53632
                                },
                                {
                                    name: '水果芝士披萨',
                                    todayBuy: 234,
                                    monthBuy: 3456,
                                    totalBuy: 55256
                                },
                                {
                                    name: '新奥尔良鸡腿',
                                    todayBuy: 600,
                                    monthBuy: 6543,
                                    totalBuy: 75325
                                },
                                {
                                    name: '黑胡椒牛排',
                                    todayBuy: 630,
                                    monthBuy: 5366,
                                    totalBuy: 73435
                                },
                                {
                                    name: '炭烤内牛柳',
                                    todayBuy: 130,
                                    monthBuy: 6532,
                                    totalBuy: 65464
                                },

                                {
                                    name: '红烧牛肉面',
                                    todayBuy: 420,
                                    monthBuy: 5500,
                                    totalBuy: 73532
                                },
                                {
                                    name: '巨无霸汉堡',
                                    todayBuy: 345,
                                    monthBuy: 6453,
                                    totalBuy: 42554
                                },
                                {
                                    name: '夏日缤纷大披萨',
                                    todayBuy: 232,
                                    monthBuy: 6543,
                                    totalBuy: 53463
                                }
                            ]
                        }
                    })


                })


            }
        }
    }

}