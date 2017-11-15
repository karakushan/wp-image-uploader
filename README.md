#Инструкция
* Загрузить репо в папку с темой

* подключить в ваш functions.php способом: 
```require_once "wp-image-uploader/wp-image-uploader.php";```

* для выводя поля загрузки в шаблоне темы сделать вставку:
 ```<?php wpiu_upload_field() ?>```
 
Аргументы функции
```
array(
   		'post_id'     => $post->ID,// ID записи
   		'input_class' => 'fileInput',// класс для input типа  file
   		'input_id'    => 'file1',// id для поля типа файл
   		'label_class' => 'fileLabel',// класс  для лейбла
   		'label_text'  => 'загрузить',// текст для лейбла
   		'target'      => '#image-bg',// поле в которое картинка будет загружена фоном для предпросмотра
   		'hidden_name' => 'upload_file'//название скрытого поля в которое будет загружен урл картинки
   	)
   ```
 ##P.S. предложения, комментарии приветствуются!
