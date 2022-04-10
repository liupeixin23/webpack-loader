module.exports = function(content, map, meta){
    console.log('test-loader',content);
    return content;
}
module.exports.pitch = function(){
    console.log('我是test-loader的pitch方法');
}