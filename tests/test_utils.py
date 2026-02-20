from pressoir.utils import strip_html_comments, strip_html_tags


def test_strip_html_comments():
    assert strip_html_comments("foo <!-- bar --> baz") == "foo  baz"
    assert strip_html_comments("") == ""


def test_strip_html_tags():
    assert strip_html_tags("foo <em>bar</em> baz") == "foo bar baz"
    assert strip_html_tags("") == ""
