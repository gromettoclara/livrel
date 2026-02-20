.DEFAULT_GOAL := help
RED=\033[0;31m
GREEN=\033[0;32m
ORANGE=\033[0;33m
BLUE=\033[0;34m
NC=\033[0m # No Color

.PHONY: install
install: ## Install Python dependencies
	@echo "${GREEN}🤖 Installing dependencies${NC}"
	python3 -m pip install --upgrade pip
	python3 -m pip install --editable .

.PHONY: dev
dev: install ## Install the development dependencies
	python3 -m pip install --editable ".[dev]"

.PHONY: documentation
documentation: ## Generate pressoir documentation
	uv run --with cogapp cog -r README.md

.PHONY: test
test: ## Run all unit tests.
	uv run --with pytest pytest tests

.PHONY: lint
lint: ## Lint code.
	uv run --with isort isort --profile black pressoir/
	uv run --with ruff ruff check pressoir/
	uv run --with ruff ruff format pressoir/

.PHONY: version
version: ## Display the current version
	@uv run --with hatch hatch version

.PHONY: patch
patch: ## Bump the current version to a new patch one
	@uv run --with hatch hatch version fix

.PHONY: minor
minor: ## Bump the current version to a new minor one
	@uv run --with hatch hatch version minor

.PHONY: build
build: ## Build the Python package before release
	@uv run --with hatch hatch build --clean

.PHONY: publish
publish: ## Publish the Python package to Pypi
	@uv run --with hatch hatch publish

.PHONY: help
help:
	@python3 -c "$$PRINT_HELP_PYSCRIPT" < $(MAKEFILE_LIST)

# See https://daniel.feldroy.com/posts/autodocumenting-makefiles
define PRINT_HELP_PYSCRIPT # start of Python section
import re, sys

output = []
# Loop through the lines in this file
for line in sys.stdin:
    # if the line has a command and a comment start with
    #   two pound signs, add it to the output
    match = re.match(r'^([a-zA-Z_-]+):.*?## (.*)$$', line)
    if match:
        target, help = match.groups()
        output.append("\033[36m%-25s\033[0m %s" % (target, help))
# Sort the output in alphanumeric order
output.sort()
# Print the help result
print('\n'.join(output))
endef
export PRINT_HELP_PYSCRIPT # End of python section
