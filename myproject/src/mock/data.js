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

