/**
 * aqiData，存储用户输入的空气指数数据
 * 示例格式：
 * aqiData = {
 *    "北京": 90,
 *    "上海": 40
 * };
 */
var aqiData = {};
var aqiCity=document.getElementById('aqi-city-input'),
      aqiValue=document.getElementById('aqi-value-input'),
      addBtn=document.getElementById('add-btn');
/**
 * 从用户输入中获取数据，向aqiData中增加一条数据
 * 然后渲染aqi-list列表，增加新增的数据
 */
function addAqiData() {
	var city=aqiCity.value.trim(),
	value=aqiValue.value.trim();
	if(!city.match(/^[A-Za-z\u4E00-\u9FA5]+$/)){
		alert("城市名称必须为中英文！")
		return false;
	}
	if(!value.match(/^\d+$/)){
		alert("空气质量指数必须为整数！")
		return false;
	}
	aqiData[city]=value;
}

/**
 * 渲染aqi-table表格
 */
function renderAqiList() {
	var aqiTable=document.getElementById('aqi-table');
	aqiTable.innerHTML="";
	if(aqiTable.innerHTML==""){
			aqiTable.innerHTML = "<tr> <td>城市</td> <td>空气质量</td> <td>操作</td> </tr>";
		}
	for(var city in aqiData){
		
		var value=aqiData[city],
		newTr=document.createElement('tr'),
		cityTd=document.createElement('td'),
		valueTd=document.createElement('td'),
		actionTd=document.createElement('td')
		cityTd_text=document.createTextNode(city),
		valueTd_text=document.createTextNode(value);
		newTr.appendChild(cityTd);
		newTr.appendChild(valueTd);
		newTr.appendChild(actionTd);
		cityTd.appendChild(cityTd_text);
		valueTd.appendChild(valueTd_text);
		actionTd.innerHTML="<button class='delTr'>删除</button>";
		aqiTable.appendChild(newTr);

	}
}

/**
 * 点击add-btn时的处理逻辑
 * 获取用户输入，更新数据，并进行页面呈现的更新
 */
function addBtnHandle() {
  addAqiData();
  renderAqiList();
}

/**
 * 点击各个删除按钮的时候的处理逻辑
 * 获取哪个城市数据被删，删除数据，更新表格显示
 */
function delBtnHandle(target) {
  // do sth.
	var delTr=target.parentNode.parentNode;
	var delCity=delTr.firstChild.innerText;
	delete aqiData[delCity];
  	renderAqiList();
}

function init() {

  // 在这下面给add-btn绑定一个点击事件，点击时触发addBtnHandle函数
  	addBtn.onclick=addBtnHandle;
  // 想办法给aqi-table中的所有删除按钮绑定事件，触发delBtnHandle函数
  	var aqiTable=document.getElementById('aqi-table');
  	aqiTable.onclick=function(event){
  		event=window.event || event;
  		if(event.target&&event.target.nodeName==="BUTTON"){
  			delBtnHandle(event.target);
  		}
  	}
}

init();