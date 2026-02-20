import tempfile
from pathlib import Path

import yaml
from dataclass_wizard.dumpers import asdict

from pressoir.generator import generate_html_content


def test_chapter(coquille, coquille_chapter):
    dict_content = {
        "book": asdict(coquille),
        "chapter": asdict(coquille_chapter),
        "prev": "",
        "next": "",
        "meta": {},
    }
    yaml_content = yaml.dump(dict_content)
    yaml_content += "nocite: '[@*]'\n"
    with tempfile.NamedTemporaryFile() as metadata_file:
        metadata_file.write(yaml_content.encode("utf-8"))
        metadata_file.read()  # Required to be readable by Pandoc.
        html_content = generate_html_content(
            Path() / "pressoir" / "init" / "blank",
            None,
            coquille,
            coquille_chapter,
            metadata_file,
        )
    assert "<title>Titre du chapitre 2</title>" in html_content
    assert '<h1><a href="index.html">Titre du livre test</a></h1>' in html_content
    assert ' <h1><a href="index.html">Titre du livre test</a></h1>' in html_content
