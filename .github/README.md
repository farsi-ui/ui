# GitHub Configuration

This directory contains GitHub-specific configuration files for the Farsi UI project.

## Contents

### Issue Templates

Located in `ISSUE_TEMPLATE/`:

- **bug_report.md** - For reporting bugs and issues with components
- **feature_request.md** - For suggesting new features or components
- **documentation.md** - For documentation improvements
- **accessibility.md** - For accessibility issues and compliance concerns
- **config.yml** - Configuration for the issue template selector

### Pull Request Template

- **pull_request_template.md** - Template for pull requests with checklist and guidelines

## Using Issue Templates

When creating a new issue on GitHub, you'll be prompted to select a template:

1. Go to "Issues" → "New Issue"
2. Choose the appropriate template from the options
3. Fill out all required sections
4. Submit the issue

## Using the PR Template

When you create a pull request:

1. The template will auto-populate the PR description
2. Fill out all sections with relevant information
3. Go through the checklist before submitting
4. Request reviewers if needed

## Customization

To customize these templates:

1. Update the YAML front matter (the `---` section) for title, labels, and assignees
2. Update the template content with your specific requirements
3. Commit and push changes to the repository

## Additional Configuration

For more GitHub configuration options, see:

- [GitHub's documentation on issue and PR templates](https://docs.github.com/en/communities/using-templates-to-encourage-useful-issues-and-pull-requests)
- [About code owners](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-code-owners) (add CODEOWNERS file)
- [GitHub workflows](https://docs.github.com/en/actions) (for CI/CD)

## Future Additions

Consider adding:

- **CODEOWNERS** - Automatically request reviews from specific maintainers
- **GitHub Actions** - CI/CD workflows for testing and deployment
- **Dependabot configuration** - Automated dependency updates
- **Security policy** - Link to SECURITY.md for reporting vulnerabilities
