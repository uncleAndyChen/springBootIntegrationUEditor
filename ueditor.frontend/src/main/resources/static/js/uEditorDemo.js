//实例化编辑器
//建议使用工厂方法getEditor创建和引用编辑器实例，如果在某个闭包下引用该编辑器，直接调用UE.getEditor('editor')就能拿到相关的实例
var ue = UE.getEditor('editor', {
    toolbars: [
        ['fullscreen', '|', 'undo', 'redo', '|',
            'bold', 'italic', 'underline', 'fontborder', 'strikethrough', 'superscript',
            'subscript', 'removeformat', 'formatmatch', 'autotypeset', 'blockquote', 'pasteplain', '|', 'forecolor',
            'backcolor', 'insertorderedlist', 'insertunorderedlist', 'selectall', 'cleardoc', '|',
            'rowspacingtop', 'rowspacingbottom', 'lineheight', '|',
            'customstyle', 'paragraph', 'fontfamily', 'fontsize', '|',
            'directionalityltr', 'directionalityrtl', 'indent', '|',
            'justifyleft', 'justifycenter', 'justifyright', 'justifyjustify', '|', 'touppercase', 'tolowercase', '|',
            'link', 'unlink', 'anchor', '|', 'imagenone', 'imageleft', 'imageright', 'imagecenter', '|',
            'simpleupload', 'insertimage', 'emotion', 'scrawl', 'attachment', 'map',
            'pagebreak', 'template', 'background', '|',
            'horizontal', 'date', 'time', 'spechars', 'snapscreen', 'wordimage', '|',
            'inserttable', 'deletetable', 'insertparagraphbeforetable', 'insertrow', 'deleterow',
            'insertcol', 'deletecol', 'mergecells', 'mergeright', 'mergedown', 'splittocells',
            'splittorows', 'splittocols', 'charts', '|',
            'print', 'searchreplace', 'drafts', 'help']
    ],
    autoHeightEnabled: true,
    autoFloatEnabled: true,
    initialFrameWidth: 1024,
    initialFrameHeight: 500
});

function isFocus(e) {
    alert(UE.getEditor('editor').isFocus());
    UE.dom.domUtils.preventDefault(e)
}

function setblur(e) {
    UE.getEditor('editor').blur();
    UE.dom.domUtils.preventDefault(e)
}

function insertHtml() {
    var value = prompt('插入html代码', '');
    UE.getEditor('editor').execCommand('insertHtml', value)
}

function createEditor() {
    enableBtn();
    UE.getEditor('editor');
}

function getAllHtml() {
    alert(UE.getEditor('editor').getAllHtml())
}

function getContent() {
    // var arr = [];
    // arr.push("使用editor.getContent()方法可以获得编辑器的内容");
    // arr.push("内容为：");
    // arr.push(UE.getEditor('editor').getContent());
    // alert(arr.join("\n"));
    $("#divApiCallInfo").html("使用editor.getContent()方法可以获得编辑器的内容");
    $("#txtUEditorContent").val(UE.getEditor('editor').getContent())
}

function getPlainTxt() {
    var arr = [];
    arr.push("使用editor.getPlainTxt()方法可以获得编辑器的带格式的纯文本内容");
    arr.push("内容为：");
    arr.push(UE.getEditor('editor').getPlainTxt());
    alert(arr.join('\n'))
}

function setContent(isAppendTo) {
    var arr = [];
    arr.push("使用editor.setContent('欢迎使用ueditor')方法可以设置编辑器的内容");
    UE.getEditor('editor').setContent('欢迎使用ueditor', isAppendTo);
    alert(arr.join("\n"));
}

function setDisabled() {
    UE.getEditor('editor').setDisabled('fullscreen');
    disableBtn("enable");
}

function setEnabled() {
    UE.getEditor('editor').setEnabled();
    enableBtn();
}

function getText() {
    //当你点击按钮时编辑区域已经失去了焦点，如果直接用getText将不会得到内容，所以要在选回来，然后取得内容
    var range = UE.getEditor('editor').selection.getRange();
    range.select();
    var txt = UE.getEditor('editor').selection.getText();
    alert(txt)
}

function getContentTxt() {
    var arr = [];
    arr.push("使用editor.getContentTxt()方法可以获得编辑器的纯文本内容");
    arr.push("编辑器的纯文本内容为：");
    arr.push(UE.getEditor('editor').getContentTxt());
    alert(arr.join("\n"));
}

function hasContent() {
    var arr = [];
    arr.push("使用editor.hasContents()方法判断编辑器里是否有内容");
    arr.push("判断结果为：");
    arr.push(UE.getEditor('editor').hasContents());
    alert(arr.join("\n"));
}

function setFocus() {
    UE.getEditor('editor').focus();
}

function deleteEditor() {
    disableBtn();
    UE.getEditor('editor').destroy();
}

function disableBtn(str) {
    var div = document.getElementById('btns');
    var btns = UE.dom.domUtils.getElementsByTagName(div, "button");
    for (var i = 0, btn; btn = btns[i++];) {
        if (btn.id == str) {
            UE.dom.domUtils.removeAttributes(btn, ["disabled"]);
        } else {
            btn.setAttribute("disabled", "true");
        }
    }
}

function enableBtn() {
    var div = document.getElementById('btns');
    var btns = UE.dom.domUtils.getElementsByTagName(div, "button");
    for (var i = 0, btn; btn = btns[i++];) {
        UE.dom.domUtils.removeAttributes(btn, ["disabled"]);
    }
}

function getLocalData() {
    alert(UE.getEditor('editor').execCommand("getlocaldata"));
}

function clearLocalData() {
    UE.getEditor('editor').execCommand("clearlocaldata");
    alert("已清空草稿箱")
}