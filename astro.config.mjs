import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
	site: "https://main--chipper-twilight-54a601.netlify.app/",
	integrations: [],
	server: { host: true, port: 3000 },
});
