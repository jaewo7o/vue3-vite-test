module.exports = {
    env: {
        node: true,
        es2021: true
    },
    extends: [
        // 'plugin:vue/essential',
        // 'standard'
        'eslint:recommended',
        'plugin:vue/vue3-recommended'
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
    },
    plugins: [
        'vue'
    ],
    rules: {
        indent: ['error', 4],
        "vue/html-indent": ['error', 4]
    }
}
