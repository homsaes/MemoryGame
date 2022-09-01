import _Board from './frontend/components/Game.tsx'

import { Application, Router, helpers, Context} from 'https://deno.land/x/oak@v7.3.0/mod.ts'
import Index from "./frontend/pages/Index.tsx"

const app = new Application();
const port = 8000;
const router = new Router();
router.get("/", (context: Context) => {
	context.response.type = ".html"
	context.response.body = Index()
})

const getStaticContent = async (context: Context) => {
	const headers_by_extension: Record<string, string> = {
		js: 'application/javascript',
		css: 'text/css',
	}

	const file_name = helpers.getQuery(context, {mergeParams: true})!.file
	const file_extension = file_name!.split('.')[1]
	const css_content = await Deno.readTextFile(`./frontend/static/${file_name}`)

	context.response.headers.set("content-type", headers_by_extension[file_extension] ?? 'text/plain' )
	context.response.body = css_content
}

router.get("/static/:file", getStaticContent)

app.use(router.routes());
app.use(router.allowedMethods())

app.listen({ port });
console.log(`server is running on port: ${port}`)