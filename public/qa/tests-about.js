/**
 * Created by onelife on 2017/11/10.
 */
suite('About page Tests',function () {
    test('page should contain link to contact page', function () {
        assert($('a[href="/contact"]').length);
    });
});

