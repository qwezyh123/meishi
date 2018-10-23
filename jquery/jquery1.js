 $(document).ready(function () {

                $("#uname").blur(function () {

                    var uname = $(this).val();
                    $(this).next().removeClass();
                    $("#unameGroup").removeClass("has-success has-error has-warning");
                    $("#alert_uname").removeClass("alert-danger alert-warning hide show");

                    if (uname == "") {
                        $("#unameGroup").addClass("has-warning");
                        $(this).next().addClass("glyphicon glyphicon-warning-sign form-control-feedback");
                         $("#alert_uname").addClass("alert-warning show");
                        return;
                    }

                    var reg = /^[a-zA-Z_0-9]{6,10}$/;
                    if (!reg.test(uname)) {
                        $("#unameGroup").addClass("has-error");
                        $(this).next().addClass("glyphicon glyphicon-remove form-control-feedback");
                        $("#alert_uname").addClass("alert-danger show");
                        return;
                    }

                    $("#unameGroup").addClass("has-success");
                    $(this).next().addClass("glyphicon glyphicon-ok form-control-feedback");
                    $("#alert_uname").addClass("hide");
                });

                $("#pwd").blur(function () {

                    var uname = $(this).val();
                    $(this).next().removeClass();
                    $("#pwdGroup").removeClass("has-success has-error has-warning");
                    $("#alert_pwd").removeClass("alert-danger alert-warning hide show");

                    if (uname == "") {
                        $("#pwdGroup").addClass("has-warning");
                        $(this).next().addClass("glyphicon glyphicon-warning-sign form-control-feedback");
                         $("#alert_pwd").addClass("alert-warning show");
                        return;
                    }

                    var reg = /^[0-9]{6,8}$/;
                    if (!reg.test(uname)) {
                        $("#pwdGroup").addClass("has-error");
                        $(this).next().addClass("glyphicon glyphicon-remove form-control-feedback");
                        $("#alert_pwd").addClass("alert-danger show");
                        return;
                    }

                    $("#pwdGroup").addClass("has-success");
                    $(this).next().addClass("glyphicon glyphicon-ok form-control-feedback");
                    $("#alert_pwd").addClass("hide");
                });
            });
             // 也可通过carousel函数操作选中的轮播容器的轮播
    $(document).ready(function () {
      $(".carousel").carousel({ interval: 3000 });
      //选中.carousel对应的轮播容器，调用carousel()函数启动轮播
      //可以在大括号里给出一些参数，interval:3000 自动轮播间隔为3000毫秒
      
        $(".div1 a ").click(function(e){
            $(".active1").removeClass("active1");
            $(this).addClass("active1");
            e.preventDefault(); //阻止默认事件
				//点击超链接，默认是打开链接到的图片或页面
			$("#div2>div").fadeOut(100); /*先让所有的div淡出*/
			var divId=$(this).attr("href"); //这是this指的是当前点击的a元素
			    //如果你点击的是第3个a，那么获取的href属性的值就是"#div3"
			$(divId).fadeIn(300);
        
        });
        //切换单行条菜单的active
         $("#navDiv li").click(function(){
          $("#navDiv li").removeClass("active");
          $(this).addClass("active");
        });
    });