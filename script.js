(function(){

    
var arr=[
    {id:0, text: 'JavaScript'},
    {id:1, text: 'Java'},
    {id:2, text: 'PHP'},
    {id:3, text: 'C++'},
];

function MyFilter(fn){
    var newArr = [];
    this[0].forEach((el)=> { if(fn(el)) newArr.push(el);});
    return [].slice.call(newArr, 0);
}

languages = Object.setPrototypeOf({MyFilter},Array.prototype);

languages.push(arr);


 l = languages.MyFilter(function(obj){
        return obj.text === 'JavaScript';
    });
 console.log(l);

})();