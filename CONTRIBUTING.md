# Contribution Guidelines 🤝

## Welcome!

Thank you for considering contributing to TaskGlitch! This document provides guidelines for contributing to this project.

## Code of Conduct

- Be respectful and inclusive
- Provide constructive feedback
- Focus on the code, not the person

## How to Contribute

### Reporting Bugs

If you find a bug:

1. **Check existing issues** to avoid duplicates
2. **Create a detailed bug report** including:
   - Steps to reproduce
   - Expected behavior
   - Actual behavior
   - Screenshots (if applicable)
   - Browser/OS information

### Suggesting Features

1. Open an issue with the "enhancement" label
2. Describe the feature and its use case
3. Explain why it would benefit users

### Pull Requests

1. **Fork the repository**
2. **Create a feature branch:**
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Make your changes** following the code style
4. **Test thoroughly**
5. **Commit with descriptive messages:**
   ```bash
   git commit -m "feat: add task filtering by date range"
   ```
6. **Push to your fork:**
   ```bash
   git push origin feature/your-feature-name
   ```
7. **Open a Pull Request** with a clear description

## Development Setup

```bash
# Clone the repo
git clone https://github.com/yourusername/grafen-taskglitch.git
cd grafen-taskglitch

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Code Style

- Use **TypeScript** for type safety
- Follow **React best practices**
- Use **functional components** and hooks
- Write **clear, descriptive variable names**
- Add **comments** for complex logic
- Keep **files small and focused** (single responsibility)

## Commit Message Convention

Follow [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation changes
- `style:` Code style changes (formatting, etc.)
- `refactor:` Code refactoring
- `test:` Adding or updating tests
- `chore:` Maintenance tasks

Examples:
```
feat: add dark mode toggle
fix: resolve ROI calculation for zero time
docs: update README with deployment instructions
refactor: extract task validation to utility function
```

## Testing

Before submitting a PR:

1. Test all features manually
2. Ensure no console errors
3. Verify responsive design
4. Check for TypeScript errors: `npx tsc --noEmit`
5. Build successfully: `npm run build`

## Areas for Contribution

We welcome contributions in these areas:

- [ ] Unit tests for utilities
- [ ] E2E tests with Playwright/Cypress
- [ ] Accessibility improvements
- [ ] Performance optimizations
- [ ] Dark mode theme
- [ ] Mobile UI enhancements
- [ ] Additional chart types
- [ ] Export formats (Excel, JSON)
- [ ] Task templates
- [ ] Keyboard shortcuts
- [ ] Drag-and-drop task reordering
- [ ] Task dependencies
- [ ] Recurring tasks
- [ ] Team collaboration features

## Questions?

Feel free to open an issue for any questions or discussions!

## License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

**Thank you for contributing! 🎉**
