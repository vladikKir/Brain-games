install:
	npm ci
brain-games: #Launch game
	node bin/brain-games.js
publish:
	npm publish --dry-run
