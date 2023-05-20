export interface ChatUIProps {
  isOpen: boolean;
  handleClose?: () => void;
}

export interface MessageProps {
  message: string;
  isSender: boolean;
  type: string;
  handleChoices: any;
}
