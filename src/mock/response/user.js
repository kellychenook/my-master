import Mock from 'mockjs'

const Random=Mock.Random;

export const getUserInfo =(options) =>{
    // console.log(options);
    // console.log(options)返回的内容包括：
    // body: "{"userId":30}"
    // type: "POST"
    // url: "/getUserInfo"
    // 创建模板对象
    const template={
        // 'firstname|2-4':'kelly',
        // 'lastname|5':'chen',
        'age|+2':100,
        // 'number|4-10':0,
        // 'floatnumber|5-9.2-4': 2,
        // 'sex|1': true,
        // 'array|1': [1,2,3,4],
        // 'array2|+1': [1,2,3,4],
        // 'array3|2-4': [1,2,3,4],
        // 'array4|3': [1,2,3,4],
        // 'name': function (){
        //     return 'KellyChen'
        // },
        // 'reg': /[0-9][a-z]/,
        // 'email':Random.email(),
        // 'email2':Mock.mock({ email: 'sdf@163.com' }),

        // 'boolean':Random.boolean(1, 4, true ),
        // 'natural':Random.natural(1, 4 ),
        // 'integer':Random.integer(1, 4  ),
        // 'float':Random.float( 1, 4 , 2, 4 ),
        // 'character':Random.character( 'lower' ), // pool => lower/upper/number/symbol
        // 'string':Random.string( 'Upper', 1, 4 ), // pool => lower/upper/number/symbol
        // 'range':Random.range( 1, 10, 3 ),

        'date':Random.date( 'yyyy-MM-dd' ),
        'time':Random.time( 'hh:mm:ss' ),
        'datetime':Random.datetime( 'yyyy-MM-dd hh:mm:ss' ),
        'now':Random.now( 'yyyy', 'a' ) // unit => year、month、week、day、hour、minute、second、week


    }
    // let i=3;
    // let array=[];
    // while (i--){
    //     array.push(template);
    // }
    return Mock.mock(template);
}