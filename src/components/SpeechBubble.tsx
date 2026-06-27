interface SpeechBubbleProps {
  message: string;
}

const SpeechBubble = ({ message }: SpeechBubbleProps) => {
  return (
    <div className="absolute -top-16 left-1/2 -translate-x-1/2 rounded-xl bg-white px-4 py-2 text-sm text-black shadow-lg whitespace-nowrap">
      {message}
    </div>
  );
};

export default SpeechBubble;