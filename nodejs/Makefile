manifests = nodejs.manifest

target = install-package
exec_target = $(manifests)

extra_rules =
clean-extra += clean-package

include ../../Makefile.Test

install-package:
	npm install

clean-package:
	rm -rf node_modules
