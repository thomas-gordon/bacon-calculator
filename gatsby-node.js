

exports.onCreateWebpackConfig = ({ stage, actions }) => {
	actions.setWebpackConfig({
		resolve: {
			alias: {
			  'react-dom': '@hot-loader/react-dom'
			}
		}
	})
}
