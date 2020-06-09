import express, { Request, Response, NextFunction} from "express";
import path from "path";

const app = express();
const port = process.env.PORT || 3000;
const rootDir = path.join(__dirname, "..");

app.use(express.static(rootDir));

app.get("/", (req: Request, res: Response) => {

	res.sendFile(`${rootDir}\\index.html`);
	res.end();
});

app.use((req: Request, res: Response, next: NextFunction) => {
	res.redirect("/");
	res.end();
	next();
})

app.listen(port, () => {
	console.log(`Listening on localhost:${port}`);
});
