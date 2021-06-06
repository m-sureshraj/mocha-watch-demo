module.exports = {
    spec: ['src/**/*.spec.{js,ts}'],

    // file handling related config
    file: ['setup.ts'],
    // recursive: true,
    extension: ['js', 'ts'],
    require: 'ts-node/register',
    // ignore: ['src/lib/*.js'],

    // 'watch-files': ['src/command/object.spec.js'],
    // 'watch-ignore': ['src/lib/*.js'],
};

// file         :   tested
// ignore       :   tested
// watch-ignore :   tested
// watch-files  :   tested
// recursive    :   tested
// extension    :   tested
// require      :   tested

// File Handling
//       --extension          File extension(s) to load
//                                            [array] [default: ["js","cjs","mjs"]]
//       --file               Specify file(s) to be loaded prior to root suite
//                            execution                   [array] [default: (none)]
//       --ignore, --exclude  Ignore file(s) or glob pattern(s)
//                                                        [array] [default: (none)]
//       --recursive          Look for tests in subdirectories            [boolean]
//   -r, --require            Require module              [array] [default: (none)]
//   -S, --sort               Sort test files                             [boolean]
//   -w, --watch              Watch files in the current working directory for
//                            changes                                     [boolean]
//       --watch-files        List of paths or globs to watch               [array]
//       --watch-ignore       List of paths or globs to exclude from watching
//                                       [array] [default: ["node_modules",".git"]]
