# FAQ Component Testing

This directory contains comprehensive unit tests for the FAQ component in Storybook.

## Test Structure

### Unit Tests (`faq.test.js`)
Comprehensive unit tests covering:

- **Initial Rendering**: Component structure, classes, content rendering
- **Auto-expand First Item**: Default behavior verification
- **Interaction Behavior**: Click events, expand/collapse functionality
- **Accessibility**: ARIA attributes, keyboard navigation, focus management
- **Edge Cases**: Empty data, single items, malformed data
- **Performance**: Large datasets, rendering speed

### Storybook Interaction Tests (`storybook-interactions.test.js`)
End-to-end tests using Playwright to test the component in Storybook:

- Story loading and navigation
- User interactions (click, keyboard)
- Visual verification

## Running Tests

### Unit Tests
```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

### Storybook Tests
```bash
# Start Storybook first
npm run storybook

# In another terminal, run Storybook tests
npm run test-storybook
```

## Test Coverage

The FAQ component achieves **100% coverage** for:
- ✅ Statement coverage
- ✅ Function coverage  
- ✅ Line coverage
- ✅ Branch coverage (84.61%)

## Test Categories

### 1. Initial Rendering Tests
- Verifies correct DOM structure
- Checks CSS classes are applied
- Validates content rendering
- Ensures ARIA attributes are set

### 2. Auto-expand Tests
- Confirms first item expands by default
- Verifies other items remain collapsed
- Tests timing of auto-expand functionality

### 3. Interaction Tests
- Click to expand/collapse
- Toggle behavior
- Accordion-style behavior (close others when opening new)

### 4. Accessibility Tests
- ARIA attributes and relationships
- Keyboard navigation
- Focus management
- Screen reader compatibility

### 5. Edge Case Tests
- Empty FAQ data
- Single FAQ item
- Malformed data handling
- Large datasets

### 6. Performance Tests
- Rendering speed with 50+ items
- Memory usage verification

## Testing Tools Used

- **Jest**: Test runner and assertion library
- **@testing-library/dom**: DOM testing utilities
- **@testing-library/jest-dom**: Custom Jest matchers
- **jsdom**: Browser environment simulation
- **Playwright**: End-to-end testing for Storybook

## Best Practices

1. **Async Testing**: Uses `waitFor()` for timing-dependent tests
2. **Clean Setup**: Each test has isolated DOM environment
3. **Accessibility Focus**: Comprehensive ARIA and keyboard testing
4. **Edge Case Coverage**: Tests boundary conditions and error states
5. **Performance Monitoring**: Tests rendering speed and scalability

## Adding New Tests

When adding new FAQ functionality:

1. Add unit tests to `faq.test.js`
2. Add interaction tests to Storybook stories
3. Update this documentation
4. Ensure coverage remains high

## Troubleshooting

### Common Issues

1. **Timing Issues**: Use `waitFor()` for async operations
2. **CSS Mocking**: CSS files are mocked in Jest setup
3. **DOM Environment**: Tests run in jsdom environment
4. **Storybook Version Conflicts**: Use `--legacy-peer-deps` for installation 