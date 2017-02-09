/**
 * 迭代遍历json对象把其中的null值改为"",使用时直接调用方法nullToString(jsonData);即可，没有返回值
 * @param json
 * @returns
 */
function nullToString(json){
	console.log(typeof(json));
	if("object"==typeof(json)){
		if("undefined"==typeof(json.length)){
			for(var key in json){
				console.log(key+':'+json[key]);
				if(null===json[key]){
					json[key]="";
				}else{
					nullToString(json[key]);
				}
			}
			return;
		}else{
			for(var i=0;i<json.length;i++){
				for(var key in json[i]){
					console.log(key+':'+json[i][key]);
				}
			}
		}
	}
}
