const fs = require("fs")
const path = require("path")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const TerserPlugin = require("terser-webpack-plugin")

const outputPath = path.resolve(__dirname, "dist/ec-portfolio/")

const pkg = require("./package.json")
const projectName = pkg.name

const entriesPath = path.resolve(__dirname, "src/js")
let entries = []

async function getAllEntries(initialPath) {
    try {
        const files = await fs.promises.readdir(initialPath)
        const filePaths = files.map((file) => path.join(initialPath, file))

        const nestedEntries = await Promise.all(
            filePaths.map(async (currentPath) => {
                const stats = await fs.promises.stat(currentPath)

                if (stats.isDirectory()) {
                    return getAllEntries(currentPath)
                }

                return currentPath.includes("entry") ? currentPath : null
            })
        )

        return nestedEntries.filter(Boolean).flat()
    } catch (error) {
        throw error
    }
}

async function generateWebpackConfig() {
    try {
        const nestedEntries = await getAllEntries(entriesPath)
        entries.push(...nestedEntries)
    } catch (error) {
        console.error("Error reading directory:", error)
        process.exit(1)
    }

    const webpackConfig = {
        entry: [...entries, "./src/scss/styles.scss"],
        output: {
            filename: `${projectName}.bundle.js`,
            path: outputPath
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: "babel-loader",
                        options: {
                            presets: ["@babel/preset-env"]
                        }
                    }
                },
                {
                    test: /\.scss$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        "css-loader",
                        "sass-loader"
                    ]
                }
            ]
        },
        plugins: [
            new MiniCssExtractPlugin({
                filename: `${projectName}.bundle.css`
            })
        ],
        optimization: {
            usedExports: true,
            minimizer: [
                new TerserPlugin({
                    terserOptions: {
                        keep_fnames: true,
                        keep_classnames: true
                    }
                })
            ]
        }
    }

    return webpackConfig
}

module.exports = generateWebpackConfig()
