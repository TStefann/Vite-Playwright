import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.js',
    css:true,
      // reporters: ['json'],
     outputFile: 'test.json'
  },
});


// docker build -t my-vite-project .   
// docker run --rm -v ./test.json:/app/test.json my-vite-project          

// npx playwright test --ui

// 