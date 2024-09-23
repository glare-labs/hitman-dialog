import nodeResolve from '@rollup/plugin-node-resolve'
import terser from '@rollup/plugin-terser'
import typescript from "@rollup/plugin-typescript"

export default {
    input: [
        './index.ts',
        './dialog/hitman-dialog.ts',
        './dialog-button/hitman-dialog-button.ts',
        './dialog-header/hitman-dialog-header.ts',
    ],
    output: {
        format: "esm",
        entryFileNames: '[name].js',
        dir: 'build',
        preserveModules: true
    },
    plugins: [
        nodeResolve(),
        typescript({
            tsconfig: './tsconfig.json',
            outputToFilesystem: false,
        }),
        terser()
    ],
    watch: true,
}
