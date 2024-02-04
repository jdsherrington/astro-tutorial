import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
    site: "https://example.com",
	integrations: [],
	server: { host: true, port: 3000 },
});
