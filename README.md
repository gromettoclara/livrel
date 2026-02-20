# Pressoir

Documentation complète : https://pressoir.org/

Initialement développé par David Larlet [ici]()


## Installation

Pré-requis : Python3.8+

Installer et activer un environnement virtuel :

    $ python3 -m venv venv
    $ source venv/bin/activate

Installer les dépendances :

    $ make install


## Construire le livre

    $ pressoir build --repository-path=./livrel

En bonus, il est possible de passer un chapitre particulier pour ne reconstruire que lui :

    $ pressoir build --repository-path=./livrel --chapter=chapter1


## Servir un livre

    $ pressoir serve --repository-path=./livrel

Mais les liens de parcours fonctionnent (🤞) sans lancer de serveur.

# Structure des textes dans le pressoir-trilingue

Pour chaque contenu : 

- un dossier nommé par l'identifiant qui est indiqué dans la `toc` du livre.yaml de garde\
- un fichier id_lang.md
- un fichier id_lang.yaml
- autant que de langues 

Dans livrel/pressoir/book.toml : 

Indiquer la liste des langues : `languages = ["fr", "es"]`