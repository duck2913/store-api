const db = require("./db")

const execute = async () => {
	const result = await db.any(
		`SELECT CONSTRAINT_NAME, CONSTRAINT_TYPE
FROM INFORMATION_SCHEMA.TABLE_CONSTRAINTS
WHERE TABLE_NAME='STUDENT_INFO';`,
	)
	// const result = await db.any("select * from products")
	console.log(result)
}

execute()
