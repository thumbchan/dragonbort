

//获取dom
var g=function(id){
	return document.getElementById(id);
}

//时间轴对象构造器
var Timeline=function(){
	this.order=[];
	this.add=function(timeout,func,log){
		this.order.push({
			timeout:timeout,
			func:func,
			log:log
		})
		
	}
	this.start=function(){
		for(s in this.order){
			(function(me){
				var fn=me.func;
				var timeout=me.timeout;
				var log=me.log;
				
				setTimeout(fn,timeout);
				setTimeout(function(){
					
				},timeout);
			})(this.order[s]);
		}
	}
}

//初始场景
var s1=new Timeline();
//粽子展开场景
var s2=new Timeline();
//粽子旋转场景
var s3=new Timeline();


s1.add(1,function(){
	g('c_zongzi_box').className+="c_zongzi_box_rock";
	g('c_shenzi').onclick=function(){
		s2.start();
	}
})
s2.add(1,function(){
	g('c_zongzi_box').className="c_zongzi_box";
	g('text').className+="text_in"
})
s2.add(100,function(){
	g('c_shenzi').className="c_shenzi2"
})
s2.add(500,function(){
	g('c_shenzi').className="c_shenzi3"
})
s2.add(1000,function(){
	g('c_shenzi').className="c_shenzi4"
})
s2.add(1500,function(){
	g('c_shenzi').className="c_shenzi0"
})

s2.add(2000,function(){
	g('c_zongzi').className="c_zongzi c_zongzi_out";
	g('c_zongzi_rou').className+="c_zongzi_rou_in";
})



s1.start();






//s.add(1000,function(){
//	console.log(First)
//} 'int');//时间 函数内容 日志。
//s.add(1500,function(){
//	console.log(second)
//} 'int');
//s.start();
