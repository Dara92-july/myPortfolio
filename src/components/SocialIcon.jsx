import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const map = {
  github: FiGithub,
  linkedin: FiLinkedin,
  mail: FiMail,
};

export default function SocialIcon({ name, ...props }) {
  const Icon = map[name] || FiGithub;
  return <Icon {...props} />;
}
