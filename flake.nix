{
  description = "MkDocs development environment with Material theme and extensions";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = { self, nixpkgs, flake-utils }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        pkgs = nixpkgs.legacyPackages.${system};
        
        # Custom Python package for mdx-truly-sane-lists
        mdx-truly-sane-lists = pkgs.python311Packages.buildPythonPackage rec {
          pname = "mdx_truly_sane_lists";
          version = "1.3";
          format = "setuptools";
          
          src = pkgs.fetchPypi {
            inherit pname version;
            sha256 = "sha256-tmECLfdSCh4ROvfDVcYiFrOEyGfk9Z+47nrVEebnf0U=";
          };
          
          propagatedBuildInputs = with pkgs.python311Packages; [
            markdown
          ];
          
          meta = with pkgs.lib; {
            description = "Extension for Python-Markdown that makes lists truly sane";
            homepage = "https://github.com/radude/mdx_truly_sane_lists";
            license = licenses.mit;
            maintainers = [ ];
          };
        };
        
        # Python environment with MkDocs and extensions
        pythonEnv = pkgs.python311.withPackages (ps: with ps; [
          # Core MkDocs packages (all >= minimum required versions)
          mkdocs
          mkdocs-material
          pygments
          pymdown-extensions
          
          # Additional useful packages
          markdown
          
          # Custom package
          mdx-truly-sane-lists
        ]);
        
      in
      {
        devShells.default = pkgs.mkShell {
          buildInputs = with pkgs; [
            # Python environment
            pythonEnv
            
            # Node.js and markdown tools
            nodejs_20
            nodePackages.markdownlint-cli2
            
            # Build tools
            gnumake
            
            # Git for hooks
            git
          ];
          
          shellHook = ''
            echo "=========================================="
            echo "  MkDocs Development Environment Ready"
            echo "=========================================="
            echo ""
            echo "🚀 Quick Start Commands:"
            echo "  mkdocs serve          # Start development server"
            echo "  mkdocs build          # Build static site"
            echo "  mkdocs new .          # Initialize new MkDocs project"
            echo ""
            echo "📝 Markdown Linting:"
            echo "  markdownlint-cli2 **/*.md                    # Lint all markdown"
            echo "  markdownlint-cli2 --fix **/*.md              # Auto-fix issues"
            echo "  markdownlint-cli2 --config .markdownlint.yml # Use custom config"
            echo ""
            echo "🔧 Development Tools:"
            echo "  make                  # Run build tasks"
            echo "  python -m mkdocs      # Alternative MkDocs invocation"
            echo ""
            echo "🌐 Development Server:"
            echo "  Default URL: http://localhost:8000"
            echo "  Live reload enabled for .md and .yml files"
            echo ""
            echo "📦 Installed Packages:"
            echo "  - MkDocs $(python -c "import mkdocs; print(mkdocs.__version__)")"
            echo "  - Material Theme $(python -c "import material; print(material.__version__)")"
            echo "  - PyMdown Extensions $(python -c "import pymdownx; print(pymdownx.__version__)")"
            echo "  - Node.js $(node --version)"
            echo ""
            echo "📦 Custom Extensions:"
            echo "  - mdx-truly-sane-lists $(python -c "import mdx_truly_sane_lists; print('installed')" 2>/dev/null || echo 'not found')"
            echo ""
            
            # Setup git hooks directory if it exists
            if [ -d ".githooks" ]; then
              echo "🔗 Configuring git hooks from .githooks directory..."
              git config core.hooksPath .githooks
              chmod +x .githooks/* 2>/dev/null || true
              echo "  Git hooks configured for markdown auto-fixing"
            else
              echo "💡 Tip: Create .githooks directory for automated markdown fixing"
            fi
            
            echo "=========================================="
          '';
        };
        
        # Provide packages for external use
        packages = {
          python-env = pythonEnv;
        };
      });
}