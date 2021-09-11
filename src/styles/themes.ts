export interface ThemeProps {
  background: string;
  card: string;
  text: string;
  textSecondary: string;
  boxShadow: string;
}

export const darkTheme: ThemeProps = {
  background: 'var(--dark-background)',
  card: 'var(--dark-card)',
  text: 'var(--dark-text)',
  textSecondary: 'var(--dark-text-secondary)',
  boxShadow: 'var(--dark-box-shadow)',
};

export const lightTheme: ThemeProps = {
  background: 'var(--light-background)',
  card: 'var(--light-card)',
  text: 'var(--light-text)',
  textSecondary: 'var(--light-text-secondary)',
  boxShadow: 'var(--white-box-shadow)',
};
