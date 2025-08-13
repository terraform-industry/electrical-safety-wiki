.PHONY: help lint lint-fix serve build clean install dev

help:
	@echo "Available commands:"
	@echo "  make lint      - Check markdown files for linting issues"
	@echo "  make lint-fix  - Auto-fix markdown linting issues"
	@echo "  make serve     - Start MkDocs development server"
	@echo "  make build     - Build documentation site"
	@echo "  make clean     - Clean build artifacts"
	@echo "  make install   - Install Python dependencies"
	@echo "  make dev       - Enter Nix development shell"

lint:
	@echo "Checking markdown files in docs/..."
	@markdownlint-cli2 "docs/**/*.md" || true

lint-fix:
	@echo "Auto-fixing markdown issues in docs/..."
	@markdownlint-cli2 --fix "docs/**/*.md"

serve:
	@echo "Starting MkDocs server at http://localhost:8000"
	@mkdocs serve

build:
	@echo "Building documentation..."
	@mkdocs build --strict

clean:
	@echo "Cleaning build artifacts..."
	@rm -rf site/
	@rm -rf .cache/
	@find . -type d -name "__pycache__" -exec rm -rf {} + 2>/dev/null || true

install:
	@echo "Installing Python dependencies..."
	@pip install -r requirements.txt

dev:
	@echo "Entering Nix development shell..."
	@nix develop