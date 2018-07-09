import Mock from 'mockjs'

var Random=Mock.Random;
	
Random.extend({
    jingdian: function(date) {
        var constellations = ['中国的巴厘岛——花鸟岛', '超详细青岛旅游攻略', '超详细秦皇岛出游攻略',
         '小蚱，让人惊艳的小渔', '去青岛寻大海的感觉', '海南最美清凉海岛', '美丽的滨海小城大连',
          '距上海1h的绝美古镇', '大连亲子游全攻略', '最地道的城都3日游攻略', '距上海2小时的最美古镇', '不烧香只种花的最美尼姑']
        return this.pick(constellations)
    }
})



Mock.mock('http://www.baidu.com/api/a',{
    'user|12':[
        {
            "id|+1":1,
            "name":"@cname",
            "duanluo":"@cparagraph(3)",
            "content":"@cparagraph(5,10)",
            "smallimg":"@dataImage('370x200')",
            "fangkeimg":"@dataImage('240x240')",
            "title":"@jingdian",
            "bigimg":"@dataImage('640x427')",
            "hotshu":"@integer(1000,99999)"
            

            

        }
    ]
})
Random.extend({
    position: function (date) {
        var citys = ['北京', '上海', '青岛','北戴河', '大连', '成都', '杭州']
        return this.pick(citys)
    }
})

Random.extend({
    add: function (date) {
        var address = ['广东路339号', '复兴中路616弄5-14号', '妙川路800弄', '大叶公路望园路2509弄', '江苏路284弄（愚园路）', '天目中路520号', '马当路357弄']
        return this.pick(address)
    }
})
Random.extend({
    positionx: function (date) {
        var x = ['121.491300', '121.470232', '121.709916', '121.471877', '121.436829', '121.471832', '121.482512']
        return this.pick(x)
    }
})
Random.extend({
    positiony: function (date) {
        var y = ['31.238140', '31.221124', '31.182719', '30.977363', '31.226274', '31.249809', '31.219243']
        return this.pick(y)
    }
})
Random.extend({
    roomtit: function (date) {
        var titles = ['南京路 东方明珠附近 逅客公寓 欧式江景房', '陕西南路/环贸iapm 阳台木屋 一居室', '【尼斯小墅】如愿星空房 近迪士尼 浦东机场 地铁川沙站2号口', '东方商厦附近悦达欧式清新大床房', '老洋房一隅（柠檬レモン趣屋) 一居室', '近曲阜路，大悦城，人民广场典雅舒适家庭房', '地铁站旁新天地欧式复古风格 两居室', '斑马套房 市中心半小时梅奔世博园迪士尼三居整租']
        return this.pick(titles)
    }
})
Mock.mock('http://www.baidu.com/api/fangyuan', {
    'user|7': [{
        "id|+1": 1,
        "name": "@cname",
        "fangyuanimg": "@dataImage('414x262')",
        "price":"@integer(100,1000)",
        "room": "@integer(1,5)",
        "renshu": "@integer(1,5)",
        "pl": "@integer(1,50)",
        "yd": "@integer(0,50)",
        "tjs":" @integer(26,30)",
        "fangkeimg": "@dataImage('85x85')",
        "city":"@position",
        "title":"@roomtit",
        "address":"@add",
        "x": "@positionx",
        "y": "@positiony",
    }]
})

Random.extend({
    tjfytit: function (date) {
        var titles = ['毗邻人民广场 南京路外滩 舒适全南两房', '【斑马旅馆4】安亭11号地铁徐家汇迪士尼直达一居室', '靠近中山公园地铁站，龙之梦大型购物中心单间', '近徐家汇暖心单间房间', '地铁2.11号线江苏路/带庭院、榻榻米小洋房', ]
        return this.pick(titles)
    }
})

Mock.mock('http://www.baidu.com/api/tuijianfangyuan', {
    'user|6': [{
        "id|+1": 1,
        "fangyuanimg": "@dataImage('209x131')",
        "price": "@integer(100,1000)",
        "room": "@integer(1,5)",
        "renshu": "@integer(1,5)",   
        "title": "@tjfytit"
    }]
})

