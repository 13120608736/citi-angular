module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [
      2,
      "always",
      [
        "build",
        "chore",
        "ci",
        "docs",
        "feat",
        "fix",
        "pref",
        "refactor",
        "revert",
        "style",
        "test",
      ],
    ],
  },
};
