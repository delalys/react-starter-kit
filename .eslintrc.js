module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": ["plugin:@typescript-eslint/recommended", "prettier"],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "sourceType": "module",
        "allowImportExportEverywhere": false,
        "codeFrame": false,
        "ecmaVersion": 12,
    },
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    "rules": {
        "import/extensions": "off",
        "@typescript-eslint/explicit-module-boundary-types": "off",
        'react/jsx-filename-extension': [2, { 'extensions': ['.js', '.jsx', '.ts', '.tsx'] }],
    },
    "settings": {
        'import/extensions': 0,
        "import/resolver": {
            "node": {
                "extensions": [".js", ".jsx", ".ts", ".tsx"]
            }
        }
    },
};
