install:
	npm ci

brain-games:
	node bin/brain-games.js

brain-even:
	node bin/brain-even.js

brain-calculator:
	node bin/brain-calculator.js

brain-gcd:
	node bin/brain-gcd.js

publish:
	npm publish --dry-run

make lint:
	npx eslint