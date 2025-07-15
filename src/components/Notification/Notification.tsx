import { useEffect, useState } from "react";
import { FaCheckCircle } from "react-icons/fa";

type NotificationProps = {
  message: string;
  duration?: number;
  onClose?: () => void;
};

export const Notification = ({ 
  message, 
  duration = 3000, 
  onClose 
}: NotificationProps) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      onClose?.(); // Chama onClose se existir
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  if (!visible) return null;

  return (
    <div className="fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-md shadow-lg flex items-center gap-2 z-50 animate-fade-in">
      <FaCheckCircle className="text-xl" />
      <span>{message}</span>
    </div>
  );
};