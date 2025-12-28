# Contributing to Timeless

Thank you for your interest in contributing to the Timeless jewelry e-commerce platform! This document provides guidelines and instructions for contributing.

## Code of Conduct

- Be respectful and inclusive
- Provide constructive feedback
- Focus on the code, not the person
- Report inappropriate behavior to maintainers

## How to Contribute

### Reporting Bugs

Before creating a bug report, please check the issue tracker to avoid duplicates.

When filing a bug report, include:
- **Clear title and description**
- **Exact steps to reproduce**
- **Expected behavior**
- **Actual behavior**
- **Browser/OS information**
- **Screenshots if applicable**
- **Code snippets** if relevant

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When suggesting an enhancement, include:
- **Clear use case**
- **Expected behavior**
- **Why this would be useful**
- **Possible implementation approach**

### Pull Requests

1. Fork the repository
2. Create a branch: `git checkout -b feature/YourFeatureName`
3. Make your changes
4. Commit with clear messages: `git commit -m 'Add feature: description'`
5. Push to your branch: `git push origin feature/YourFeatureName`
6. Open a Pull Request with a clear description

### Commit Messages

Follow this format:
```
[Type]: Brief description

Longer explanation if needed. Explain why, not what.
```

Types: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`

Examples:
- `feat: Add product reviews feature`
- `fix: Resolve login session timeout issue`
- `docs: Update README with setup instructions`

## Development Setup

See `README.md` for detailed setup instructions.

## Coding Standards

### JavaScript/Node.js
- Use ES6 syntax
- Follow Express.js conventions
- Use async/await for promises
- Add meaningful variable names
- Comment complex logic

### EJS Templates
- Keep templates simple
- Use conditionals for role-based rendering
- Use includes for reusable components
- Add alt attributes to images

### CSS
- Use semantic class names
- Mobile-first approach
- Use CSS Grid/Flexbox over floats
- Keep media queries organized

### SQL
- Use parameterized queries (prepared statements)
- Use meaningful table/column names
- Add foreign key constraints
- Create appropriate indexes

## Testing

Before submitting a PR:
- Test on multiple browsers (Chrome, Firefox, Safari, Edge)
- Test on mobile devices/emulators
- Verify all database operations work
- Check for console errors

## Documentation

- Update README.md if adding features
- Add comments for complex code
- Update PROJECT_REPORT.md for major changes
- Include usage examples where applicable

## Deployment

Only maintainers can deploy to production. Ensure:
- All tests pass
- No sensitive data in code
- Dependencies updated and secured
- Documentation is current

## Questions?

- Open an issue with the `question` label
- Check existing issues/PRs
- See PROJECT_REPORT.md for detailed info

## Recognition

Contributors will be recognized in:
- README.md contributors section
- Release notes
- Project documentation

Thank you for helping make Timeless better! 🎉
