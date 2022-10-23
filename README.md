fork of https://github.com/RaananW/babylonjs-webpack-es6

changes:
mochapack setup. uncommon test setup, but its one of the fastest because it incrementally runs tests on changed source files and runs your code through webpack first, so you're testing you're actual application code that is doing dumb stuff like importing .gltf or .css files (that's not actually a thing you can do)
