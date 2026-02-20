from pathlib import Path

import pytest

from pressoir.models import configure_book


@pytest.fixture(scope="session")
def coquille():
    return configure_book(
        Path() / "pressoir" / "init" / "blank" / "textes" / "garde" / "livre.yaml",
    )


@pytest.fixture(scope="session")
def coquille_chapter(coquille):
    return coquille.chapters[2]
