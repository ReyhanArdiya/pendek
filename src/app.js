if (process.env.NODE_ENV !== "production") {
	await import("dotenv/config");
}
import express from "express";

const port = process.env.PORT;
const app = express();

app.use((req, res, next) => {
	console.log(
		"๐ You got a new request! ( *โงโกโฆ)~๐ \\(๏ฟฃโฝ๏ฟฃ* )ใ ๐",
		`โ ${new Date()
			.toLocaleString()} โ`
	);
	next();
});


app.listen(port, () => console.log(`Listening on ๐ข ${port} (โ'โก'โ)`));