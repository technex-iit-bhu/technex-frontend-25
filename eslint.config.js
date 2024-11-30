export default[
    {
        "rules": {
          "@typescript-eslint/no-unused-vars": [
            "off",
            {
              "args": "all",
              "argsIgnorePattern": "^_",
              "caughtErrors": "all",
              "caughtErrorsIgnorePattern": "^_",
              "destructuredArrayIgnorePattern": "^_",
              "varsIgnorePattern": "^_",
              "ignoreRestSiblings": true
            }
          ]
        }
      }
]