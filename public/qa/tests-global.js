/**
 * Created by onelife on 2017/11/10.
 */
suite('Global Tests',function () {
    test('page has a valid title', function () {
        assert(document.title && document.title.match(/\S/) && document.title.toUpperCase() !== 'TODO');
    });
});
