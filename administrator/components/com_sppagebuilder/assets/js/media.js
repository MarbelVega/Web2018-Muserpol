!function(e){var a,d;e(document).on("click",".sp-pagebuilder-btn-media-manager",function(a){a.preventDefault(),$this=e(this),e.ajax({type:"POST",url:pagebuilder_base+"index.php?option=com_sppagebuilder&view=media&layout=modal&format=json",data:{support:$this.attr("data-support"),type:$this.attr("data-support"),target:$this.prev().attr("id")},beforeSend:function(){$this.find(".fa").show()},success:function(a){$this.find(".fa").hide(),e(a).show().appendTo(e("body").addClass("sp-pagebuilder-media-modal-open")),e(".sp-pagebuilder-media-toolbar select").chosen()}})}),e(document).on("click",".sp-pagebuilder-btn-close-modal",function(a){a.preventDefault(),e(".sp-pagebuilder-media-modal-overlay").remove(),e("body").removeClass("sp-pagebuilder-media-modal-open")}),e.fn.browseMedia=function(a){a=e.extend({type:"*",search:"",date:"",start:0,filter:!0,categories:!1,support:"image"},a);e.ajax({type:"POST",url:pagebuilder_base+"index.php?option=com_sppagebuilder&view=media&layout=browse&format=json",data:{type:a.type,date:a.date,start:a.start,search:a.search,categories:a.categories,support:a.support},beforeSend:function(){e("#sp-pagebuilder-media-loadmore").hide(),e(".sp-pagebuilder-media").remove(),e("#sp-pagebuilder-cancel-media").parent().hide(),e(".sp-pagebuilder-media-wrapper").addClass("sp-pagebuilder-media-pre-loading").prepend(e('<div class="sp-pagebuilder-loading"><i class="pbfont pbfont-pagebuilder"></i></div>'))},success:function(i){e(".sp-pagebuilder-media-wrapper").removeClass("sp-pagebuilder-media-pre-loading"),e(".sp-pagebuilder-loading").remove();var d=e.parseJSON(i);e("#sp-pagebuilder-media-types").find(".active").find(".fa").removeClass("fa-spin fa-spinner"),a.filter&&e("#sp-pagebuilder-media-filter").html(d.date_filter).trigger("liszt:updated").removeAttr().attr("data-type","browse"),a.categories&&(e("#sp-pagebuilder-media-types").html(d.media_categories),a.support&&(e("#sp-pagebuilder-media-types").find(">li").removeClass("active"),e("#sp-pagebuilder-media-types").find(".sp-pagebuilder-media-type-"+a.support).addClass("active"))),d.count?e("#sp-pagebuilder-media-manager, #sp-pagebuilder-media-modal").removeClass("sp-pagebuilder-media-manager-empty"):e("#sp-pagebuilder-media-manager, #sp-pagebuilder-media-modal").addClass("sp-pagebuilder-media-manager-empty"),e(".sp-pagebuilder-media-wrapper").prepend(d.output),d.loadmore?e("#sp-pagebuilder-media-loadmore").removeAttr("style"):e("#sp-pagebuilder-media-loadmore").hide()}})},e.fn.browseFolders=function(a){a=e.extend({path:"/images",filter:!0},a);return this.each(function(){e.ajax({url:pagebuilder_base+"index.php?option=com_sppagebuilder&view=media&layout=folders&format=json",type:"POST",data:{path:a.path},beforeSend:function(){a.filter&&e("#sp-pagebuilder-media-filter").removeAttr().attr("data-type","folders").val(a.path).parent().show(),e("#sp-pagebuilder-cancel-media, #sp-pagebuilder-delete-media").parent().hide(),e("#sp-pagebuilder-media-loadmore").hide(),e(".sp-pagebuilder-media").remove(),e(".sp-pagebuilder-media-wrapper").addClass("sp-pagebuilder-media-pre-loading").prepend(e('<div class="sp-pagebuilder-loading"><i class="pbfont pbfont-pagebuilder"></i></div>'))},success:function(i){e(".sp-pagebuilder-media-wrapper").removeClass("sp-pagebuilder-media-pre-loading"),e(".sp-pagebuilder-loading").remove();var d=e.parseJSON(i);d.count?e("#sp-pagebuilder-media-manager, #sp-pagebuilder-media-modal").removeClass("sp-pagebuilder-media-manager-empty"):e("#sp-pagebuilder-media-manager, #sp-pagebuilder-media-modal").addClass("sp-pagebuilder-media-manager-empty"),e("#sp-pagebuilder-media-types").find(".active").find(".fa").removeClass("fa-spin fa-spinner"),a.filter&&e("#sp-pagebuilder-media-filter").html(d.folders_tree).trigger("liszt:updated").removeAttr().attr("data-type","folders"),e(".sp-pagebuilder-media-wrapper").prepend(d.output)}})})},e(document).on("click",".sp-pagebuilder-media-to-folder-back",function(a){a.preventDefault(),e(".sp-pagebuilder-media-btn-tools").hide(),e(this).browseFolders({path:e(this).data("path")})}),e(document).on("click",".sp-pagebuilder-media-to-folder",function(a){a.preventDefault(),e(".sp-pagebuilder-media").find(">li.sp-pagebuilder-media-item").removeClass("selected"),e(".sp-pagebuilder-media").find(">li.sp-pagebuilder-media-folder").removeClass("folder-selected"),e(this).closest("li.sp-pagebuilder-media-folder").addClass("folder-selected")}),e(document).on("dblclick",".sp-pagebuilder-media-to-folder",function(a){a.preventDefault(),e(".sp-pagebuilder-media-btn-tools").hide(),e(this).browseFolders({path:e(this).attr("data-path")})}),e.fn.uploadMedia=function(a){a=e.extend({index:"",data:""},a);e.ajax({type:"POST",url:pagebuilder_base+"index.php?option=com_sppagebuilder&task=media.upload_media",data:a.data,contentType:!1,cache:!1,processData:!1,beforeSend:function(){var i=e(".sp-pagebuilder-media").find(".sp-pagebuilder-media-folder:not(.sp-pagebuilder-media-to-folder-back)"),d=e(".sp-pagebuilder-media").find(".sp-pagebuilder-media-to-folder-back"),p=e('<li id="'+a.index+'" class="sp-pagebuilder-media-file-loader"><div><div><div><div><div class="sp-pagebuilder-media-upload-progress"><div><div class="sp-pagebuilder-progress"><div class="sp-pagebuilder-progress-bar" style="width: 0%;"></div></div></div></div></div></div></div><span class="sp-pagebuilder-media-title"><i class="fa fa-circle-o-notch fa-spin"></i> '+Joomla.JText._("COM_SPPAGEBUILDER_MEDIA_MANAGER_MEDIA_UPLOADING")+"...</span></div></li>");i.length?i.last().after(p):d.length?d.first().after(p):e(".sp-pagebuilder-media").prepend(p),e("#sp-pagebuilder-media-manager, #sp-pagebuilder-media-modal").removeClass("sp-pagebuilder-media-manager-empty")},success:function(i){var d=e.parseJSON(i);d.status?e(".sp-pagebuilder-media").find("#"+a.index).removeAttr("id").removeClass('sp-pagebuilder-media-file-loader"').addClass("sp-pagebuilder-media-item").attr("data-id",d.id).attr("data-src",d.src).attr("data-path",d.path).empty().html(d.output):(e(".sp-pagebuilder-media").find("#"+a.index).remove(),alert(d.output)),e(".sp-pagebuilder-media").find(">li").length?e("#sp-pagebuilder-media-manager, #sp-pagebuilder-media-modal").removeClass("sp-pagebuilder-media-manager-empty"):e("#sp-pagebuilder-media-manager, #sp-pagebuilder-media-modal").addClass("sp-pagebuilder-media-manager-empty")},xhr:function(){return myXhr=e.ajaxSettings.xhr(),myXhr.upload&&myXhr.upload.addEventListener("progress",function(i){e(".sp-pagebuilder-media").find("#"+a.index).find(".sp-pagebuilder-progress-bar").css("width",Math.floor(i.loaded/i.total*100)+"%").text(Math.floor(i.loaded/i.total*100)+"%")},!1),myXhr}})},e(document).on("keyup","#sp-pagebuilder-media-search-input",function(i){if(i.preventDefault(),""!=e(this).val()?e(".sp-pagebuilder-clear-search").show():e(".sp-pagebuilder-clear-search").hide(),e(this).val()!=a){var p=e(this).val().trim();d&&clearTimeout(d),d=setTimeout(function(){p?e(this).browseMedia({search:p,filter:!0,date:e("#sp-pagebuilder-media-filter").val(),type:e("#sp-pagebuilder-media-types").find(".active > a").attr("data-type"),support:"all"}):e(this).browseMedia({filter:!0,date:e("#sp-pagebuilder-media-filter").val(),type:e("#sp-pagebuilder-media-types").find(".active > a").attr("data-type"),support:"all"})},300),a=e(this).val()}}),e(document).on("click",".sp-pagebuilder-clear-search",function(a){a.preventDefault(),e("#sp-pagebuilder-media-search-input").val("").focus().keyup()}),e(document).on("click","#sp-pagebuilder-media-search-input",function(e){e.preventDefault()}),e(document).on("click",".sp-pagebuilder-browse-media",function(a){a.preventDefault();var i=e(this);if(e(this).closest("#sp-pagebuilder-media-types").children().removeClass("active"),e(this).parent().addClass("active"),e(this).find(".fa").addClass("fa-spinner fa-spin"),e("#sp-pagebuilder-upload-media").parent().show(),"folders"==i.attr("data-type"))e(".sp-pagebuilder-media-search").parent().hide(),e("#sp-pagebuilder-media-create-folder").parent().show(),e(this).browseFolders();else{e(".sp-pagebuilder-media-search").parent().show(),e("#sp-pagebuilder-media-create-folder").parent().hide();var d="all";e("#sp-pagebuilder-media-modal").length&&(d=e("#sp-pagebuilder-media-modal").data("support")),e(this).browseMedia({type:i.data("type"),support:d,element:i})}}),e(document).on("click","#sp-pagebuilder-media-loadmore",function(a){a.preventDefault();var i=e(this),d=e("#sp-pagebuilder-media-search-input").val().trim(),p="all";e("#sp-pagebuilder-media-modal").length&&(p=e("#sp-pagebuilder-media-modal").data("support")),e.ajax({type:"POST",url:pagebuilder_base+"index.php?option=com_sppagebuilder&view=media&layout=browse&format=json",data:{search:d,type:e("#sp-pagebuilder-media-types").find(".active > a").attr("data-type"),support:p,date:e("#sp-pagebuilder-media-filter").val(),start:e(".sp-pagebuilder-media").find(">li").length},beforeSend:function(){i.find(".fa").removeClass("fa-refresh").addClass("fa-spinner fa-spin")},success:function(a){try{var d=e.parseJSON(a);i.find(".fa").removeClass("fa-spinner fa-spin").addClass("fa-refresh"),e(".sp-pagebuilder-media").append(d.output),d.loadmore?e("#sp-pagebuilder-media-loadmore").parent().removeAttr("style"):e("#sp-pagebuilder-media-loadmore").parent().hide()}catch(i){e(".sp-pagebuilder-media-body-inner").html(a)}}})}),e(document).on("change","#sp-pagebuilder-media-filter",function(a){a.preventDefault(),"folders"==e(this).attr("data-type")?e(this).browseFolders({path:e(this).val()}):e(this).browseMedia({filter:!1,date:e(this).val(),type:e("#sp-pagebuilder-media-types").find(".active > a").attr("data-type"),support:"all"})}),e(document).on("click",".sp-pagebuilder-media > li.sp-pagebuilder-media-item",function(a){a.preventDefault();var i=e(this);e(".sp-pagebuilder-media").find(">li.sp-pagebuilder-media-folder").removeClass("folder-selected"),i.hasClass("sp-pagebuilder-media-unsupported")||(null!=e("#sp-pagebuilder-media-modal")&&e("#sp-pagebuilder-media-modal .sp-pagebuilder-media > li.sp-pagebuilder-media-item").not(this).each(function(){e(this).removeClass("selected")}),e(this).hasClass("selected")?e(this).removeClass("selected"):e(this).addClass("selected"),e(".sp-pagebuilder-media > li.sp-pagebuilder-media-item.selected").length?(e("#sp-pagebuilder-upload-media, .sp-pagebuilder-media-search, #sp-pagebuilder-media-filter").parent().hide(),e("#sp-pagebuilder-cancel-media, #sp-pagebuilder-delete-media").parent().show()):(e("#sp-pagebuilder-cancel-media, #sp-pagebuilder-delete-media").parent().hide(),e("#sp-pagebuilder-upload-media, .sp-pagebuilder-media-search, #sp-pagebuilder-media-filter").parent().show()))}),e(document).on("click","#sp-pagebuilder-insert-media",function(a){a.preventDefault();var i=e("#sp-pagebuilder-media-modal").attr("data-support"),d=e("#"+e("#sp-pagebuilder-media-modal").attr("data-target"));"image"==i&&d.prev(".sp-pagebuilder-media-preview").removeClass("sp-pagebuilder-media-no-image").attr("src",e(".sp-pagebuilder-media > li.sp-pagebuilder-media-item.selected").data("src")),d.val(e(".sp-pagebuilder-media > li.sp-pagebuilder-media-item.selected").data("path")),d.trigger("change"),e(".sp-pagebuilder-media-modal-overlay").remove(),e("body").removeClass("sp-pagebuilder-media-modal-open")}),e(document).on("click",".sp-pagebuilder-btn-clear-media",function(a){a.preventDefault();var i=e(this);i.siblings(".sp-pagebuilder-media-preview").addClass("sp-pagebuilder-media-no-image").removeAttr("src"),i.siblings("input").val(""),i.siblings("input").trigger("change")}),e(document).on("click","#sp-pagebuilder-cancel-media",function(a){a.preventDefault(),e(".sp-pagebuilder-media > li.sp-pagebuilder-media-item.selected").removeClass("selected"),e("#sp-pagebuilder-cancel-media, #sp-pagebuilder-delete-media").parent().hide(),e("#sp-pagebuilder-upload-media, .sp-pagebuilder-media-search, #sp-pagebuilder-media-filter").parent().show(),"browse"==e("#sp-pagebuilder-media-filter").attr("data-type")?e(".sp-pagebuilder-media-search").parent().show():e(".sp-pagebuilder-media-search").parent().hide()}),e(document).on("click","#sp-pagebuilder-upload-media, #sp-pagebuilder-upload-media-empty",function(a){a.preventDefault(),e("#sp-pagebuilder-media-input-file").click()}),e(document).on("change","#sp-pagebuilder-media-input-file",function(a){a.preventDefault();var d=e(this),p=e(this).prop("files"),r=new FormData;for(i=0;i<p.length;i++)r.append("file",p[i]),"folders"==e("#sp-pagebuilder-media-filter").attr("data-type")&&null!=e("#sp-pagebuilder-media-filter").val()&&r.append("folder",e("#sp-pagebuilder-media-filter").val()),e(this).uploadMedia({data:r,index:"media-id-"+Math.floor(1e6*Math.random()+1)});d.val("")}),e(document).on("dragenter","#sp-pagebuilder-media-manager",function(a){a.preventDefault(),a.stopPropagation(),e(this).addClass("sp-pagebuilder-media-drop")}),e(document).on("mouseleave","#sp-pagebuilder-media-manager",function(a){a.preventDefault(),a.stopPropagation(),e(this).removeClass("sp-pagebuilder-media-drop")}),e(document).on("dragover","#sp-pagebuilder-media-manager",function(e){e.preventDefault()}),e(document).on("drop","#sp-pagebuilder-media-manager",function(a){a.preventDefault(),a.stopPropagation(),e(this).removeClass("sp-pagebuilder-media-drop");var d=a.originalEvent.dataTransfer.files;for(i=0;i<d.length;i++){var p=new FormData;p.append("file",d[i]),"folders"==e("#sp-pagebuilder-media-filter").attr("data-type")&&null!=e("#sp-pagebuilder-media-filter").val()&&p.append("folder",e("#sp-pagebuilder-media-filter").val()),e(this).uploadMedia({data:p,index:"media-id-"+Math.floor(1e6*Math.random()+1)})}}),e(document).on("click","#sp-pagebuilder-delete-media",function(a){a.preventDefault();e(this);var i=e(".sp-pagebuilder-media").find("li.sp-pagebuilder-media-item.selected");1==confirm(Joomla.JText._("COM_SPPAGEBUILDER_MEDIA_MANAGER_CONFIRM_DELETE"))&&i.each(function(a,d){e.ajax({type:"POST",url:pagebuilder_base+"index.php?option=com_sppagebuilder&task=media.delete_media",data:{id:e(d).data("id")},success:function(a){var d=e.parseJSON(a);d.status?(i.remove(),e("#sp-pagebuilder-cancel-media, #sp-pagebuilder-delete-media").parent().hide(),e("#sp-pagebuilder-upload-media, .sp-pagebuilder-media-search, #sp-pagebuilder-media-filter").parent().show()):alert(d.output)}})})}),e(document).on("click","#sp-pagebuilder-media-create-folder",function(a){a.preventDefault();e(this);var i="/images";null!=e("#sp-pagebuilder-media-filter").val()&&"folders"==e("#sp-pagebuilder-media-filter").attr("data-type")&&(i=e("#sp-pagebuilder-media-filter").val());var d=prompt(Joomla.JText._("COM_SPPAGEBUILDER_MEDIA_MANAGER_ENTER_DIRECTORY_NAME"));null!=d&&e.ajax({type:"POST",url:pagebuilder_base+"index.php?option=com_sppagebuilder&task=media.create_folder",data:{folder:i+"/"+d},success:function(a){try{var i=e.parseJSON(a);if(i.status){var d=e(".sp-pagebuilder-media").find(".sp-pagebuilder-media-folder:not(.sp-pagebuilder-media-to-folder-back)");d.length?d.first().before(i.output):e(".sp-pagebuilder-media").append(i.output)}else alert(i.output)}catch(i){e(".sp-pagebuilder-media-body-inner").html(a)}}})})}(jQuery);