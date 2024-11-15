   (function () {
    // Проверяем, загружено ли при
 ложение Lampa
    if (!window.Lampa) ret
    // Логируем подключение плагина
    console.log('Плагин Hentai Plugin подключен!');

    // Добавляем новый раздел "Хентай" в меню
    Lampa.Settings.main.add('hentai_plugin', {
        name: 'hentai_plugin',
        title: 'Хентай',
        component: 'hentai_component',
        onCreate: function () {
            console.log('Раздел Хентай создан');
        }
    });

    // Создаем компонент для работы с сайтом
    Lampa.Component.add('hentai_component', function () {
        this.create = function () {
            this.html = $('<div class="about"><h2>Хентай-контент</h2></div>');

            // Добавляем ссылку на сайт
            this.html.append('<div><a href="http://hentasis1.top/" target="_blank">Перейти к хентай-контенту</a></div>');

            // Можно добавить интеграцию с API сайта, если он предоставляет
        };
        this.render = function () {
            return this.html;
        };
    });

    console.log('Hentai Plugin успешно загружен!');
	})();