import { defineConfig } from 'dumi';

const repo = 'koalaui'; // 项目名

export default defineConfig({
  themeConfig: {
    name: 'koala-ui',
  },
  resolve: {
    codeBlockMode: 'passive',
  },
  base: process.env.NODE_ENV === 'production' ? `/${repo}/` : '/',
  publicPath: process.env.NODE_ENV === 'production' ? `/${repo}/` : '/',
});
