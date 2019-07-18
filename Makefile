start-ui:
	cd ui && npm run start

clean-ui:
	@echo "Cleaning: ui"
	@cd ui && rm -rf dist

clean: clean-ui
