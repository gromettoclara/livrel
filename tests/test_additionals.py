from pathlib import Path

from pressoir.additionals import extract_additional_content
from pressoir.models import Chapter


def test_additional_content_extraction():
    repository_path = Path() / "tests" / "fixtures"
    chapter = Chapter(
        id="chapitre1",
        title="Chapitre 1",
        title_h="Chap. 1",
        abstract_fr="",
        abstract_en="",
        keyword_fr="",
        keyword_en="",
    )
    additional_item = (
        Path() / "tests" / "fixtures" / "additionnel-highpriority.md"
    ).read_text()
    additional_content = extract_additional_content(
        repository_path, chapter, additional_item
    )
    assert additional_content.id == "idEthologieReflexiveDev"
    assert additional_content.title == "Éthologie réflexive"
    assert (
        '<section id="idEthologieReflexiveDev" class="contenuadd texte auteur highpriority">'
        in additional_content.html
    )
    assert "<p>L&#x2019;auteur explique que&#xA0;:</p>" in additional_content.html


def test_additional_content_extraction_with_subtitle():
    repository_path = Path() / "tests" / "fixtures"
    chapter = Chapter(
        id="chapitre1",
        title="Chapitre 1",
        title_h="Chap. 1",
        abstract_fr="",
        abstract_en="",
        keyword_fr="",
        keyword_en="",
    )
    additional_item = (
        Path() / "tests" / "fixtures" / "additionnel-with-subtitle.md"
    ).read_text()
    additional_content = extract_additional_content(
        repository_path, chapter, additional_item
    )
    assert additional_content.id == "idChoixChapitres"
    assert additional_content.title == "Choix des différents chapitres"
    assert (
        '<section id="idChoixChapitres" class="contenuadd texte auteur lowpriority">'
        in additional_content.html
    )
    assert "<h3>Choix des diff&#xE9;rents chapitres</h3>" in additional_content.html
