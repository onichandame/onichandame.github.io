require("ts-node").register({ files: true })

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    module: {
      rules: [
        {
          test: /\.(glb)$/i,
          use: [
            {
              loader: "file-loader"
            }
          ]
        }
      ]
    }
  })
}
