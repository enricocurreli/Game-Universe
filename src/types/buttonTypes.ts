export type ButtonProps = {

    children: React.ReactNode;
    click?: () => void;
    type?: "submit" | "reset" | "button" | undefined;
    classes?: string;
    disabled?:boolean;
  }
  