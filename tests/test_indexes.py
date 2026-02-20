from collections import defaultdict

from selectolax.parser import HTMLParser

from pressoir.indexes import collect_index_and_update_attrs, generate_index
from pressoir.utils import generate_md5


def test_index_with_idsp():
    chapter_id = "chapitre1"
    html_content = '<span class="personnalite" data-idsp="Axel Guïoux">Axel</span>'
    html = HTMLParser(html_content)
    ids = defaultdict(dict)
    refs = defaultdict(dict)
    kind = "personnalite"
    collect_index_and_update_attrs(chapter_id, html, kind, ids, refs)
    expected_md5 = generate_md5("Axel Guïoux")
    assert html.body.child.html == (
        f'<span data-idsp="Axel Guïoux" '
        f'class="personnalite personnalite-{expected_md5}"'
        f' id="personnalite-{expected_md5}">Axel</span>'
    )
    assert ids == {
        "personnalite": {
            "Axel Guïoux": {
                "glossaire_id": None,
                "idsp_id": f"personnalite-{expected_md5}",
            }
        }
    }
    assert refs == {"Axel Guïoux": {"chapitre1": 1}}
    assert (
        generate_index(ids, refs, {kind: "Personnalités"})
        == """
<h2>Personnalités</h2>
<ul class="full-width">
<li id="personnalite-2ea4e6658d35ca3a067d9b05695450a2" class="indexnp-entry">
    <span class="text">
        Axel Guïoux
    </span>
    <span class="dots"></span>
    <span class="number">
    <a href="chapitre1.html#personnalite-2ea4e6658d35ca3a067d9b05695450a2">chapitre1</a> (1 <abbr title="occurences">occ.</abbr>)
    </span>
</li>
</ul>"""
    )


def test_index_without_idsp():
    chapter_id = "chapitre1"
    html_content = '<span class="personnalite">Axel Guïoux</span>'
    html = HTMLParser(html_content)
    ids = defaultdict(dict)
    refs = defaultdict(dict)
    kind = "personnalite"
    collect_index_and_update_attrs(chapter_id, html, kind, ids, refs)
    expected_md5 = generate_md5("Axel Guïoux")
    assert (
        html.body.child.html
        == f'<span class="personnalite personnalite-{expected_md5}" id="personnalite-{expected_md5}">Axel Guïoux</span>'
    )
    assert ids == {
        "personnalite": {
            "Axel Guïoux": {
                "glossaire_id": None,
                "idsp_id": f"personnalite-{expected_md5}",
            }
        }
    }
    assert refs == {"Axel Guïoux": {"chapitre1": 1}}
    assert (
        generate_index(ids, refs, {kind: "Personnalités"})
        == """
<h2>Personnalités</h2>
<ul class="full-width">
<li id="personnalite-2ea4e6658d35ca3a067d9b05695450a2" class="indexnp-entry">
    <span class="text">
        Axel Guïoux
    </span>
    <span class="dots"></span>
    <span class="number">
    <a href="chapitre1.html#personnalite-2ea4e6658d35ca3a067d9b05695450a2">chapitre1</a> (1 <abbr title="occurences">occ.</abbr>)
    </span>
</li>
</ul>"""
    )


def test_index_with_repetition():
    chapter_id = "chapitre1"
    html_content = (
        '<span class="personnalite" data-idsp="Axel Guïoux">Axel</span>'
        + '<span class="personnalite" data-idsp="Axel Guïoux">Axel Guïoux</span>'
    )
    html = HTMLParser(html_content)
    ids = defaultdict(dict)
    refs = defaultdict(dict)
    kind = "personnalite"
    collect_index_and_update_attrs(chapter_id, html, kind, ids, refs)
    expected_md5 = generate_md5("Axel Guïoux")
    assert (
        html.body.child.html
        == f'<span data-idsp="Axel Guïoux" class="personnalite personnalite-{expected_md5}" id="personnalite-{expected_md5}">Axel</span>'
    )
    assert ids == {
        "personnalite": {
            "Axel Guïoux": {
                "glossaire_id": None,
                "idsp_id": f"personnalite-{expected_md5}",
            }
        }
    }
    assert refs == {"Axel Guïoux": {"chapitre1": 2}}
    assert (
        generate_index(ids, refs, {kind: "Personnalités"})
        == """
<h2>Personnalités</h2>
<ul class="full-width">
<li id="personnalite-2ea4e6658d35ca3a067d9b05695450a2" class="indexnp-entry">
    <span class="text">
        Axel Guïoux
    </span>
    <span class="dots"></span>
    <span class="number">
    <a href="chapitre1.html#personnalite-2ea4e6658d35ca3a067d9b05695450a2">chapitre1</a> (2 <abbr title="occurences">occ.</abbr>)
    </span>
</li>
</ul>"""
    )


def test_index_with_emphasis():
    chapter_id = "chapitre1"
    html_content = '<span class="personnalite" data-idsp="*Axel Guïoux*">Axel</span>'
    html = HTMLParser(html_content)
    ids = defaultdict(dict)
    refs = defaultdict(dict)
    kind = "personnalite"
    collect_index_and_update_attrs(chapter_id, html, kind, ids, refs)
    expected_md5 = generate_md5("*Axel Guïoux*")
    assert (
        html.body.child.html
        == f'<span data-idsp="*Axel Guïoux*" class="personnalite personnalite-{expected_md5}" id="personnalite-{expected_md5}">Axel</span>'
    )
    assert ids == {
        "personnalite": {
            "*Axel Guïoux*": {
                "glossaire_id": None,
                "idsp_id": f"personnalite-{expected_md5}",
            }
        }
    }
    assert refs == {"*Axel Guïoux*": {"chapitre1": 1}}
    assert (
        generate_index(ids, refs, {kind: "Personnalités"})
        == """
<h2>Personnalités</h2>
<ul class="full-width">
<li id="personnalite-50c1855798bf016ea398b31aa50df408" class="indexnp-entry">
    <span class="text">
        <em>Axel Guïoux</em>
    </span>
    <span class="dots"></span>
    <span class="number">
    <a href="chapitre1.html#personnalite-50c1855798bf016ea398b31aa50df408">chapitre1</a> (1 <abbr title="occurences">occ.</abbr>)
    </span>
</li>
</ul>"""
    )


def test_index_with_idglossaire():
    chapter_id = "chapitre1"
    html_content = '<span class="conceptCR" data-idsp="éthologie réflexive visuelle" data-idglossaire="glossaire.html#éthologie-réflexive-visuelle">éthologie réflexive visuelle</span>'
    html = HTMLParser(html_content)
    ids = defaultdict(dict)
    refs = defaultdict(dict)
    kind = "conceptCR"
    collect_index_and_update_attrs(chapter_id, html, kind, ids, refs)
    expected_md5 = generate_md5("éthologie réflexive visuelle")
    assert (
        html.body.child.html
        == f'<span data-idsp="éthologie réflexive visuelle" data-idglossaire="glossaire.html#éthologie-réflexive-visuelle" class="conceptCR conceptCR-{expected_md5}" id="conceptCR-{expected_md5}">éthologie réflexive visuelle</span>'
    )
    assert ids == {
        "conceptCR": {
            "éthologie réflexive visuelle": {
                "glossaire_id": "glossaire.html#éthologie-réflexive-visuelle",
                "idsp_id": f"conceptCR-{expected_md5}",
            }
        }
    }
    assert refs == {"éthologie réflexive visuelle": {"chapitre1": 1}}
    assert (
        generate_index(ids, refs, {kind: "Concepts créés"})
        == """
<h2>Concepts créés</h2>
<ul class="full-width">
<li id="conceptCR-820eec36546cf3ec6e2d53f0577c8474" class="indexnp-entry">
    <span class="text">
        <a href="glossaire.html#éthologie-réflexive-visuelle">éthologie réflexive visuelle</a>
    </span>
    <span class="dots"></span>
    <span class="number">
    <a href="chapitre1.html#conceptCR-820eec36546cf3ec6e2d53f0577c8474">chapitre1</a> (1 <abbr title="occurences">occ.</abbr>)
    </span>
</li>
</ul>"""
    )
