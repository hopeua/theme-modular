$(function () {

    $('.similar-episodes').hopeLoaderBlock({
        render: function (template, data) {
            var src = 'img/' + data.episodeImg;
            template.find('.similar-episodes-item-video-image__wide').attr('src', src);
            template.find('.similar-episodes-item-description-time').text(moment.unix(data.episodeDate).format('DD.MM.YYYY'));
            template.find('.similar-episodes-item-description-title').text(data.episodeTitle);
            template.find('.similar-episodes-item-description-show').text(data.episodeShow);

            return template;
        },
        url: 'ajax/similar-episodes'
    });

    $('.page-video').hopeSliderPage();

});








//$(function () {
//    var episodeCache = {};
//    var currentCode = null;
//    var nextCode = null;
//    var nextObject = null;
//    var prevCode = null;
//    var prevObject = null;
//    var arrowLeft = $('.page-video-content-arrow__left');
//    var arrowRight = $('.page-video-content-arrow__right');
//    var template = null;
//
//    var loadJsonByPage = function ($object) {
//        var currentJson = JSON.parse($object.html());
//        currentCode = currentJson.episode.code;
//        var currentObject = currentJson;
//
//        episodeCache[currentCode] = currentObject;
//
//        var next = currentObject.next;
//        var prev = currentObject.prev;
//
//        arrowRight.data('code', next);
//        arrowLeft.data('code', prev);
//    };
//
//    var loadJsonByCode = function () {
//
//        $.each(arguments, function (index, item) {
//
//            if (episodeCache.hasOwnProperty(item)) {
//                return;
//            }
//
//            var url = 'ajax/' + item + '.json';
//
//            $.getJSON(url, function (data) {
//                episodeCache[item] = data;
//            });
//
//        });
//    };
//
//    var loadTemplate = function () {
//        template = $('.page-video-wrap > .container').clone();
//        template.addClass('page-video-new');
//    };
//
//    var hideArrow = function ($object) {
//        $object.animate({
//            'opacity': 0
//        }, 200, function () {
//            $object.css('display', 'none');
//        });
//    };
//
//    var showArrow = function ($object) {
//        $object.css('display', 'block');
//        $object.animate({
//            'opacity': 1
//        }, 200);
//    };
//
//    var movePage = function (place, direction) {
//
//        if (direction == 'left') {
//            console.log('left');
//            place.css('margin-left', '-100%');
//            place.animate({
//                'margin-left': '+=100%'
//            }, 300, function () {
//                $('.page-video-new').removeClass('page-video-new');
//                place.find('.container').eq(1).remove();
//            });
//        } else if (direction == 'right') {
//            place.animate({
//                'margin-left': '-=100%'
//            }, 300, function () {
//                $('.page-video-new').removeClass('page-video-new');
//                place.find('.container').eq(0).remove();
//                place.css('margin-left', '0');
//            });
//        }
//    };
//
//    var renderPage = function (code, direction) {
//
//        var place = $('.page-video-wrap');
//
//        var currentObject = episodeCache[code].episode;
//
//        template.find('.pv-episode-title').text(currentObject.title);
//        $('.pv-episode-title').text(currentObject.title);
//        template.find('.pv-episode-show').text(currentObject.show);
//        $('.pv-episode-show').text(currentObject.show);
//        var imgSrc = 'img/' + currentObject.img;
//        template.find('.pv-episode-img').attr('src', imgSrc);
//        template.find('.pv-episode-description').text(currentObject.description);
//        template.find('.pv-episode-date').text(moment.unix(currentObject.date).format('DD.MM.YYYY'));
//        template.find('.pv-episode-views').text(currentObject.views);
//
//
//        if (direction == 'right') {
//            place.append(template.clone());
//            movePage(place, 'right');
//        } else if (direction == 'left') {
//            place.prepend(template.clone());
//            movePage(place, 'left');
//        }
//    };
//
//    loadJsonByPage($('#dataCurrentJson'));
//    loadJsonByCode('MBCU00215', 'MBCU00415');
//    loadTemplate();
//
//    arrowRight.click(function (event) {
//
//        event.preventDefault();
//
//        showArrow(arrowLeft);
//
//        var nextCode = episodeCache[currentCode].next;
//
//        renderPage(nextCode, 'right');
//        currentCode = nextCode;
//
//        if (episodeCache[nextCode].next) {
//            loadJsonByCode(episodeCache[nextCode].next);
//        } else {
//            hideArrow($(this));
//        }
//
//    });
//
//    arrowLeft.click(function (event) {
//
//        event.preventDefault();
//
//        showArrow(arrowRight);
//
//        var nextCode = episodeCache[currentCode].prev;
//
//        renderPage(nextCode, 'left');
//        currentCode = nextCode;
//
//        if (episodeCache[nextCode].prev) {
//            loadJsonByCode(episodeCache[nextCode].prev);
//        } else {
//            hideArrow($(this));
//        }
//
//    });
//
//
//
//
//});