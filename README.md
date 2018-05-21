# springBoot 集成百度富文本框 UEditor
## 后台项目
### 关键依赖
```xml
        <dependency>
            <groupId>org.json</groupId>
            <artifactId>json</artifactId>
            <version>20180130</version>
        </dependency>
        <dependency>
            <groupId>commons-fileupload</groupId>
            <artifactId>commons-fileupload</artifactId>
            <version>1.3.3</version>
        </dependency>
        <dependency>
            <groupId>commons-codec</groupId>
            <artifactId>commons-codec</artifactId>
            <version>1.11</version>
        </dependency>
        <dependency>
            <groupId>javax.servlet</groupId>
            <artifactId>javax.servlet-api</artifactId>
            <version>3.1.0</version>
        </dependency>
        <dependency>
            <groupId>org.springframework</groupId>
            <artifactId>spring-web</artifactId>
            <version>5.0.6.RELEASE</version>
            <scope>compile</scope>
        </dependency>
```

### 关键配置项
ConfigManager.configFileName
```
private static final String configFileName = "static/uEditor/config.json";
```

## 前台项目
### 关键配置项
static/uEditor/config.json
```
basePath":"C:/temp",/* 上传文件的基本路径，需要与application.yml配置的【uEditor.upload.path】保持一致 */
"imagePathFormat": "/uEditorUploadImages/{yyyy}{mm}{dd}/{time}{rand:6}", /* 上传保存路径,可以自定义保存路径和文件名格式 */
```

application.yml
```
uEditor.upload.path: C:/temp # 需要与 static/uEditor/config.json 的配置项【basePath】保持一致。
spring.mvc.static-path-pattern: /**
spring.resources.static-locations: classpath:/META-INF/resources/,classpath:/resources/,classpath:/static/,classpath:/public/,file:${uEditor.upload.path}
```

## Demo 页
见 uEditorDemo.html 以及对应的 uEditorDemo.js
获取文本框录入的数据，请见 uEditorDemo.js 文件下的 getContent 方法：
```
function getContent() {
    // var arr = [];
    // arr.push("使用editor.getContent()方法可以获得编辑器的内容");
    // arr.push("内容为：");
    // arr.push(UE.getEditor('editor').getContent());
    // alert(arr.join("\n"));
    $("#divApiCallInfo").html("使用editor.getContent()方法可以获得编辑器的内容");
    $("#txtUEditorContent").val(UE.getEditor('editor').getContent())
}
```