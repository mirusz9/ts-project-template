import express, { Request, Response, NextFunction} from "express";
const app = express();
const port = process.env.PORT || 3000;
const splitRootDir = __dirname.split("\\");
splitRootDir.pop();
const rootDir = splitRootDir.join("\\");

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
