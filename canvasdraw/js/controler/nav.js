
(function($, global){
    "use strict";
    
    /**
     * 导航类
     * @class Nav
     * @static 
     */
    var Nav = {
       /**
        * 初始化
        * @method init 
        */
       init:function(){
           this.bindEvent();
       },
       
       /**
        * 帮顶事件
        * @event bindEvent 
        */
       bindEvent:function(){          
           var $document = $(document);
           //帮顶导出按钮事件
           $document.delegate("#nav-file-export", "click", function(e){
                var 
                    currentCanvasDom = global.painter.canvas.currentCanvasContainer.getCanvas().getCanvas(),
                    $imgView = $("#save-image").get(0);                                 
                $imgView.src = currentCanvasDom.toDataURL();
            });
            
            //绑定保存按钮事件
            $document.delegate("#nav-file-save", "click", function(e){
                var currentCanvas = global.painter.canvas.currentCanvasContainer.getCanvas();
                currentCanvas.save();//撤销上一部
                $.fn.TorangeNotice({type:'success', content:'保存成功'});//弹出提示
                window.console.log("触发保存事件");
            });
            
            //帮顶撤销按钮事件
            $document.delegate("#nav-edit-undo", "click", function(e){
                var currentCanvas = global.painter.canvas.currentCanvasContainer.getCanvas();
                currentCanvas.undo();//撤销上一部
            });
            
            //帮顶清空按钮事件
            $document.delegate("#nav-edit-clear", "click", function(e){
                var currentCanvas = global.painter.canvas.currentCanvasContainer.getCanvas();
                currentCanvas.clear();//撤销上一部            
            });
       }
    };
    
    $(document).ready(function(){
       Nav.init();//初始化导航栏 
    });
}(jQuery, window));
