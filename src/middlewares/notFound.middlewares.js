const notFound = (req, res) => {
	return res.status(404).json("Can not found this path");
};

module.exports = notFound;
