def test_titles(coquille):
    assert coquille.title == "Titre du livre test"
    assert coquille.title_h == "Titre du livre test"
    assert coquille.title_short == "Titre du livre test"
    assert coquille.title_short_html == "Titre du livre test"
    assert coquille.title_short_slug == "titre-du-livre-test"
    assert coquille.subtitle == "Sous-titre du <em>livre test</em>"
    assert coquille.subtitle_f == "Sous-titre du livre test"

    assert coquille.subtitle_raw == "Sous-titre du <em>livre test</em>"
    assert coquille.subtitle_html == "Sous-titre du <em>livre test</em>"
    assert coquille.subtitle_stripped == "Sous-titre du livre test"
    assert coquille.subtitle_slug == "sous-titre-du-livre-test"

    chapitre1 = coquille.chapters[1]
    assert chapitre1.title == "Titre du chapitre 1"
    assert chapitre1.title_h == "Titre du chapitre 1"
    assert chapitre1.title_short == "Titre du chapitre 1"
    assert chapitre1.title_short_html == "Titre du chapitre 1"
    assert chapitre1.title_short_slug == "titre-du-chapitre-1"
    assert chapitre1.subtitle == "Sous-titre du <em>chapitre</em> 1"
    assert chapitre1.subtitle_f == "Sous-titre du chapitre 1"

    assert chapitre1.subtitle_raw == "Sous-titre du <em>chapitre</em> 1"
    assert chapitre1.subtitle_html == "Sous-titre du <em>chapitre</em> 1"
    assert chapitre1.subtitle_stripped == "Sous-titre du chapitre 1"
    assert chapitre1.subtitle_slug == "sous-titre-du-chapitre-1"


def test_authors(coquille):
    assert len(coquille.authors) == 2
    assert [f"{author.forname} {author.surname}" for author in coquille.authors] == [
        "Prénom Auteur 1 Nom Auteur 1",
        "Prénom Auteur 2 Nom Auteur 2",
    ]


def test_chapters(coquille):
    assert len(coquille.chapters) == 10
    assert [chapter.id for chapter in coquille.chapters] == [
        "introduction",
        "chapitre1",
        "chapitre2",
        "chapitre3",
        "chapitre4",
        "chapitre5",
        "conclusion",
        "bibliographie",
        "index-np",
        "recherche",
    ]
    assert coquille.chapters[0].url == "http://urlDuLivre/introduction.html"


def test_chapters_authors(coquille_chapter):
    assert len(coquille_chapter.authors) == 2
    assert [
        f"{author.forname} {author.surname}" for author in coquille_chapter.authors
    ] == ["Marcello Vitali Rosati", "Antoine Fauchié"]
