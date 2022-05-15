const path = require("path");
const resolveFrom = require("resolve-from");
const {loadFromPackageField, resolveFromRoot} = require('@rescripts/utilities')
const useBabelConfig = require('@rescripts/rescript-use-babel-config')
const useESLintConfig = require('@rescripts/rescript-use-eslint-config')
const useTSLintConfig = require('@rescripts/rescript-use-tslint-config')
const {split, last, reduce, compose} = require('ramda')

const fixLinkedDependencies = (config) => {
  config.resolve = {
    ...config.resolve,
    alias: {
      ...config.resolve.alias,
      ethers$: resolveFrom(path.resolve("node_modules"), "ethers"),
      react$: resolveFrom(path.resolve("node_modules"), "react"),
      "react-dom$": resolveFrom(path.resolve("node_modules"), "react-dom"),
    },
  };
  return config;
};

// const includeSrcDirectory = (config) => {
//   config.resolve = {
//     ...config.resolve,
//     modules: [path.resolve("src"), ...config.resolve.modules],
//   };
//   return config;
// };

const allowOutsideSrc = (config) => {
  config.resolve.plugins = config.resolve.plugins.filter(
    (p) => p.constructor.name !== "ModuleScopePlugin"
  );
  return config;
};

// module.exports = [
//   ["use-babel-config", ".babelrc"],
//   ["use-eslint-config", ".eslintrc"],
//   fixLinkedDependencies,
//   allowOutsideSrc,
//   // includeSrcDirectory,
// ];

const nameOnly = path => (path ? last(split('/', path)) : null)

const env = config => {
  const babelConfig =
    loadFromPackageField('babel') ||
    nameOnly(resolveFromRoot('.babelrc') || resolveFromRoot('config.babel'))

  const eslintConfig =
    loadFromPackageField('eslintConfig') ||
    nameOnly(resolveFromRoot('.eslintrc') || resolveFromRoot('config.eslint'))

  const tslintConfig =
    resolveFromRoot('tsconfig.json') && resolveFromRoot('tslint')

  const transforms = reduce(
    (accumulator, [rescript, path]) =>
      path ? [...accumulator, rescript(path)] : accumulator,
    [],
    [
      [useBabelConfig, babelConfig],
      [useESLintConfig, eslintConfig],
      [useTSLintConfig, tslintConfig],
    ],
  )

  const transform = compose(...transforms)
  return transform(config)
}

module.exports = [
  env,
  fixLinkedDependencies,
  allowOutsideSrc
]