import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// Custom Vite plugin providing a local indigenous native TTS proxy
const ttsProxyPlugin = () => ({
  name: 'tts-proxy-plugin',
  configureServer(server) {
    server.middlewares.use('/api/tts', async (req, res) => {
      try {
        const urlObj = new URL(req.url, 'http://localhost');
        const tl = urlObj.searchParams.get('tl') || 'ha';
        const q = urlObj.searchParams.get('q') || '';

        if (!q) {
          res.statusCode = 400;
          res.end('Missing query parameter q');
          return;
        }

        const ttsUrl = `https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&tl=${encodeURIComponent(tl)}&q=${encodeURIComponent(q)}`;

        const response = await fetch(ttsUrl, {
          headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
            'Accept': 'audio/mpeg,audio/*;q=0.9,*/*;q=0.8',
          },
        });

        if (!response.ok) {
          res.statusCode = response.status;
          res.end('Upstream TTS error');
          return;
        }

        const arrayBuffer = await response.arrayBuffer();
        res.setHeader('Content-Type', 'audio/mpeg');
        res.setHeader('Cache-Control', 'public, max-age=86400');
        res.end(Buffer.from(arrayBuffer));
      } catch (err) {
        console.error('TTS Proxy Error:', err);
        res.statusCode = 500;
        res.end('Internal Server Error');
      }
    });
  },
});

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), ttsProxyPlugin()],
})
