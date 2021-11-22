import { defaultTheme, GlobalStyles, ResetStyles } from '../styles/theme.config';
import { ThemeProvider } from 'styled-components';
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {
  return (
      <>
          <ThemeProvider theme={defaultTheme}>
            <ResetStyles />
            <GlobalStyles />
              <Layout>
                <Component {...pageProps} />
              </Layout>
          </ThemeProvider>
      </>
  );
}

export default MyApp
