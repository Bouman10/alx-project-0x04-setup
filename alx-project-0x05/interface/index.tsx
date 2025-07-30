// interface for routing
export interface PageRouteProps {
  pageRoute: string;
}

// interface for Button props
export interface ButtonProps {
  buttonLabel: string
  buttonSize?: string
  buttonBackgroundColor?: 'red' | 'blue' | 'orange' | 'green'
  action?: () => void
}

// interface for Layout props
export interface LayoutProps {
  children: React.ReactNode;
}
