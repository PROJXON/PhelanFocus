import {
  FaBolt,
  FaRocket,
  FaFire,
  FaLightbulb,
  FaBullseye,
  FaStar,
  FaChartLine,
  FaBrain,
  FaHandshake,
  FaDumbbell,
  FaClock,
  FaCompass,
  FaLock,
  FaBriefcase,
  FaCheck,
  FaUserTie,
  FaUsers,
} from 'react-icons/fa';
import { FaWandMagicSparkles, FaArrowRotateRight, FaFaceTired, FaMasksTheater, FaScaleBalanced } from 'react-icons/fa6';
import { Emoji } from '@/types/types';

const ICONS: Record<Emoji, React.ComponentType<{ className?: string }>> = {
  '⚡': FaBolt,
  '🚀': FaRocket,
  '🔥': FaFire,
  '💡': FaLightbulb,
  '🎯': FaBullseye,
  '🌟': FaStar,
  '✨': FaWandMagicSparkles,
  '📈': FaChartLine,
  '🧠': FaBrain,
  '🤝': FaHandshake,
  '💪': FaDumbbell,
  '🔄': FaArrowRotateRight,
  '😰': FaFaceTired,
  '⏰': FaClock,
  '🎭': FaMasksTheater,
  '⚖️': FaScaleBalanced,
  '🧭': FaCompass,
  '🔒': FaLock,
  '💼': FaBriefcase,
  '✔️': FaCheck,
  '👔': FaUserTie,
  '👥': FaUsers,
};

const EmojiIcon = ({ emoji, className }: { emoji: Emoji; className?: string }) => {
  const IconComponent = ICONS[emoji];
  return <IconComponent className={className} />;
};

export default EmojiIcon;
